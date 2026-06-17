# Linen & Key — Professional Revamp (overnight)

Everything below is **staged in this folder and ready to go live with one re-push** (GitHub Desktop → Commit → Push). The current live site is the earlier version until you push.

## What changed

**Design system (upgrades every page at once — `css/styles.css`)**
- Refined type scale, spacing, and a layered shadow system for a more premium feel.
- Polished sticky header, buttons with depth, and hover states throughout.
- New components: stats band, guarantee cards, FAQ accordion, testimonial styling, avatars.
- Subtle **scroll-reveal animations** (respects "reduce motion" settings).
- Accessibility: skip-to-content link, visible focus outlines, proper `<main>` landmarks.

**Homepage (`index.html`) — rebuilt and expanded**
- Stronger hero: headline, trust badges, and a floating "guest-ready in ~90 min" tag.
- Trust bar → **stats band** (100-pt checklist · ~90-min turnover · 6 cities · 3+ linen sets).
- New **"Booked with confidence" guarantee** section (satisfaction, photo-verified, on-time).
- New **FAQ** section (6 Q&As) with **FAQ structured data** for Google.
- Pricing preview, services, how-it-works, and why-us refined.

**SEO & infrastructure (new)**
- `sitemap.xml`, `robots.txt`, branded `404.html`.
- Open Graph + Twitter share tags on every page, with a real **share image** (`images/og-image.png`) — link previews now look professional in iMessage, Facebook, etc.
- `theme-color` for mobile browser chrome.

## One honest call I made: testimonials
The earlier homepage had **made-up customer reviews with fake names**. Putting fabricated reviews on a live business site is misleading (and dated-today 5-star reviews on a brand-new company read as fake). I **removed them** and replaced that area with an honest "our promise / locally owned" section.
- **Action:** add real testimonials as you earn them. Easiest spot is that "Our promise" section, or ask and I'll build a proper reviews block once you have a few.

## Things to confirm / finish (not blockers)
1. **Re-push** to deploy the revamp (one push in GitHub Desktop).
2. **Phone number** — still omitted on purpose; send it and I'll add it back in one pass.
3. **Guarantee wording** — the "satisfaction / re-clean" promise is standard; just make sure you're comfortable honoring it. I did **not** add any "insured/bonded/background-checked" claims, since those are legal claims only you can stand behind — tell me if they're true and I'll add them (they boost conversion).
4. **Real photos (optional)** — imagery is currently premium vector/illustration. To switch to photography, see `images/IMAGE-MANIFEST.md` (Adobe Stock IDs matched per slot) — ~10-min swap.

## Still vector, not photos — why
This environment can't generate or download real photographs into the project, so I kept a cohesive high-end illustrated look rather than ship broken image slots. The manifest makes swapping to photos quick whenever you want.
