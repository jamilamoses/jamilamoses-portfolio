# Dry-Run Test Script

Run this tonight before the workshop. Total time: ~15 minutes. You're playing the role of a coworker who's never seen this repo. If any step is confusing or breaks, that's a fix to make before tomorrow.

## Setup (2 min)

1. In Terminal: `cp -r ~/claude/projects/portfolio-workshop-starter ~/portfolio-dry-run` — this way you don't dirty the real starter.
2. `cd ~/portfolio-dry-run && ls` — confirm all 8 files are there.
3. Double-click `index.html` in Finder. **Expected:** Home page opens in your browser with "Lorem Ipsum" as the hero, a placeholder tagline, and three link cards (Page 1 / Page 2 / Page 3). Top nav shows on every page. All three link cards navigate.
4. Click through Page 1 → Page 2 → Page 3. **Expected:** Each page loads, back-to-home works, active nav tab changes.

**If any of this fails**, fix before dry-run continues. Most likely causes: `nav.js` script tag missing at bottom of an HTML file, or a typo in the `data-active` attribute.

## Open in Claude Code (1 min)

5. In VS Code: File → Open Folder → pick `~/portfolio-dry-run`.
6. Start a Claude Code session in that folder (however you launch it — extension, CLI, whatever you'll show them).
7. Confirm Claude Code sees the files: type `list the files in this folder` and check the response.

## Exercise 1 — Reskin (5 min)

You're going to pretend you brought three reference screenshots. Substitute real screenshots if you have them handy; otherwise the words below are enough for Claude Code to work.

Paste this prompt into Claude Code:

```
I want to reskin my portfolio starter to feel like:
1. An editorial magazine site — big serif headlines, cream and black,
   lots of whitespace
2. A design agency site — warm neutrals, one bold accent, tight spacing
3. A personal blog — reads like a novel, muted palette, generous line height

Update ONLY the CSS variables at the top of styles.css (the :root block)
so the site takes on this feel — colors, typography pairing, spacing scale.
Don't touch the HTML, don't touch nav.js. When you're done, tell me in
one paragraph what design choices you made.
```

Refresh `index.html` in your browser. **Expected:** every page has a new feel. Headline font may have changed, colors are different, spacing may have adjusted. All three pages should be updated consistently because they share the one CSS file.

**What to watch for:**
- Did Claude Code touch anything outside `:root`? If yes, the prompt needs to be more restrictive. Tighten it.
- Did any page break (unstyled, elements overflowing)? Note which and think about whether the starter CSS was under-defined.
- Did it swap Google Fonts by adding a new `<link>` in the HTML head? Check whether the change persists across all four pages — if only one page has the font import, that's a teaching moment worth flagging in the workshop.

## Exercise 2 — Content (4 min)

Paste a filled-in content brief. Use this scratch version:

```
Please update my portfolio with this content brief:

NAME: Alex Rivera
TAGLINE: I help SMBs turn manual sales ops into automated pipelines.

WHY ME:
Headline: I unblock revenue teams by rebuilding the boring plumbing.
Background: Solutions engineer at a martech company, five years in the
weeds of Salesforce, HubSpot, and half a dozen homegrown CRMs. Started as
a support rep and worked my way into pre-sales because I got tired of
watching AEs re-explain the same problems every week.
What I care about: Making sure the person on the other end of the demo
walks away knowing exactly what changes on Monday morning.

MY POV:
Headline: Most SaaS demos die because they demo the software, not the workday.
The take: When AEs walk through features, buyers zone out. When they walk
through a Tuesday morning workflow that's currently broken, buyers lean in.
The best demos I've seen start from the customer's calendar, not our
product's navigation.
What follows: Every discovery call should end with "walk me through
Tuesday" and every demo should open with the answer.

MY WORK:
Framing: A few builds and rebuilds I ship-pushed personally.
Project 1: Rebuilt onboarding flow for a 200-rep sales org — cut ramp time
from 90 days to 45.
Project 2: Prototyped an internal AI assistant for reps that answers
"which product config for this customer?" — now used by 40 AEs weekly.
Project 3: Ran a demo overhaul workshop for 12 SEs that shifted our team's
approach across 200 customer meetings.

CONTACT:
Email: alex@example.com
LinkedIn: linkedin.com/in/alexrivera
GitHub: github.com/alexrivera

Update the HTML pages with this content. Replace every TODO comment.
Keep the same page structure — just swap the placeholder text.
```

Refresh each page. **Expected:** Alex's name is on the hero, all four pages have real content, the "Lorem Ipsum" in the nav bar is now "Alex Rivera," no Lorem Ipsum remaining.

**What to watch for:**
- Is any Lorem Ipsum left over? Some may hide in the nav.js file, in `<title>` tags, or the page footer copyright line. Note them.
- Does the content overflow anywhere on desktop or mobile (resize the browser window narrow to check)?
- Did Claude Code update the `<title>` tags in each HTML file? Those show in browser tabs — worth mentioning in workshop if it missed them.
- Did the page filenames (page-1.html, etc.) stay the same or did Claude Code rename them? URLs shouldn't change unless the coworker asks — flag if they did.

## Exercise 3 — Add a page OR dark mode (3 min)

Pick one path and try it. **Both** would be worth trying before the workshop so you know which is smoother.

**Path A — Add a page:**

```
Add a new page called "Reading List" — a page where I share books,
articles, and podcasts I recommend. Match the visual style of the
existing pages. Update nav.js so the new page shows up in the nav.
Add 3 example entries as placeholders.
```

**Expected:** New file `reading-list.html`. New entry in `nav.js` PAGES array. Nav bar shows 4 tabs on every page.

**Path B — Dark mode:**

```
Add a dark mode toggle to the top nav. When toggled, swap the CSS
variables in :root to dark values (dark background, light text). Remember
the user's choice in localStorage so it persists on refresh. Use a single
sun/moon SVG icon as the toggle button.
```

**Expected:** Small icon in nav. Clicking it flips the whole site dark. Refresh — it remembers.

**What to watch for:**
- Path A: does the nav highlight the active tab on the new page? If not, the coworker will get confused.
- Path B: does the toggle work on every page, or only the one you started on? nav.js needs to inject the toggle into every page, not just index.

## After the dry-run

Note anything that broke, was confusing, or took longer than expected. Common gotchas worth documenting:
- Claude Code sometimes rewrites more than asked — if so, tighten prompts in the workshop guide
- If any page ends up unstyled after Exercise 1, the starter CSS needs a defensive base
- If Exercise 3 breaks the nav on other pages, nav.js needs a small fix

**Clean up:** `rm -rf ~/portfolio-dry-run` when you're done. The real starter is untouched at `~/claude/projects/portfolio-workshop-starter/`.

## Stretch: pre-build the two demo reskins

If dry-run went smoothly, spend 15 more minutes building the two demo reskins you'll show on slide 4 ("one skeleton, three skins"):

1. `cp -r portfolio-workshop-starter reskin-editorial`
2. In that folder, prompt Claude Code: *"Reskin this to feel like an editorial magazine — Playfair Display headlines, cream background, black body text, tight column, no accent color except pure black."*
3. Repeat: `cp -r portfolio-workshop-starter reskin-terminal`, prompt: *"Reskin this to feel like a hacker terminal — IBM Plex Mono everywhere, near-black background, green accent, no shadows."*
4. Take screenshots of the home page from each. Drop them into slide 4 next to your kel-panel homepage screenshot.

Now the "same skeleton, three skins" slide is real, not conceptual.
