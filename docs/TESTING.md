# Verification

## Automated checks

- `npm run check`: TypeScript compilation and 10 Vitest / Testing Library tests pass.
- `npm run build`: production static build passes.
- `npm audit --omit=dev`: zero production dependency vulnerabilities reported at the time of the check.
- `npm run sync:github`: verified against the live public API; refreshed all 14 repositories and preserved the curated case studies.
- Local production HTTP check at `http://127.0.0.1:4173/`: all 20 build files returned HTTP 200 and matched their build output byte-for-byte by SHA-256, including all eight PDFs, JavaScript/CSS, fonts, portrait, favicon and social preview.

The interaction tests cover combined search/filter/reset, alphabetical sorting, search keyboard shortcut, English/French switching and persistence, eight downloadable CV links, project modal content, Escape dismissal and focus restoration, all 14 case studies, mobile-menu state, career expansion, selectable hero layers and the architecture walkthrough lifecycle.

The content checks compare the archive against the audited repository snapshot and validate all eight files as PDFs. All app screenshots/demo URLs remain explicit placeholders until verified media is supplied.

## Verification limits

The connected browser/computer-use host was unavailable in this session (`browser access host is unavailable`; native pipe unavailable). No browser screenshot, visual layout review, browser console check or Lighthouse measurement is claimed. Responsive styles have been implemented at desktop, tablet and phone breakpoints; their appearance needs browser review.

The project interaction tests run in jsdom. They verify DOM behavior, accessible labels and focus, but do not substitute for actual browser rendering, real-device testing or a complete accessibility audit.

The GitHub Pages workflow is optional and requires Pages to be configured for GitHub Actions. Production runs on Vercel with public production access and protected previews. All 20 production files were verified over HTTPS with HTTP 200 and matching SHA-256 hashes after the final full-face crop, including all eight PDFs. The Vercel API confirms `ssoProtection.deploymentType: "preview"`.

The subsequent domain repair attached `https://reda-elferrasi.vercel.app/` as the public production address. Vercel reports `configured_correctly`, and all 20 deployed files, including all eight CV PDFs, returned HTTP 200 and matched the final local build by SHA-256. Canonical and social-sharing metadata use the new address. The unregistered `portfolio-reda.now` assignment was removed from this project; see `VERCEL-DEPLOYMENT.md`.

The application repositories themselves have not been started; see `SCREENSHOT-CAPTURE.md` for that follow-up work.

## CV maintenance

All eight PDFs were compared by SHA-256 with the approved English/French CV folders on 4 November 2026; every file matched. Editable `.tex` copies under `cv/english/` and `cv/french/` preserve the original files unchanged. The maintenance guide explains replacing PDFs, editing LaTeX, compiling and deploying.

The CV builder's listing, argument validation and missing-compiler behavior are checked without changing the approved PDFs. Actual local LaTeX compilation requires pdfLaTeX, which is not installed on the verification machine. The guide provides an Overleaf alternative. No CV PDFs were regenerated as part of this workflow setup.

## Manual browser pass

1. Run `npm run dev` and open Vite's Local URL.
2. Review English and French at 1440, 1024, 768, 390 and 320 pixels. Confirm no horizontal overflow, readable labels and clean line wrapping.
3. Navigate by keyboard, use the skip link and `/` search shortcut, open both modal types, cycle focus and close with Escape.
4. Check a CV from every track and language; confirm each opens/downloads the intended latest PDF.
5. Try project search plus each filter, an empty state, sorting, career expansion and the skill-to-project links.
6. Start, stop, finish and replay an architecture walkthrough; switch projects mid-run. Enable reduced motion and confirm decoration stays still.
7. Verify portrait and font loading, contact mail links, GitHub/LinkedIn links and email copying.
8. Repeat with `npm run build` / `npm run preview` before publishing. Confirm the deployed `/portfolio/` base resolves scripts, fonts, images and CV downloads.
