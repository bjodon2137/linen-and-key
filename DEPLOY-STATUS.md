# Linen & Key — Deploy Status

_Checked: Monday, June 15, 2026_

Good news first: **the professional revamp is live**, and every page is serving the new version with real content. There's one thing still finishing on its own (the HTTPS certificate), and one quick manual step for you (Cloudflare email routing). Details below.

## ✅ The revamp is live

I checked the homepage and confirmed all the revamp markers are present: the **stats band**, the **"Our commitment"** guarantee section, the **"Frequently asked"** FAQ, and the **og-image.png** social preview. No re-push needed — your earlier push went through.

## ✅ All pages load with real content

Every page returns the correct, revamped content with proper page titles:

| Page | Status | Title |
|------|--------|-------|
| linenkey.com (home) | ✅ Live | Airbnb & House Cleaning Akron, OH \| Linen & Key |
| /services.html | ✅ Live | Airbnb Turnover & Residential Cleaning \| Linen & Key |
| /pricing.html | ✅ Live | Cleaning Prices & Quotes Akron OH \| Linen & Key |
| /about.html | ✅ Live | About Linen & Key \| Summit County Cleaners |
| /contact.html | ✅ Live | Get a Free Cleaning Quote Akron OH \| Linen & Key |
| www.linenkey.com | ✅ Live | (redirects to the main site) |

## ⏳ HTTPS certificate is still provisioning

Right now the site loads fine over **http://**, but **https://** shows a certificate / "privacy" warning on both `linenkey.com` and `www.linenkey.com`. This is completely normal for the first few hours after a custom domain goes live — GitHub is still issuing the TLS certificate. GitHub confirms this on the Pages settings screen: it shows **"DNS Check in Progress"** and the **Enforce HTTPS** box is greyed out with the note _"a certificate has not yet been issued for your domain."_

**No action needed — it resolves itself**, usually within a few hours (occasionally up to 24h). Once it's done, https:// will work automatically and the Enforce HTTPS option below becomes available.

## ⏳ Enforce HTTPS — waiting on the certificate

I opened your GitHub Pages settings. The **Enforce HTTPS** checkbox is currently **unavailable (greyed out)** because the certificate hasn't been issued yet, so I left it as-is. Once the cert finishes (see above), tick that box — see step 1 below.

## ⚠️ Cloudflare Email Routing — needs ~2 minutes from you

I tried to finish email routing, but the Cloudflare dashboard would not load — it sat on the spinning-logo loading screen through several attempts and a reload. I couldn't confirm or change the routing state, so this one's left for you. It's a quick fix (the destination `linenkey67@gmail.com` is already verified):

1. Go to **Cloudflare → linenkey.com → Email → Email Routing**
2. If it isn't on yet, **Enable Email Routing** (accept the MX/TXT records it offers to add)
3. **Create a rule:** `hello@linenkey.com` → _Send to an email_ → `linenkey67@gmail.com`

If a `hello@` rule already exists and is enabled, you're done.

---

## Your remaining to-do list

1. **Tick "Enforce HTTPS"** once the certificate finishes provisioning (a few hours). GitHub Pages → Settings → Pages. It's greyed out now only because the cert isn't issued yet.
2. **Finish Cloudflare Email Routing** (~2 min) — enable routing + add the `hello@linenkey.com → linenkey67@gmail.com` rule, as above. The dashboard wouldn't load for me, so this needs your hands.
3. **Add a real phone number** to the site whenever you're ready.
4. **Swap in real photos** later using `images/IMAGE-MANIFEST.md` as your guide.

Everything else is done and live. Nice launch! 🎉
