# Update your CVs without assistance

The website serves eight PDFs from **`public/cv/`**. Editable LaTeX copies live in **`cv/english/`** and **`cv/french/`**, so you can edit them directly from this project's file tree.

On 4 November 2026, all eight website PDFs matched the approved copies in `C:\Users\ROG\Pictures\ensias\cv-redaelferrasi\cv-eng` and its sibling `cv-Fr` folder byte-for-byte by SHA-256. The LaTeX sources were copied unchanged from those same folders. This confirms the versions; it is not independent verification of every achievement stated in the CVs.

## Find the right version

| Specialization   | English source                                     | French source                                    |
| ---------------- | -------------------------------------------------- | ------------------------------------------------ |
| AI               | `cv/english/cv-redaelferrasi-AI-ENG.tex`           | `cv/french/cv-redaelferrasi-AI-FR.tex`           |
| Machine learning | `cv/english/cv-redaelferrasi-ML-ENG.tex`           | `cv/french/cv-redaelferrasi-ML-FR.tex`           |
| Data science     | `cv/english/cv-redaelferrasi-DATA-SCIENCE-ENG.tex` | `cv/french/cv-redaelferrasi-DATA-SCIENCE-FR.tex` |
| Full stack       | `cv/english/cv-redaelferrasi-FULL-STACK-ENG.tex`   | `cv/french/cv-redaelferrasi-FULL-STACK-FR.tex`   |

The matching PDF uses the same filename in `public/cv/`, with `.pdf` instead of `.tex`. Keep those PDF filenames unchanged so the website's existing download buttons continue to work.

## Option 1: replace an already prepared PDF

1. Prepare or export your updated CV as a PDF.
2. In the file tree, expand `public` → `cv`.
3. Replace the matching PDF, preserving its exact filename. For example, replace `public/cv/cv-redaelferrasi-AI-ENG.pdf` to update the English AI CV.
4. Open the PDF and check all pages. If you changed the underlying CV content, update its `.tex` source too so your editable backup stays current.
5. Follow **Publish the update** below. Replacing a local file alone does not change the live website.

There is no need to change `index.html`, `package-lock.json`, or the CV buttons when the filenames stay the same.

## Option 2: edit the LaTeX from the file tree

1. Open the appropriate `.tex` file in `cv/english/` or `cv/french/`.
2. Edit the text between `\begin{document}` and `\end{document}`. Keep the preamble, commands, margins, section order and formatting intact unless you intentionally want a redesign. Escape literal `%`, `&` and `_` as `\%`, `\&` and `\_`.
3. Compile it using either of these methods.

### Local compilation

Install a LaTeX distribution such as [MiKTeX for Windows](https://miktex.org/howto/install-miktex) or TeX Live and reopen the terminal so `pdflatex` is available. This computer did not have `pdflatex` available during setup; installing it is a one-time prerequisite for this option.

From the portfolio folder:

```powershell
# Build one CV:
npm run cv:build -- --track AI --language ENG

# Build every English and French version:
npm run cv:build

# List the source/output paths without changing any PDFs:
npm run cv:build -- --list
```

Tracks are `AI`, `ML`, `DATA-SCIENCE`, and `FULL-STACK`. Languages are `ENG` and `FR`. If needed, specify `--engine "C:/path/to/pdflatex.exe"`.

The command compiles selected sources twice into ignored temporary folders. It checks that every selected compilation succeeds before replacing website PDFs. It never changes the original external CV folders. Open the updated PDF in `public/cv/` to check page count, wrapping, links and accuracy before publishing.

### Compilation through Overleaf

If you prefer to avoid installing LaTeX, put the selected `.tex` file in a ZIP and [upload it as an Overleaf project](https://docs.overleaf.com/managing-projects-and-files/uploading-a-project). Set that file as the main document and use the **pdfLaTeX** compiler. Edit, recompile, visually review, and download the PDF. Then replace its matching file in `public/cv/` as described above.

## Publish the update

From a terminal opened in this portfolio folder:

```powershell
npm run check
npm run build

# Only needed if your Vercel login has expired:
npx --yes vercel login

# Publish to your existing project:
npx --yes vercel deploy --prod --project prj_GzGBgkdj0ZwsoxhMxzC99MgOk6AM --scope redaelferr-4492s-projects --yes
```

Then visit **https://reda-elferrasi.vercel.app/**, open **My CV**, and download the version you changed. Check the downloaded PDF rather than a previously opened browser tab. If the browser displays an older cached copy, reload or open the direct PDF URL with a query such as `?v=2026-11-04`.

Example direct download: **https://reda-elferrasi.vercel.app/cv/cv-redaelferrasi-AI-ENG.pdf**.

## Back up your changes

When you choose to save an update to GitHub, commit the edited `.tex` source and the matching compiled PDF together. The website build does not compile LaTeX automatically. A changed `.tex` file without an updated PDF will leave visitors downloading the previous document.

If you add an entirely new specialization or change PDF filenames, update the CV configuration in `src/data/projects.ts` and the link construction in `src/components/Career.tsx`, then adjust the relevant tests. Replacing existing versions needs neither change.
