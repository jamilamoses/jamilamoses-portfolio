/* ─────────────────────────────────────────────
   nav.js — Injects the shared top navigation.

   To add a new page to the nav, add an entry to
   the PAGES array below and create a matching
   .html file with data-page="<your-id>" on <body>.
───────────────────────────────────────────── */

const PAGES = [
  { id: 'about',              href: 'about.html',              label: 'About Me' },
  { id: 'career-timeline',    href: 'career-timeline.html',    label: 'Career Timeline' },
  { id: 'salesforce-journey', href: 'salesforce-journey.html', label: 'Salesforce Journey' },
  { id: 'the-case',           href: 'the-case.html',           label: 'The Case' },
  { id: 'recognition',        href: 'recognition.html',        label: 'Recognition' },
  { id: 'whats-next',         href: 'whats-next.html',         label: "What's Next" },
];

/* The countdown counts UP from the day you started.
   Change START_DATE and COUNT_LABEL to taste. */
const START_DATE  = new Date('2020-07-27T00:00:00');
const COUNT_LABEL = 'Solutioning for';

function buildNav(activeId) {
  const tabs = PAGES.map(p =>
    `<a href="${p.href}" class="top-nav-tab${activeId === p.id ? ' active' : ''}">${p.label}</a>`
  ).join('');

  return `
    <header class="top-nav">
      <div class="top-nav-inner">
        <a class="top-nav-logo" href="index.html">
          <span class="top-nav-mark" aria-hidden="true">
            <!-- Agent robot icon. Save your image into the repo as
                 agentforce.png (next to index.html). Until it exists,
                 the Salesforce cloud below shows as a fallback. -->
            <img src="agentforce.png" alt="" class="top-nav-icon"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <svg viewBox="0 0 24 24" width="22" height="22" style="display:none">
              <path fill="#1b96ff" d="M7.4 18.5A4.4 4.4 0 0 1 6.9 9.8a5.6 5.6 0 0 1 10.6-1.3 4.1 4.1 0 0 1-.6 8.05 3.5 3.5 0 0 1-.4.02H7.4z"/>
            </svg>
          </span>
          SE
        </a>

        <div class="nav-countdown" title="${COUNT_LABEL}">
          <span class="nav-countdown-label">${COUNT_LABEL}</span>
          <span class="nav-countdown-time" id="solve-timer">—</span>
        </div>

        <nav class="top-nav-tabs" aria-label="Main navigation">
          ${tabs}
        </nav>

        <a href="resume.html" class="nav-resume">Résumé</a>
      </div>
    </header>
  `;
}

/* Live count-up: years, months, days, then h/m/s. */
function formatElapsed(from, now) {
  let years  = now.getFullYear()  - from.getFullYear();
  let months = now.getMonth()     - from.getMonth();
  let days   = now.getDate()      - from.getDate();
  let hours  = now.getHours()     - from.getHours();
  let mins   = now.getMinutes()   - from.getMinutes();
  let secs   = now.getSeconds()   - from.getSeconds();

  if (secs  < 0) { secs  += 60; mins--; }
  if (mins  < 0) { mins  += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days  < 0) {
    // borrow days from the previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonth; months--;
  }
  if (months < 0) { months += 12; years--; }

  return `${years}y ${months}m ${days}d ${hours}h ${mins}m ${secs}s`;
}

function startCountdown() {
  const el = document.getElementById('solve-timer');
  if (!el) return;
  const tick = () => { el.textContent = formatElapsed(START_DATE, new Date()); };
  tick();
  setInterval(tick, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('nav-mount');
  if (!mount) return;
  const activeId = mount.dataset.active || '';
  mount.outerHTML = buildNav(activeId);
  startCountdown();
});
