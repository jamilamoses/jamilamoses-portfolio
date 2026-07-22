/* ─────────────────────────────────────────────
   nav.js — Injects the shared top navigation.

   To add a new page to the nav, add an entry to
   the PAGES array below and create a matching
   .html file with data-page="<your-id>" on <body>.
───────────────────────────────────────────── */

const PAGES = [
  { id: 'page-1', href: 'page-1.html', label: 'Page 1' },
  { id: 'page-2', href: 'page-2.html', label: 'Page 2' },
  { id: 'page-3', href: 'page-3.html', label: 'Page 3' },
];

function buildNav(activeId) {
  const tabs = PAGES.map(p =>
    `<a href="${p.href}" class="top-nav-tab${activeId === p.id ? ' active' : ''}">${p.label}</a>`
  ).join('');

  return `
    <header class="top-nav">
      <div class="top-nav-inner">
        <a class="top-nav-logo" href="index.html">Lorem Ipsum</a>
        <nav class="top-nav-tabs" aria-label="Main navigation">
          ${tabs}
        </nav>
      </div>
    </header>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('nav-mount');
  if (!mount) return;
  const activeId = mount.dataset.active || '';
  mount.outerHTML = buildNav(activeId);
});
