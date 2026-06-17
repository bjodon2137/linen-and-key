# Image Manifest — Linen & Key

The site currently ships with **custom, brand-matched SVG illustrations** (navy / brass / linen / sage). They are lightweight, razor-sharp at any size, and fully on-brand. If you'd rather use **photographs**, I researched and matched real **Adobe Stock** photos for each slot during the build. To swap one in: license the photo on Adobe Stock, export a web-optimized JPG (~1600px wide, <300 KB), drop it in this `/images` folder, and point the matching `<img src="…">` at it (or just rename it to the SVG filename and update the extension).

| Slot | Live file (SVG) | Used on | Suggested Adobe Stock photo (ID) | Alternates |
|---|---|---|---|---|
| Hero — made bed, bright STR bedroom | `hero-bedroom.svg` | Home hero | **531381490** "Bright bedroom interior with bed" | 432987354 (Muji-style white bright room) |
| Service — Airbnb turnover (hands + white sheet) | `service-turnover.svg` | Home + Services | **110287079** "Hand set up white bed sheet in hotel room" | 696280680, 273654776 |
| Service — residential kitchen | `service-residential.svg` | Home + Services | **477327388** "Minimalistic light modern kitchen" | 615984954, 467912621 (quartz) |
| About / trust — cleaner with caddy | `about-trust.svg` | Home + About | **484731002** "Person holding bucket with cleaning supplies" | 347932737, 392926234 |
| Process flat-lay — supplies | `process-flatlay.svg` | (available for How-It-Works) | **348156137** "Cleaning spray bottles & cloth flat lay" | 210633721, 341784160 |
| Background texture | `texture-tile.svg` | CTA + page-header bands | — (CSS tiling, keep as SVG) | — |
| Logo (2 versions) + favicon | `logo-navy.svg`, `logo-white.svg`, `favicon.svg` | Header / footer / tab | — (vector wordmark, keep as SVG) | — |

**Note on the `_png/` folder:** a few PNG previews got locked by the desktop file-sync during the build and couldn't be auto-deleted. They're harmless (nothing on the site references them) — you can delete the `_png` folder manually any time.
