# Corporate Training — CI v1.3 preview

Preview: https://limitless-corporate-training-fkyco3c6l-limitless-team.vercel.app/
Production (unchanged): https://corporate-ai-training-seven.vercel.app/

Source baseline: current production deployment dpl_7YGX5hxQxy7a4C12A7uFqMAHnAx1, recovered and verified against all 394 Vercel source files on 22 November 2026. This baseline is newer than the previous repository main.

Scope: keep the existing layout, photos, prices, curriculum, links and scripts. Apply the approved charcoal/paper/navy Limitless CI v1.3 skin through brand-ci.css, with locally bundled Archivo and Noto Sans Thai (OFL files included). Add one supporting Claude teaching-tool sentence on each TH/EN landing page. No course rebranding.

Verification: HTML body is byte-identical to the current baseline after removing the single added Claude sentence and line break. Original styles.css and en/styles.css and gallery JavaScript are unchanged. Existing image assets are unchanged. Preview TH/EN, stylesheet and fonts return HTTP 200. External Chrome viewport checks at 1440, 390 and 320px found no page-level horizontal overflow. Verified gallery filter/enlargement, calculator 15-person scenario (1,800h/year, THB900,000/year), FAQ expansion, language navigation and contact anchor. No form submission or physical-device test. Production HTML remains byte-identical to baseline.

Release: Note approved this preview for production on 22 November 2026. The preview-only X-Robots-Tag setting has been removed. This release changes no visual code relative to the approved preview. Future changes need their own authorization. Other linked documents/subpages retain their original design.
