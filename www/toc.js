const REPO = {
    owner: "nira-community",
    repo: "awesome-low-level",
    branch: "main",
    name: "Awesome Low-Level"
};

const MAX_SIDEBAR_TOC_LEVEL = 6;

function getRepoFromQuery() {
    return REPO;
}

function readmeRawBase(repo = REPO) {
    return `https://raw.githubusercontent.com/${repo.owner}/${repo.repo}/${repo.branch}/`;
}

function readmeBlobBase(repo = REPO) {
    return `https://github.com/${repo.owner}/${repo.repo}/blob/${repo.branch}/`;
}

async function fetchReadmeMarkdown(repo = REPO) {
    const res = await fetch(`${readmeRawBase(repo)}README.md?_=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`GitHub responded with ${res.status}`);
    return res.text();
}

function slugifyHeading(text, seen) {
    let slug = text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
    if (!slug) slug = "section";
    if (seen.has(slug)) {
        let i = 1;
        while (seen.has(`${slug}-${i}`)) i++;
        slug = `${slug}-${i}`;
    }
    seen.add(slug);
    return slug;
}

function buildTocTree(headingEls, maxLevel = MAX_SIDEBAR_TOC_LEVEL) {
    const filtered = headingEls.filter((h) => Number(h.tagName[1]) <= maxLevel);
    const items = filtered.length ? filtered.slice(1) : filtered;

    const root = [];
    const stack = [{ level: 0, children: root }];

    items.forEach((h) => {
        const level = Number(h.tagName[1]);
        const node = { id: h.id, text: h.textContent.replace(/^\d+\.\s*/, ""), children: [] };
        while (stack.length > 1 && level <= stack[stack.length - 1].level) stack.pop();
        stack[stack.length - 1].children.push(node);
        stack.push({ level, children: node.children });
    });

    return root.map((node) => ({
        id: node.id,
        text: node.text.replace(/\s*[?!]+\s*$/, ""),
        children: [],
    }));
}

function renderTocTree(nodes, { linkPrefix = "", onNavigate = null } = {}) {
    const ul = document.createElement("ul");

    nodes.forEach((node) => {
        const li = document.createElement("li");
        li.className = "toc-node";

        const a = document.createElement("a");
        a.href = `${linkPrefix}#${node.id}`;
        a.textContent = node.text;
        a.dataset.target = node.id;
        if (onNavigate) a.addEventListener("click", onNavigate);
        li.appendChild(a);

        if (node.children.length) {
            const childUl = renderTocTree(node.children, { linkPrefix, onNavigate });
            childUl.className = "toc-children";
            li.appendChild(childUl);
        }

        ul.appendChild(li);
    });

    return ul;
}

// mobile sidebar toggle
function initPageChrome() {
    const sidebarEl = document.getElementById("sidebar");
    const navToggle = document.getElementById("navToggle");
    const scrim = document.getElementById("scrim");

    function closeMobileSidebar() {
        if (sidebarEl) sidebarEl.classList.remove("open");
        if (scrim) scrim.classList.remove("show");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    }

    if (navToggle && sidebarEl) {
        navToggle.addEventListener("click", () => {
            const open = sidebarEl.classList.toggle("open");
            if (scrim) scrim.classList.toggle("show", open);
            navToggle.setAttribute("aria-expanded", String(open));
        });
    }
    return { closeMobileSidebar };
}