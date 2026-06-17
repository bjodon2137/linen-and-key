# Build Log — Linen & Key Website

**Built:** June 14, 2026 · Autonomous orchestrated build (Phase 0 → 3)

## Outcome
A complete, deploy-ready 5-page static website for **Linen & Key**, an Airbnb-turnover + residential cleaning company in Summit County, Ohio. Grounded in real market research (pricing, competitors, STR market, local SEO).

## Phases completed
- **Phase 0 — Name & domain:** 10 candidates generated and screened; **Linen & Key** selected and confirmed by owner. Tagline "Guest-ready turnovers. Home-ready clean." Domain target: linenkey.com.
- **Phase 1 — Research:** 4 parallel research agents (pricing, brand/competitors, Airbnb market, local SEO) + visual asset production.
- **Phase 2 — Synthesis:** consolidated into `SYNTHESIS-BRIEF.md` (the source of truth).
- **Phase 3 — Build + verify:** 5 pages, shared CSS/JS, 7 image assets, schema, responsive, form validation.

## Files
- `index.html`, `services.html`, `pricing.html`, `about.html`, `contact.html`
- `css/styles.css` · `js/main.js`
- `images/` — 9 SVGs (hero, 2 service, about-trust, process flat-lay, texture, logo ×2, favicon)
- `SYNTHESIS-BRIEF.md`, `images/IMAGE-MANIFEST.md`, this log

## Autonomous decisions (and why)
1. **Contact details are placeholders** — phone `(330) 555-0142`, email `hello@linenkey.com`, ZIP `44301`. *You chose "use placeholders."* Replace these everywhere before launch (they appear in each page footer, the contact page, and the JSON-LD schema).
2. **Quote form uses a Formspree placeholder** (`action="https://formspree.io/f/your-form-id"`). Until you paste a real Formspree form ID, the form validates and shows an on-page success message instead of sending. Once you add your real endpoint, submissions go straight to your inbox — no code change needed.
3. **Imagery is custom SVG, not photos.** This environment could not generate photoreal images or download licensed stock into the project folder (sandbox network + no text-to-image). Rather than ship broken placeholders, I built cohesive, brand-matched SVG illustrations (sharp at any size, tiny file size). I also researched and matched real **Adobe Stock photo IDs** for every slot — see `images/IMAGE-MANIFEST.md` — so you can swap in photos in minutes.
4. **Pricing = researched market numbers**, not guesses. Flat-rate (not hourly) to read premium and protect margin, positioned above budget/solo cleaners but below resort pricing. Full tables in `pricing.html` and the brief.
5. **Tagline choice** "Guest-ready turnovers. Home-ready clean." — the only option serving both audiences (hosts + homeowners).
6. **Color/type** deliberately avoid the local field's teal/aqua "maid" clichés: navy + antique brass on warm linen, with sage accents; Cormorant Garamond (display) + Inter (body).

## Technical checklist (verified)
- [x] 5 pages built + internally linked, consistent sticky header/footer
- [x] Business name "Linen & Key" used throughout
- [x] 7 images placed; logo in header + footer; favicon set
- [x] Pricing tables complete with researched numbers + "starting rates" disclaimer
- [x] Contact form: required-field + email/phone validation, success state, Formspree-ready
- [x] Unique `<title>` + meta description on all 5 pages (from SEO research)
- [x] `HouseKeeping`/LocalBusiness JSON-LD schema in `<head>` of every page (valid JSON)
- [x] Canonical tag + one keyword-informed H1 per page; descriptive alt text on all images
- [x] Responsive: 375 / 768 / 1280 px (mobile-first; hamburger nav < 760px)
- [x] Google Fonts via CDN; smooth scroll; active nav state per page
- [x] No broken links or missing assets (automated check passed)
- [x] Primary (filled brass) + secondary (outlined navy) CTA styles

## Before you launch
1. Replace placeholder phone/email/ZIP across all pages + schema.
2. Add your real Formspree form ID (or wire a mailto/other handler) in `contact.html`.
3. (Optional) Swap SVG illustrations for photos per `images/IMAGE-MANIFEST.md`.
4. Confirm `linenkey.com` is actually available at a registrar and register it.
5. Deploy the folder to Netlify, GitHub Pages, or Cloudflare Pages (pure static — just drop the folder).
6. Create the Google Business Profile: primary category **House Cleaning Service**; add the 6 service-area cities.

## Known cosmetic note
A `images/_png/` folder of preview renders got locked by the desktop file-sync mid-build and couldn't be auto-removed. It's unused by the site; delete it manually whenever convenient.
