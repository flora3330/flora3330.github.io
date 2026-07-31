# Portfolio Site — Setup Guide

## 1. Rename the repo
Create a GitHub repo named exactly `yourusername.github.io` (replace with your
actual GitHub username — this exact name is what makes GitHub host it at
`https://yourusername.github.io`).

## 2. Customize the content
Open `index.html` and replace:
- **Name** — "Alex Rivera" (appears in the header, footer, and `<title>`)
- **Email** — `alex.rivera@email.com` (two places: hero and footer)
- **GitHub / LinkedIn links** — in the footer, replace `yourusername`
- **Projects** — swap in your own 2–4 projects. Keep the same structure
  (title, description, metrics, tags, links) or delete the `.metrics` list
  for projects without clean numbers to report
- **About text** — rewrite with your real background
- **Skill bars** — edit the `width:` percentage in each `.skill-row` to
  reflect your own confidence levels

## 3. Add your résumé
Drop a file named `resume.pdf` in the same folder as `index.html`. The
"Résumé ↓" buttons already link to it.

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

## 5. Turn on Pages
In the repo: **Settings → Pages → Source → Deploy from a branch → main → /root**.
Your site goes live at `https://yourusername.github.io` within a minute or two.

## Files
- `index.html` — page structure and content
- `style.css` — all styling (colors/fonts are set as CSS variables at the top)
- `script.js` — small scroll-triggered animation for the skill bars
