# Portfolio development and maintenance

The public portfolio is **https://reda-elferrasi.vercel.app/**. This guide keeps local development and content-editing instructions separate from the GitHub showcase.

## Run locally

Requires Node.js 24 LTS and npm. From the portfolio folder:

```powershell
npm ci
npm run dev
```

Open the Local URL printed by Vite, normally **http://127.0.0.1:5173/**. Opening `index.html` directly does not run the React app.

```powershell
npm run check       # TypeScript and interaction/content tests
npm run build       # Production output in dist/
npm run preview     # Preview the build at http://127.0.0.1:4173/
npm run format      # Format source, configuration and documentation
```

## Edit content

| File                              | Purpose                                                         |
| --------------------------------- | --------------------------------------------------------------- |
| `src/data/projects.ts`            | Bilingual project descriptions, evidence, links and media paths |
| `src/data/github.json`            | Snapshot of public GitHub repository metadata                   |
| `src/components/Career.tsx`       | Experience, education, skills and CV library                    |
| `src/components/Architecture.tsx` | Hero illustration and interactive project diagrams              |
| `src/App.tsx`                     | Navigation, introduction, contact and footer                    |
| `src/style.css`                   | Colors, typography, layout, motion and responsive styles        |
| `src/main.tsx`                    | App entry point and Vercel Web Analytics component              |
| `public/cv/`                      | Eight downloadable CV PDFs                                      |
| `cv/english/`, `cv/french/`       | Editable LaTeX CV sources                                       |
| `public/images/`                  | Portrait and future project screenshots                         |

Paths in this table are relative to the project root. The legacy `assets/` folder is retained for reference; the production build includes `public/` and imported source assets.

`npm run sync:github` refreshes repository metadata through GitHub's public API without overwriting curated case studies. Add new project entries in `src/data/projects.ts` when the script reports uncovered repositories. No GitHub API call runs in a visitor's browser.

## CVs and project media

- [Edit and publish CVs](EDITING-CVS.md), using local LaTeX, Overleaf, or replacement PDFs with the existing filenames.
- [Capture real app screenshots](SCREENSHOT-CAPTURE.md). Set a project's `media.src` to replace its architecture placeholder; use `media.video` for recordings and `demoUrl` for verified live apps.

Current project visuals are labelled architecture sketches. They do not represent running deployments of the application repositories.

## Hosting and checks

- [Vercel deployment and Analytics](VERCEL-DEPLOYMENT.md)
- [Verification coverage and limits](TESTING.md)
- [Content sources and design decisions](RESEARCH.md)

The optional `.github/workflows/deploy.yml` supports GitHub Pages when the repository's **Settings → Pages** publishing source is **GitHub Actions**. The relative Vite base also supports `/portfolio/`. Vercel remains the primary public address.
