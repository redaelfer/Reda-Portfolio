import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  rename,
  writeFile,
} from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

const root = fileURLToPath(new URL("../", import.meta.url));
const tracks = ["AI", "ML", "DATA-SCIENCE", "FULL-STACK"];
const languages = ["ENG", "FR"];

async function main() {
  const { values } = parseArgs({
    options: {
      track: { type: "string" },
      language: { type: "string" },
      engine: { type: "string" },
      list: { type: "boolean" },
      help: { type: "boolean" },
    },
  });
  if (values.help) {
    console.log(
      "Build editable LaTeX CVs into public/cv/.\n\n" +
        "npm run cv:build                               Build all eight CVs\n" +
        "npm run cv:build -- --track AI --language ENG   Build one version\n" +
        "npm run cv:build -- --list                     List sources and outputs\n\n" +
        "Tracks: AI, ML, DATA-SCIENCE, FULL-STACK. Languages: ENG, FR.\n" +
        "Requires pdfLaTeX (MiKTeX or TeX Live). Use --engine to specify its executable.\n" +
        "Alternative: compile in Overleaf and replace the matching PDF. See docs/EDITING-CVS.md.",
    );
    return;
  }
  const track = values.track?.toUpperCase();
  const language = values.language?.toUpperCase();
  if (track && !tracks.includes(track))
    throw new Error(`Unknown track: ${track}. Choose ${tracks.join(", ")}.`);
  if (language && !languages.includes(language))
    throw new Error(`Unknown language: ${language}. Choose ENG or FR.`);
  const jobs = tracks
    .filter((item) => !track || item === track)
    .flatMap((item) =>
      languages
        .filter((locale) => !language || locale === language)
        .map((locale) => {
          const name = `cv-redaelferrasi-${item}-${locale}`;
          return {
            name,
            source: join(
              root,
              "cv",
              locale === "ENG" ? "english" : "french",
              `${name}.tex`,
            ),
            output: join(root, "public", "cv", `${name}.pdf`),
          };
        }),
    );
  for (const job of jobs) await access(job.source);
  if (values.list) {
    jobs.forEach((job) => console.log(`${job.source}\n  → ${job.output}`));
    return;
  }
  const engine = values.engine || process.env.PDFLATEX_BIN || "pdflatex";
  const version = spawnSync(engine, ["--version"], {
    encoding: "utf8",
    windowsHide: true,
  });
  if (version.error || version.status !== 0)
    throw new Error(
      "pdfLaTeX is unavailable. Install MiKTeX/TeX Live, pass --engine with its executable path, or use the Overleaf workflow in docs/EDITING-CVS.md. Existing PDFs have not been changed.",
    );

  await mkdir(join(root, "tmp"), { recursive: true });
  const buildRoot = await mkdtemp(join(root, "tmp", "cv-build-"));
  const prepared = [];
  for (const job of jobs) {
    const directory = join(buildRoot, job.name);
    await mkdir(directory);
    for (let pass = 1; pass <= 2; pass++) {
      const result = spawnSync(
        engine,
        [
          "-interaction=nonstopmode",
          "-halt-on-error",
          "-no-shell-escape",
          `-output-directory=${directory}`,
          job.source,
        ],
        {
          cwd: dirname(job.source),
          encoding: "utf8",
          windowsHide: true,
          maxBuffer: 10 * 1024 * 1024,
        },
      );
      const log = join(directory, `build-pass-${pass}.log`);
      await writeFile(log, (result.stdout || "") + (result.stderr || ""));
      if (result.error || result.status !== 0)
        throw new Error(
          `Compilation failed for ${job.name}. Check ${log}. No website PDFs were replaced.`,
        );
    }
    const generated = join(directory, `${job.name}.pdf`);
    const data = await readFile(generated);
    if (data.subarray(0, 5).toString() !== "%PDF-")
      throw new Error(
        `Invalid compiler output for ${job.name}. No website PDFs were replaced.`,
      );
    prepared.push({ ...job, generated });
  }
  await mkdir(join(root, "public", "cv"), { recursive: true });
  for (const job of prepared) {
    await rename(job.generated, job.output);
    console.log(`Updated public/cv/${job.name}.pdf`);
  }
  console.log(
    "Open each updated PDF to review its content and layout, then deploy the website. Compilation logs are in " +
      buildRoot,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
