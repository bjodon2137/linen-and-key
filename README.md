# Linen & Key — Website

Static marketing site for **Linen & Key**, an Airbnb-turnover and residential cleaning company serving Akron & Summit County, Ohio.

*Guest-ready turnovers. Home-ready clean.*

## Pages
`index.html` · `services.html` · `pricing.html` · `about.html` · `contact.html`

## Stack
Plain HTML / CSS / JavaScript — no build step. Just static files.
- `css/styles.css` — design system
- `js/main.js` — nav, smooth scroll, form validation
- `images/` — SVG logo, illustrations, favicon

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python -m http.server 8000   # then visit http://localhost:8000
```

## Deploy
Pure static — host on GitHub Pages, Netlify, or Cloudflare Pages by pointing them at this folder.

## Before launch
- Replace placeholder phone/email/ZIP across all pages + JSON-LD schema.
- Add a real Formspree form ID in `contact.html`.
- See `BUILD-LOG.md` and `images/IMAGE-MANIFEST.md` for details.
