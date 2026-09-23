(() => {
    const repo = getRepoFromQuery();
    const BLOB_BASE = readmeBlobBase(repo);
    const README_RAW_BASE = readmeRawBase(repo);

    const contentEl = document.getElementById("content");
    const tocEl = document.getElementById("toc");
    const sourceLinkEl = document.getElementById("sourceLink");

    const { closeMobileSidebar } = initPageChrome();

    document.title = repo.name;
    if (sourceLinkEl) sourceLinkEl.href = `https://github.com/${repo.owner}/${repo.repo}`;

    let scrollSpyHandler = null;

    function escapeHtml(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }

    function stripManualToc() {
        const headings = Array.from(contentEl.querySelectorAll("h1,h2,h3,h4,h5,h6"));
        const tocHeading = headings.find((h) => /^table of contents$/i.test(h.textContent.trim()));
        if (!tocHeading) return;

        const level = Number(tocHeading.tagName[1]);
        const toRemove = [tocHeading];
        let node = tocHeading.nextElementSibling;
        while (node) {
            const isHr = node.tagName === "HR";
            const isHeading = /^H[1-6]$/.test(node.tagName);
            if (isHeading && Number(node.tagName[1]) <= level) break;
            toRemove.push(node);
            if (isHr) break;
            node = node.nextElementSibling;
        }
        toRemove.forEach((n) => n.remove());
    }

    function resolveRelativeUrls() {
        contentEl.querySelectorAll("a[href]").forEach((a) => {
            const href = a.getAttribute("href");
            if (!href || /^(https?:)?\/\//i.test(href) || href.startsWith("#") || href.startsWith("mailto:")) return;
            a.href = new URL(href, BLOB_BASE).href;
        });
        contentEl.querySelectorAll("a[href^='http']").forEach((a) => {
            a.target = "_blank";
            a.rel = "noopener";
        });
        contentEl.querySelectorAll("img[src]").forEach((img) => {
            const src = img.getAttribute("src");
            if (!src || /^(https?:)?\/\//i.test(src) || src.startsWith("data:")) return;
            img.src = new URL(src, README_RAW_BASE).href;
        });
    }

    function assignHeadingIds(headings) {
        const seen = new Set();
        headings.forEach((h) => {
            h.id = slugifyHeading(h.textContent, seen);
        });
    }

    function highlightCodeBlocks() {
        if (typeof hljs === "undefined") return;
        contentEl.querySelectorAll("pre code").forEach((block) => hljs.highlightElement(block));
    }

    function buildToc(headings) {
        const tree = buildTocTree(headings);

        if (tree.length === 0) {
            tocEl.innerHTML = `<p class="status">No sections found.</p>`;
            return;
        }

        tocEl.innerHTML = "";
        tocEl.appendChild(renderTocTree(tree, { linkPrefix: "", onNavigate: closeMobileSidebar }));
    }

    function setupScrollSpy() {
        if (scrollSpyHandler) {
            window.removeEventListener("scroll", scrollSpyHandler);
            window.removeEventListener("resize", scrollSpyHandler);
            scrollSpyHandler = null;
        }

        const links = Array.from(tocEl.querySelectorAll("a[data-target]"));
        const targets = links
            .map((a) => document.getElementById(a.dataset.target))
            .filter(Boolean);

        if (targets.length === 0) return;

        const setActive = (id) => {
            links.forEach((a) => a.classList.toggle("active", a.dataset.target === id));
        };

        const ACTIVE_LINE = 96;

        function updateActive() {
            const atBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

            if (atBottom) {
                setActive(targets[targets.length - 1].id);
                return;
            }

            let currentId = targets[0].id;
            for (const t of targets) {
                if (t.getBoundingClientRect().top <= ACTIVE_LINE) {
                    currentId = t.id;
                } else {
                    break;
                }
            }
            setActive(currentId);
        }

        let ticking = false;
        scrollSpyHandler = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                updateActive();
                ticking = false;
            });
        };

        window.addEventListener("scroll", scrollSpyHandler, { passive: true });
        window.addEventListener("resize", scrollSpyHandler);

        links.forEach((a) => {
            a.addEventListener("click", () => setActive(a.dataset.target));
        });

        updateActive();
    }

    // --- Wikipedia hover preview ---
    const wikiCache = new Map();
    let wikiPreviewEl = null;
    let wikiHoverTimer = null;
    let wikiActiveLink = null;

    function getWikiPreviewEl() {
        if (!wikiPreviewEl) {
            wikiPreviewEl = document.createElement("div");
            wikiPreviewEl.className = "wiki-preview";
            document.body.appendChild(wikiPreviewEl);
            wikiPreviewEl.addEventListener("mouseenter", () => clearTimeout(wikiHoverTimer));
            wikiPreviewEl.addEventListener("mouseleave", hideWikiPreview);
        }
        return wikiPreviewEl;
    }

    function hideWikiPreview() {
        clearTimeout(wikiHoverTimer);
        wikiActiveLink = null;
        if (wikiPreviewEl) wikiPreviewEl.classList.remove("show");
    }

    function positionWikiPreview(link) {
        const box = getWikiPreviewEl();
        const rect = link.getBoundingClientRect();
        box.style.top = `${rect.bottom + window.scrollY + 8}px`;
        const maxLeft = window.scrollX + document.documentElement.clientWidth - 320;
        box.style.left = `${Math.max(8, Math.min(rect.left + window.scrollX, maxLeft))}px`;
    }

    function renderWikiPreview(box, data) {
        const thumb = data.thumbnail ? `<img class="wiki-preview-thumb" src="${data.thumbnail.source}" alt="">` : "";
        box.innerHTML = `
        <div class="wiki-preview-body">
            ${thumb}
            <div>
                <p class="wiki-preview-title">${escapeHtml(data.title || "")}</p>
                <p class="wiki-preview-extract">${escapeHtml(data.extract || "")}</p>
            </div>
        </div>`;
    }

    async function showWikiPreview(link) {
        const title = decodeURIComponent(link.pathname.split("/wiki/")[1] || "");
        if (!title) return;
        const box = getWikiPreviewEl();
        positionWikiPreview(link);
        box.innerHTML = `<p class="wiki-preview-status">Loading…</p>`;
        box.classList.add("show");

        if (wikiCache.has(title)) return renderWikiPreview(box, wikiCache.get(title));

        try {
            const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
            if (!res.ok) throw new Error("Not found");
            const data = await res.json();
            wikiCache.set(title, data);
            if (wikiActiveLink === link) renderWikiPreview(box, data);
        } catch {
            if (wikiActiveLink === link) box.innerHTML = `<p class="wiki-preview-status">No preview available.</p>`;
        }
    }

    function enableWikiPreviews() {
        contentEl.querySelectorAll('a[href*="wikipedia.org/wiki/"]').forEach((link) => {
            link.classList.add("wiki-term");
            link.addEventListener("mouseenter", () => {
                wikiActiveLink = link;
                clearTimeout(wikiHoverTimer);
                wikiHoverTimer = setTimeout(() => showWikiPreview(link), 300);
            });
            link.addEventListener("mouseleave", () => {
                clearTimeout(wikiHoverTimer);
                wikiHoverTimer = setTimeout(hideWikiPreview, 200);
            });
        });
    }

    function render(markdown) {
        contentEl.innerHTML = marked.parse(markdown, { gfm: true, breaks: false });
        stripManualToc();
        resolveRelativeUrls();

        const headings = Array.from(contentEl.querySelectorAll("h1,h2,h3,h4,h5,h6"));
        assignHeadingIds(headings);
        highlightCodeBlocks();
        buildToc(headings);
        setupScrollSpy();
        enableWikiPreviews();
    }

    async function loadReadme() {
        try {
            const markdown = await fetchReadmeMarkdown(repo);
            render(markdown);
        } catch (err) {
            contentEl.innerHTML = `
        <p class="error">
          Couldn't load the README from GitHub right now.<br>
          <small>${escapeHtml(err.message)}</small><br>
          <button id="retry">Try again</button>
        </p>`;
            document.getElementById("retry").addEventListener("click", loadReadme);
        }
    }

    loadReadme();
})();