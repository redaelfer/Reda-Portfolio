# Vercel deployment

Production: **https://reda-elferrasi.vercel.app/**

The existing project is `prj_GzGBgkdj0ZwsoxhMxzC99MgOk6AM`, in team `redaelferr-4492s-projects`. Deploy updates to this project to preserve the address.

## Build and publish

`vercel.json` selects Vite, installs the locked dependencies with `npm ci`, runs `npm run build`, and publishes `dist/`. The project needs no runtime secrets or paid add-ons.

From a terminal in this portfolio folder:

```powershell
npm ci
npm run check
npm run build

# Run when this computer is not signed in to Vercel:
npx --yes vercel login

# Update the existing production project:
npx --yes vercel deploy --prod --project prj_GzGBgkdj0ZwsoxhMxzC99MgOk6AM --scope redaelferr-4492s-projects --yes
```

The CLI prints the deployment status and production address. Wait for `READY`, then visit the production address and verify the updated content. A local edit or successful local build alone does not publish the site.

`.vercelignore` excludes local caches, editable CV sources, legacy assets, research, unrelated output documents and temporary folders from the deployment upload. Public assets and all eight downloadable CVs live in `public/`.

## Domain and access

`reda-elferrasi.vercel.app` is the verified, platform-managed free address. Production is public for recruiters; preview deployments retain Vercel Authentication. The corresponding project setting is `ssoProtection.deploymentType: "preview"`.

Typing an arbitrary address such as `portfolio-reda.now` into Vercel does not register that domain. A custom domain needs ownership and correctly configured DNS. The unused `.now` assignment was removed; only the working free address is assigned to this project. Vercel's domain check reports `configured_correctly`.

To recheck configuration:

```powershell
npx --yes vercel domains verify reda-elferrasi.vercel.app --project prj_GzGBgkdj0ZwsoxhMxzC99MgOk6AM --scope redaelferr-4492s-projects --json
```

If the production address changes, update canonical, `og:url` and `og:image` metadata in `index.html`, rebuild, and deploy. Keep the CV/LinkedIn portfolio link aligned with the verified production address.

## Web Analytics

Vercel Web Analytics is enabled for this project. The root in `src/main.tsx` mounts the official `@vercel/analytics/react` component once alongside the app. It collects the default visitor and page-view statistics; no custom events are configured.

After deploying, open the public portfolio in a browser, then return to this project's **Analytics** tab in Vercel. New visits can take a short time to appear. If the setup screen remains, check that the browser can load `/_vercel/insights/script.js` and that a content blocker is not blocking the request. Local development uses the package's development mode and does not send production page views.

See [Vercel's Web Analytics setup guide](https://vercel.com/docs/analytics/quickstart). This is a React/Vite app, so the React integration applies even if the dashboard's setup dropdown currently displays Next.js.

## GitHub and future updates

A CLI deployment does not require a Git push. To make future pushes deploy automatically, connect this repository in the Vercel project's Git settings. The optional GitHub Pages workflow is separate and requires Pages to use GitHub Actions.

CV maintenance instructions: [EDITING-CVS.md](EDITING-CVS.md). Real app screenshot instructions: [SCREENSHOT-CAPTURE.md](SCREENSHOT-CAPTURE.md).

References: [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite), [CLI deployment](https://vercel.com/docs/cli/deploy), [project configuration](https://vercel.com/docs/project-configuration/vercel-json), [domain configuration](https://vercel.com/docs/domains/working-with-domains/add-a-domain).
