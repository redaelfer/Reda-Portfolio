# Research and content provenance

Reviewed on **4 November 2026**.

## Portfolio design decisions

- Lead with a clear engineering focus, then show a curated selection before the full archive. [GitHub's hiring-profile guide](https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume) recommends a concise bio, selected relevant projects and useful project overviews.
- Explain the problem, implementation, role and evidence in each case study. [Nielsen Norman Group's portfolio guidance](https://www.nngroup.com/articles/ux-design-portfolios/) is about UX hiring; its case-study structure is adapted here to engineering rather than treated as direct research about AI hiring.
- Use interaction to explain the work: selectable architecture stages, repository search, filters and skill-to-project links. Avoid invented dashboards or outputs presented as real apps.
- Respect reduced-motion preferences, following [web.dev's guidance](https://web.dev/articles/prefers-reduced-motion). The guided architecture flow starts only after a visitor requests it.
- Use React + TypeScript + Vite for a static interactive portfolio, with Radix UI accessible primitives and small reusable components. References: [React build-tool guidance](https://react.dev/learn/build-a-react-app-from-scratch), [Vite](https://vite.dev/guide/) and [shadcn's Vite integration](https://ui.shadcn.com/docs/installation/vite). This project uses its own visual design and Radix-based components; it does not claim to have installed the shadcn CLI or its full component library.
- Support the existing repository-based hosting with a checked static build. References: [Vite static deployment](https://vite.dev/guide/static-deploy.html) and [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Personal facts

The source of truth is the latest `.tex`/PDF files in the user-provided `cv-eng` and `cv-Fr` folders. All eight PDFs were copied into `public/cv/` without modifying the CVs.

- ENSIAS state engineering degree, Data Science & IoT, 2023–2026; CPGE TSI, 2021–2023.
- Matious Digital PFE, January–September 2026: a platform tested with 20–40 concurrent agents, OpenClaw/Hermes integrations, routing/recovery and Hetzner container deployment.
- ONCF, June–August 2025: 23% lower ETL latency during tests, more than 10 KPIs, and 35% shorter incident detection time during NOC tests.
- S4U, July–August 2024: React ticketing SaaS, 30% shorter processing time in tests, 72% coverage of key features.
- RetinaScan: approximately 74% validation accuracy over 10 epochs from the ML CV; academic context, no clinical validation claimed.
- NosqlAPT: internal validation AUC 0.984 from the ML CV; no production performance claim. The data-science CV's simulated F1 text includes inconsistent arithmetic, so that claim was not used.
- CS50x and AWS Knowledge: Cloud Essentials training badge are presented with their original scope.
- Arabic native; English B2; French B2. Interests are drawn from the CVs.

The old portfolio's 40% ETL reduction, 20+ KPIs, 83% test coverage and current-student status were replaced by the latest CV facts.

## GitHub review

The [public account](https://github.com/redaelfer) had **14 public repositories**, no forks and none archived at review time. The raw evidence is retained in `research/github-audit.json`; the concise audit is in `research/github-summary.json`. Source URLs are also attached to each project in `src/data/projects.ts`.

- TalentAI is Spring AI + Ollama/Llama3 rather than the old page's unverified BERT description.
- AgentFleet is documented as Next.js/TypeScript/shadcn/Dockerode/PostgreSQL/Redis. It is kept distinct from the Matious Digital PFE and its Hetzner deployment.
- Projects without READMEs use their public description and are labelled accordingly in the case study.
- `phalanx-ai-test` is a small Flask prototype. `greenpip` is a testing/CI experiment with no observed runs in the reviewed comparative report. `workspacetest` contains documentation placeholders. These are included honestly in the archive.
- No public deployed app URL, demo video or usable app screenshot was verified. README localhost links are setup instructions. The RetinaScan training plot is not an app screenshot.

The user requested screenshot placeholders now and a later local-run/capture workflow. No fake app screenshots or working model demos were added.
