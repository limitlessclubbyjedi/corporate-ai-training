# Limitless Corporate AI Training

Current source for [corporate-ai-training-seven.vercel.app](https://corporate-ai-training-seven.vercel.app/). Note approved the CI v1.3 preview for production on 22 November 2026.

The Thai and English landing pages retain the original layout, photographs, prices and curriculum. The approved release changes colors and typography (Archivo / Noto Sans Thai) and adds a short sentence that Claude is the main teaching tool. Shared visual overrides are in `brand-ci.css`; licensed fonts are bundled in `assets/fonts/brand/`.

## Pages

- `index.html`: Thai landing page
- `en/index.html`: English landing page
- `en/cases/falcon.html`: Falcon case page
- `executive-brief.html` and `en/executive-brief.html`: executive briefs
- `assets/` and `en/assets/`: images, fonts, videos, and documents

## Local preview

This is a static HTML/CSS/JavaScript website with no package installation or build step required. From the repository folder, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/ for Thai or http://localhost:8000/en/ for English.

## Source history and deployment

Before the CI update, all 394 source files were reconciled against production deployment `dpl_7YGX5hxQxy7a4C12A7uFqMAHnAx1` (21 November 2026). The original layout CSS, scripts and image assets were preserved. `PREVIEW.md` records the approved review and checks.

Production uses the Vercel project `limitless-corporate-training` in scope `limitless-team`. Deployment is explicit, not assumed to happen on Git push. Future public releases require owner authorization.

### Initial recovery

The 388 original source files were checked against the file hashes in Vercel deployment `dpl_7AQ5pXioTpXEumy3wJTB67sBPATc`. Seven principal files were also compared directly with the public website. See `RECOVERY-MANIFEST.json`, `LIVE-VERIFICATION.json`, and `RECOVERY-README.txt` for evidence.

This repository was created as a source backup and development starting point. Creating it did not configure automatic deployment or modify the live website. The main branch now contains the approved CI release; future website changes still need an explicit source sync. Vercel credentials and local environment files are excluded from Git.
