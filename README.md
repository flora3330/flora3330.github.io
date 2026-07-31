# Portfolio Site — Setup Guide


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



## Files
- `index.html` — page structure and content
- `style.css` — all styling (colors/fonts are set as CSS variables at the top)
- `script.js` — small scroll-triggered animation for the skill bars
