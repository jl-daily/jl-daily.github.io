# How I Built My Marketing Analyst Portfolio (for free)

Live site: **https://jl-daily.github.io/**
Repo: `jl-daily.github.io` — plain HTML/CSS, no build step, hosted free on GitHub Pages.

I'm James Daily, Durham, NC — NC State MM in Marketing Analytics + BA in Communication.
I needed a portfolio for entry-level analyst applications, so I built this instead of paying for a site builder.

## 1. Why not thisiscatalogue.co.uk?

My girlfriend mentioned `thisiscatalogue.co.uk`. Turns out that's just a Leeds design studio site —
no sign-up, no hosting. So I built my own: free forever, no branding, built to show analyst thinking
(Problem → Data → Analysis → Recommendation).

## 2. Stack (all free)

- **Pages:** `index.html` (home) + `projects.html`, `skills.html`, `about.html`, `resume.html`
- **Case studies:** `projects/dragn-cycles.html`, `projects/mr-unclog-drains.html`, `projects/amt-group.html`
- **Assets:** `assets/logos/`, `assets/resume/James-Daily-Resume.pdf`, `assets/projects/<client>/` (photos + `data/`)
- **Hosting:** GitHub Pages from `main` / root, `.nojekyll` so files serve as-is
- **Preview locally:** `python3 -m http.server 8000` → `http://localhost:8000` (local only — the public URL is the `github.io` one)

## 3. What each project proves

- **Drag'n Cycles** (Frankfort, KY): social + SEO. Real GSC export (Jun 19–Sep 18, 92 days):
  770 clicks, 7,567 impressions, 10.2% CTR, 85% mobile. Branded owns #1; “near me” queries at pos ~7 are the lever.
  Files: `assets/projects/dragn-cycles/data/gsc-*.csv` (aggregates only — full 958-row queries stay private).
- **Mr. Unclog Drains** (White Plains, NY): website SEO + email. Work samples live; GSC/GA4 exports next once I have the login.
- **AMT Group** (Creedmoor, NC): B2B for two subgroups — **CS Medical** (education-led: sessions, awareness, spotlights)
  and **Mystaire** (offer-led: May Special + “My News” series). Photos + measurement plan on the page.

## 4. Lessons that cost me time (so you don’t pay them)

- **GitHub web upload picks files, not folders.** Navigate INTO the target folder first, then Upload —
  otherwise everything lands at root and images/links 404. Move via pencil → rename path (e.g. `assets/projects/amt-group/mystaire/x.jpeg`).
- **Folders don’t exist until a file does.** Create with `projects/.gitkeep`, then upload inside.
- **Filenames matter:** lowercase, dashes, exact case (`James-Daily-Resume.pdf`, `dragn-cycles-logo.webp`). One double `.pdf.pdf` broke my resume link.
- **`.webp` is a real image**, not a webpage — browsers display it fine.
- **Black-background logos** need a dark badge behind them (see `.card-logo` / `.blog-logo` in `styles.css`).
- **`mailto:` needs a default mail app.** Mine did nothing, so `Get in touch` now opens Gmail compose in a new tab.
- **Don’t publish raw client data.** Aggregates + charts on the site; full exports stay on my Mac until the owner approves. No PII, no revenue.

## 5. Going forward

- [ ] GA4 acquisition exports for Drag'n + Mr. Unclog → `assets/projects/*/data/ga4-*.csv`
- [ ] Replace `LinkedIn: Add your URL here` placeholders (Home + Resume)
- [ ] Add cover thumbnails to Projects index if it ever feels text-heavy
- [ ] Track ideas in my local to-do app (localhost:3001): projects “Portfolio Site”, “Drag'n Cycles”, “Mr. Unclog”

## 6. Repo map (source of truth = this folder)

- Root: `index.html`, `projects.html`, `skills.html`, `about.html`, `resume.html`, `styles.css`, `script.js`, `.nojekyll`
- `projects/`: `dragn-cycles.html`, `mr-unclog-drains.html`, `amt-group.html`
- `assets/logos/`: `dragn-cycles-logo.webp`, `mr-unclog-logo.png`
- `assets/resume/`: `James-Daily-Resume.pdf`
- `assets/projects/dragn-cycles/`: photos + `data/` (GSC aggregates + README)
- `assets/projects/mr-unclog-drains/`: photos + `data/README.txt`
- `assets/projects/amt-group/cs-medical/`, `mystaire/`, `data/`
