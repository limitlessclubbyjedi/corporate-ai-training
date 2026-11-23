# Corporate Training — approved five-point preview, 24 November 2026

Preview: https://limitless-corporate-training-9vkmwn16s-limitless-team.vercel.app/
English: https://limitless-corporate-training-9vkmwn16s-limitless-team.vercel.app/en/
Production URL: https://corporate-ai-training-seven.vercel.app/

Based on production/GitHub main 4ac39ba416169cb9db9c73ef00c1433bda991639, preserving the newer AI Transformation menu and JAS links. Note initially authorized preview only and subsequently explicitly approved pushing to GitHub main and deploying to Vercel production on 24 November 2026.

Changes:
- Direct LINE OA link https://line.me/R/ti/p/@JEDITRINUPAB on Thai/English landing pages and executive briefs; main CTA guidance asks visitors to send CORP. No automatic message submission.
- Both six-page downloadable PDFs now use the same LINE link. English PDF website link points to the current /en/ landing page. All 12 rendered pages and extracted text were compared identical before/after; only link destinations changed.
- Thai canonical/og:url/og:image/twitter:image use the actual production domain. English metadata was already correct and is preserved.
- Nine existing logos retained; nine names already present in the gallery/experience copy added to the same client section. Training and speaking events are labelled as experience, without new claims or albums.
- Limitless Letters signup and six related footer links added in both languages.

Verification:
- Chrome using the previously authorized isolated external Google Chrome fallback: Thai/English at 1440, 390 and 320px; no page overflow or page errors. Client logos decode successfully. LINE CTA opens Add LINE friend; newsletter CTA opens Subscribe to Limitless Letters. No LINE message or newsletter signup submitted.
- Calculator and brief scenario transfer verified (15 people → 1,800 hours/year); brief fee tiers 15/30/>30 verified.
- Coach/proof, gallery, fee sections and inline calculator scripts unchanged. Existing PDF page appearance/text unchanged.
- All changed public files and PDFs return HTTP 200, match source and include X-Robots-Tag: noindex, nofollow. Production TH/EN hashes unchanged.
- Mobile checks use Chrome viewport simulation, not physical phones.

Release authorized on 24 November 2026. Restore vercel.json to the prior production configuration ({}), preserving production indexing behavior rather than shipping the preview-only noindex header. The existing immutable preview keeps its noindex protection. Release scope is Corporate Training Thai/English pages and the two PDFs only; no other websites changed. Production verification is recorded in the project delivery log after deployment.
