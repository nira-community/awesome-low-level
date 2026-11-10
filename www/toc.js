const REPO = {
    owner: "nira-community",
    repo: "awesome-low-level",
    branch: "main",
    name: "Awesome Low-Level"
};

const MAX_SIDEBAR_TOC_LEVEL = 6;

const getRepoFromQuery = () => REPO;
const readmeRawBase = (repo = REPO) => `https://raw.githubusercontent.com/${repo.owner}/${repo.repo}/${repo.branch}/`;
const readmeBlobBase = (repo = REPO) => `https://github.com/${repo.owner}/${repo.repo}/blob/${repo.branch}/`;

async function fetchReadmeMarkdown(repo = REPO) {
    const res = await fetch(`${readmeRawBase(repo)}README.md?_=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`GitHub responded with ${res.status}`);
    return res.text();
}

function slugifyHeading(text, seen) {
    const base = text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") || "section";
    let slug = base;
    for (let i = 1; seen.has(slug); i++) slug = `${base}-${i}`;
    seen.add(slug);
    return slug;
}

// Flat list of top-level sections (the first heading is the page title, so it's skipped).
// Deeper headings under a section are intentionally left out of the sidebar.
function buildTocItems(headingEls, maxLevel = MAX_SIDEBAR_TOC_LEVEL) {
    const items = [];
    let topLevel = Infinity;

    headingEls
        .filter((h) => Number(h.tagName[1]) <= maxLevel)
        .slice(1)
        .forEach((h) => {
            const level = Number(h.tagName[1]);
            if (level > topLevel) return;
            topLevel = level;
            items.push({
                id: h.id,
                text: h.textContent.replace(/^\d+\.\s*/, "").replace(/\s*[?!]+\s*$/, ""),
            });
        });

    return items;
}

function renderToc(items, { onNavigate = null } = {}) {
    const ul = document.createElement("ul");

    items.forEach((item) => {
        const li = document.createElement("li");
        li.className = "toc-node";

        const a = document.createElement("a");
        a.href = `#${item.id}`;
        a.textContent = item.text;
        a.dataset.target = item.id;
        if (onNavigate) a.addEventListener("click", onNavigate);

        li.appendChild(a);
        ul.appendChild(li);
    });

    return ul;
}

// mobile sidebar toggle
function initPageChrome() {
    const sidebarEl = document.getElementById("sidebar");
    const navToggle = document.getElementById("navToggle");
    const scrim = document.getElementById("scrim");

    function setSidebar(open) {
        sidebarEl?.classList.toggle("open", open);
        scrim?.classList.toggle("show", open);
        navToggle?.setAttribute("aria-expanded", String(open));
    }

    navToggle?.addEventListener("click", () => setSidebar(!sidebarEl.classList.contains("open")));
    scrim?.addEventListener("click", () => setSidebar(false));

    return { closeMobileSidebar: () => setSidebar(false) };
}