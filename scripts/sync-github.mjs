import { writeFile, readFile } from "node:fs/promises";

// Deliberately a build-time snapshot: no access tokens or GitHub dependency in the visitor's browser.
const username = "redaelfer";
const repositories = [];
for (let page = 1; ; page++) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&per_page=100&sort=updated&page=${page}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "reda-portfolio-sync",
      },
      signal: AbortSignal.timeout(20000),
    },
  );
  if (!response.ok)
    throw new Error(
      `GitHub returned ${response.status}. Existing snapshot preserved; try again later.`,
    );
  const batch = await response.json();
  if (!Array.isArray(batch))
    throw new Error("Unexpected GitHub response. Existing snapshot preserved.");
  for (const repo of batch) {
    if (repo.private || repo.owner?.login?.toLowerCase() !== username) continue;
    repositories.push({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      language: repo.language,
      updatedAt: repo.updated_at,
      fork: repo.fork,
      archived: repo.archived,
      homepage: repo.homepage || null,
    });
  }
  if (batch.length < 100) break;
}
const curated = await readFile(
  new URL("../src/data/projects.ts", import.meta.url),
  "utf8",
);
const curatedIds = new Set(
  [...curated.matchAll(/\bid:\s*["']([^"']+)["']/g)].map((match) => match[1]),
);
const missing = repositories.filter((repo) => !curatedIds.has(repo.name));
await writeFile(
  new URL("../src/data/github.json", import.meta.url),
  JSON.stringify(
    { updatedAt: new Date().toISOString(), repositories },
    null,
    2,
  ) + "\n",
);
console.log(
  `Saved ${repositories.length} public repositories. Curated case studies were preserved.`,
);
if (missing.length)
  console.log(
    `Add bilingual entries to src/data/projects.ts for: ${missing.map((repo) => repo.name).join(", ")}`,
  );
console.log(
  "Run npm run check before publishing. The coverage check flags any repository missing from the archive.",
);
