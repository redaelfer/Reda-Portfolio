# Real app capture plan

The portfolio deliberately uses labelled architecture sketches until the apps can be run on this laptop. These are designed placeholders, not screenshots of the applications.

## Capture workflow

1. Clone the selected repository into a separate sibling folder, preserving any existing local checkout. Use the GitHub link in the table below.
2. Read its current README, package files and environment examples. Confirm required versions, ports, databases, model files and local AI dependencies before starting it. README instructions are starting points, not proof that a current checkout runs.
3. Use synthetic accounts, sample CVs, non-sensitive images and generated job/log data. Hide credentials, personal records, email content, local paths and tokens before capturing.
4. Run one project at a time, confirm its key workflow, and take a clean desktop capture at 1440 × 900 (or 1600 × 1000). Keep browser chrome out of the final image. Capture a mobile view when it adds useful evidence.
5. Save WebP/JPEG under `public/images/projects/`, ideally under 250 KB per image. Keep an unedited original outside the production assets if needed.
6. Update the project's `media.src` and bilingual `media.alt`. Run `npm run check` and `npm run build`, then review the screenshot in its card and case study at desktop and phone widths.

| Project / repository                                  | Local setup to inspect                                                               | First useful capture                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [TalentAI](https://github.com/redaelfer/TalentAI)     | React, Java/Spring Boot, PostgreSQL, Ollama/Spring AI; Docker instructions in README | Candidate/recruiter dashboard, application Kanban and a sample AI evaluation |
| [RetinaScan](https://github.com/redaelfer/RetinaScan) | React/Vite, Spring Boot, Flask/TensorFlow, database and a locally available model    | Dashboard and analysis history using synthetic/non-sensitive sample data     |
| [NosqlAPT](https://github.com/redaelfer/NosqlAPT)     | Python, trained models/preprocessor, Logstash and Docker Compose                     | Log preprocessing, classifier output and an actual evaluation chart          |
| [BigData](https://github.com/redaelfer/BigData)       | Docker Compose with Kafka, Zookeeper, Spark, HDFS and Python producer                | A real producer event, Spark processing and HDFS output                      |
| [AgentFleet](https://github.com/redaelfer/AgentFleet) | Next.js, Docker Engine/Dockerode, PostgreSQL and Redis                               | Fleet dashboard and an isolated test agent lifecycle                         |
| [JobOS](https://github.com/redaelfer/JobOS)           | Node.js 24, SQLite; optional Ollama/model provider                                   | Application list and a tailored draft using synthetic applicant/job data     |
| [AI-Agents](https://github.com/redaelfer/AI-Agents)   | Python, Streamlit, local Ollama and Llama 3.2                                        | A document summary or tool call using a synthetic document                   |

## Wire an image into the portfolio

For example, after saving `public/images/projects/talentai-dashboard.webp`, change TalentAI's media entry in `src/data/projects.ts`:

```ts
media: {
  src: 'images/projects/talentai-dashboard.webp',
  alt: {
    en: 'TalentAI recruiter dashboard with sample applications on the Kanban board',
    fr: 'Tableau de bord recruteur TalentAI avec candidatures fictives sur le Kanban',
  },
  video: null,
},
demoUrl: null,
```

Use a path relative to `public/`, without a leading slash. Asset URLs use Vite's configured base so they work on GitHub Pages under `/portfolio/`.

To add a recording, put an MP4/WebM under `public/videos/` and set `media.video` to its relative path. The case study renders a video with controls and no autoplay. Set `demoUrl` only after verifying an actual externally reachable deployment.

The current content test intentionally requires `media.src` and `demoUrl` to be null because no app capture/deployment has been verified. When adding real media, replace that assertion with file-existence/format checks for the populated paths and retain the coverage and bilingual-content checks.

## Current state

No app repositories have been cloned or started as part of this portfolio rebuild. Their runtime dependencies and workflows still need to be checked during the capture session. No locally running app should be presented as an externally available live demo.
