(() => {
    const repo = getRepoFromQuery();
    const BLOB_BASE = readmeBlobBase(repo);
    const README_RAW_BASE = readmeRawBase(repo);
    const HEADINGS = "h1,h2,h3,h4,h5,h6";
    const ABSOLUTE_URL = /^(https?:)?\/\//i;

    const contentEl = document.getElementById("content");
    const tocEl = document.getElementById("toc");
    const sourceLinkEl = document.getElementById("sourceLink");

    const { closeMobileSidebar } = initPageChrome();

    document.title = repo.name;
    if (sourceLinkEl) sourceLinkEl.href = `https://github.com/${repo.owner}/${repo.repo}`;

    function escapeHtml(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }

    // Remove a hand-written "Table of contents" section; the sidebar replaces it.
    function stripManualToc() {
        const tocHeading = Array.from(contentEl.querySelectorAll(HEADINGS))
            .find((h) => /^table of contents$/i.test(h.textContent.trim()));
        if (!tocHeading) return;

        const level = Number(tocHeading.tagName[1]);
        const toRemove = [tocHeading];
        for (let node = tocHeading.nextElementSibling; node; node = node.nextElementSibling) {
            if (/^H[1-6]$/.test(node.tagName) && Number(node.tagName[1]) <= level) break;
            toRemove.push(node);
            if (node.tagName === "HR") break;
        }
        toRemove.forEach((n) => n.remove());
    }

    function resolveRelativeUrls() {
        contentEl.querySelectorAll("a[href]").forEach((a) => {
            const href = a.getAttribute("href");
            if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;

            if (ABSOLUTE_URL.test(href)) {
                a.target = "_blank";
                a.rel = "noopener";
            } else {
                a.href = new URL(href, BLOB_BASE).href;
            }
        });

        contentEl.querySelectorAll("img[src]").forEach((img) => {
            const src = img.getAttribute("src");
            if (!src || ABSOLUTE_URL.test(src) || src.startsWith("data:")) return;
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
        const items = buildTocItems(headings);

        if (items.length === 0) {
            tocEl.innerHTML = `<p class="status">No sections found.</p>`;
            return;
        }

        tocEl.replaceChildren(renderToc(items, { onNavigate: closeMobileSidebar }));
    }

    function setupScrollSpy() {
        const links = Array.from(tocEl.querySelectorAll("a[data-target]"));
        const targets = links.map((a) => document.getElementById(a.dataset.target)).filter(Boolean);
        if (targets.length === 0) return;

        const ACTIVE_LINE = 96;

        const setActive = (id) => {
            links.forEach((a) => a.classList.toggle("active", a.dataset.target === id));
        };

        function updateActive() {
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            if (atBottom) return setActive(targets[targets.length - 1].id);

            let currentId = targets[0].id;
            for (const t of targets) {
                if (t.getBoundingClientRect().top > ACTIVE_LINE) break;
                currentId = t.id;
            }
            setActive(currentId);
        }

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                updateActive();
                ticking = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        links.forEach((a) => a.addEventListener("click", () => setActive(a.dataset.target)));

        updateActive();
    }

    // wikipedia hover preview
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
        wikiPreviewEl?.classList.remove("show");
    }

    function positionWikiPreview(link) {
        const box = getWikiPreviewEl();
        const rect = link.getBoundingClientRect();
        const maxLeft = window.scrollX + document.documentElement.clientWidth - 320;
        box.style.top = `${rect.bottom + window.scrollY + 8}px`;
        box.style.left = `${Math.max(8, Math.min(rect.left + window.scrollX, maxLeft))}px`;
    }

    function renderWikiPreview(box, data) {
        const thumb = data.thumbnail
            ? `<img class="wiki-preview-thumb" src="${escapeHtml(data.thumbnail.source)}" alt="">`
            : "";
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
        box.classList.add("show");

        if (wikiCache.has(title)) return renderWikiPreview(box, wikiCache.get(title));
        box.innerHTML = `<p class="wiki-preview-status">Loading…</p>`;

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

        const headings = Array.from(contentEl.querySelectorAll(HEADINGS));
        assignHeadingIds(headings);
        highlightCodeBlocks();
        buildToc(headings);
        setupScrollSpy();
        enableWikiPreviews();
    }

    async function loadReadme() {
        try {
            render(await fetchReadmeMarkdown(repo));
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