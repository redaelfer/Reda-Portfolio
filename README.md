# Reda El Ferrasi — portfolio

A React + TypeScript portfolio for AI, machine learning and data engineering, with full-stack work as a supporting strength. English is the default; visitors can switch the complete experience to French.

## Run locally

Requires Node.js 24 LTS and npm.

```powershell
npm ci
npm run dev
```

Open the Local URL printed by Vite, normally **http://127.0.0.1:5173/**. This React project needs the dev server; opening `index.html` directly will not run it.

```powershell
npm run check       # TypeScript + interaction/content tests
npm run build       # Production output in dist/
npm run preview     # Inspect the production build at http://127.0.0.1:4173/
npm run format      # Format source, configuration and documentation
```

## What is included

- Six featured case studies: TalentAI, RetinaScan, APT Detection, BigData, AgentFleet and JobOS.
- A searchable, filterable archive of all 14 public GitHub repositories reviewed on 4 November 2026. Experiments and documentation repositories are described with their actual scope.
- An interactive architecture explorer for four projects, with selectable stages and a guided walkthrough. These are diagrams built into the portfolio, not hosted copies of the apps.
- Current experience, education, skills, certifications and interests from the latest English/French CV folders.
- Eight downloadable PDFs: AI, ML, data science and full stack, each in English and French.
- Radix UI dialogs with keyboard navigation and focus restoration, responsive navigation, reduced-motion support, self-hosted fonts and local language preference.
- Project screenshot and video slots prepared for a later local capture session. No invented app screenshots, deployed URLs or model results.

## Edit content

| File                              | Purpose                                                                                                  |
| --------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `src/data/projects.ts`            | Bilingual project descriptions, evidence, source links, categories, screenshot/video paths and demo URLs |
| `src/data/github.json`            | Build-time snapshot of public repository metadata                                                        |
| `src/components/Career.tsx`       | Professional experience, education, skills and CV library                                                |
| `src/components/Architecture.tsx` | Hero system illustration and interactive project diagrams                                                |
| `src/App.tsx`                     | Navigation, introduction, contact and footer                                                             |
| `src/style.css`                   | Design tokens, layout, motion and responsive styles                                                      |
| `public/cv/`                      | Eight current CV PDFs                                                                                    |
| `cv/english/`, `cv/french/`       | Editable LaTeX CV sources, matching the eight published PDFs                                             |
| `public/images/`                  | Portrait and future screenshots                                                                          |

Project facts are curated independently of GitHub metadata. `npm run sync:github` refreshes the public snapshot using GitHub's unauthenticated API without changing the case studies. It prints any new repositories needing an entry. The coverage test prevents accidentally leaving a public repository out of the archive. No GitHub API request runs in the visitor's browser.

The `assets/` folder contains the original portfolio assets for reference. Only files in `public/` and imported source assets are included in the new production build.

## Update your CVs independently

Read [the CV editing guide](docs/EDITING-CVS.md). Edit the matching `.tex` file in `cv/english/` or `cv/french/` and compile with `npm run cv:build` after installing pdfLaTeX, or use Overleaf. You can also replace an existing PDF directly in `public/cv/`, keeping its filename. Rebuild and deploy to update the live downloads. The guide includes all paths and commands for independent maintenance.

## Add real screenshots later

See [the capture guide](docs/SCREENSHOT-CAPTURE.md). Add a screenshot under `public/images/projects/`, then set the matching project's `media.src` in `src/data/projects.ts`. The diagram placeholder is automatically replaced by the screenshot in the card and case study. Set `media.video` to a local video path for a recording, or `demoUrl` only when an actual deployment exists.

## Vercel

Vercel is the requested production host. The project includes `vercel.json` with the Vite preset, `npm ci`, `npm run build` and `dist` output, plus an upload ignore file that excludes unrelated local documents and caches. The initial temporary deployment was claimed successfully, and the user authorized CLI updates to the existing project. The public production address is **https://reda-elferrasi.vercel.app/**. Production is public, and preview deployments retain Vercel Authentication, as explicitly approved by the user. See [the Vercel deployment guide](docs/VERCEL-DEPLOYMENT.md).

## GitHub Pages

The included `.github/workflows/deploy.yml` checks and builds the site, then publishes `dist/` on pushes to `main` or `master`. In the repository's **Settings → Pages**, choose **GitHub Actions** as the publishing source. The relative Vite base supports the existing `/portfolio/` URL and local preview. If the hosting address changes, update the absolute `og:image` URL in `index.html`.

The workflow runs when changes are pushed to `main` or `master` and GitHub Pages is enabled for Actions. The Vercel deployment is independent of GitHub Pages.

## Research and verification

Read [content sources and design decisions](docs/RESEARCH.md) and [verification results](docs/TESTING.md). Application screenshots, actual app runtime checks and a visual browser review remain for the follow-up capture session.
