# Marketing Analyst Portfolio — Free Static Starter

Plain HTML/CSS, no build step. Ready for GitHub Pages or Vercel (both free).

## Files
- `index.html` — home: hero, 3 projects, skills, about, contact
- `projects/` — 3 case-study pages
- `assets/resume/` — PUT YOUR RESUME PDF HERE (e.g. `James-Daily-Resume.pdf`)
- `assets/images/` — chart PNGs / screenshots
- `resume.html` — web resume (links to PDF in `assets/resume/`)
- `styles.css`, `script.js`

## Preview locally
```bash
# option 1: just open index.html in browser
# option 2: serve (so embeds/paths behave like prod)
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy free — Option A: GitHub Pages (recommended, you said OK with code)
1. Create free GitHub account
2. New repo: `your-username.github.io` (public)
3. Upload all files in this folder to repo root (drag-drop via web works)
4. Repo → Settings → Pages → Source: `main` / `/ (root)` → Save
5. Live in ~1 min at `https://your-username.github.io`
6. Put that URL in CV header + LinkedIn Featured

`.nojekyll` is included so Pages serves files as-is.

## Deploy free — Option B: Vercel
1. Push folder to GitHub (any repo name)
2. vercel.com → Add New Project → Import repo → Framework: Other → Deploy
3. Free `*.vercel.app` URL, auto-deploys on git push

## Customise (TODOs in code)
- [ ] `index.html`: name, email, LinkedIn/GitHub/Tableau URLs, About paragraph
- [ ] `assets/resume/`: drop your exported PDF there, then check link in `resume.html`
- [ ] Project 1: run query on Kaggle dataset, replace KPIs/table, add 2 PNGs in `assets/images/`
- [ ] Project 2: use GA4 demo account (Google Merchandise Store), add screenshots + Looker Studio iframe
- [ ] Project 3: publish Tableau Public dashboard, paste embed code

## Free data sources to finish projects
- GA4 demo: search "Google Analytics demo account" → Merchandise Store
- Kaggle: "marketing campaign", "ecommerce", "A/B test" datasets
- Looker Studio (free) + Tableau Public (free) for dashboards

## Why this beats thisiscatalogue.co.uk for you
thisiscatalogue.co.uk is a Leeds design studio site — not a platform you can join.
This starter is yours, free forever, no branding, and built to show analyst thinking:
Problem → Data → Analysis → Recommendation.
