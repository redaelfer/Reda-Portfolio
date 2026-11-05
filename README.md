# Reda El Ferrasi · Portfolio

[![Reda El Ferrasi — From data to useful intelligence](public/social-card.png)](https://reda-elferrasi.vercel.app/)

<p align="center">
  <strong>AI Engineering · Multi-Agent Systems · Machine Learning · Data Science</strong><br/>
  Full-stack engineering to turn ideas into applications.
</p>

<p align="center">
  <a href="https://reda-elferrasi.vercel.app/">
    <img src="https://img.shields.io/badge/Visit_the_Portfolio-184F3B?style=for-the-badge&amp;logo=vercel&amp;logoColor=white" alt="Visit the live portfolio on Vercel"/>
  </a>
  <a href="https://github.com/redaelfer">
    <img src="https://img.shields.io/badge/Explore_my_GitHub-24292F?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Explore Reda's GitHub projects"/>
  </a>
</p>

Explore my projects, interactive architecture walkthroughs, experience, and English/French CVs on **[reda-elferrasi.vercel.app](https://reda-elferrasi.vercel.app/)**.

## My expertise

I am a state-qualified engineer in Data Science and IoT from ENSIAS. My work spans multi-agent systems, LLM integration, machine learning, data engineering, and full-stack applications.

### Multi-agent systems & LLM integration

![OpenClaw](https://img.shields.io/badge/OpenClaw-184F3B?style=flat-square)
![Hermes Agent](https://img.shields.io/badge/Hermes_Agent-36546B?style=flat-square)
![Multi-agent orchestration](https://img.shields.io/badge/Multi--agent_orchestration-184F3B?style=flat-square)

During my final-year project at **Matious Digital (January–September 2026)**, I developed and tested an orchestration platform with **20–40 concurrent AI agents**.

- Integrated **OpenClaw and Hermes Agent** through **WebSocket and REST APIs**.
- Automated **prompt generation, model selection, routing, and error recovery**.
- Deployed **containerized agents on Hetzner Cloud**.

My LLM integration projects also use **Spring AI, Ollama, and tool calling**. These capabilities are documented in my [AI engineering CV](public/cv/cv-redaelferrasi-AI-ENG.pdf) and the project case studies below.

## My engineering toolkit

These technologies come from the projects and experience featured in the portfolio.

| Focus                      | Technologies                                                                                                                                                                                                          |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AI & machine learning**  | ![Python, TensorFlow, scikit-learn, and Flask](https://skillicons.dev/icons?i=python,tensorflow,sklearn,flask&theme=light&perline=4)<br/>Python · TensorFlow/Keras · scikit-learn · XGBoost · Ollama · Spring AI      |
| **Data & infrastructure**  | ![Kafka, PostgreSQL, MongoDB, and Docker](https://skillicons.dev/icons?i=kafka,postgres,mongodb,docker&theme=light&perline=4)<br/>Kafka · PySpark · HDFS · SQL · Pandas · NumPy · PostgreSQL · MongoDB · Docker       |
| **Full-stack development** | ![Java, Spring, Next.js, and Node.js](https://skillicons.dev/icons?i=java,spring,nextjs,nodejs&theme=light&perline=4)<br/>React · Next.js · TypeScript · Java · Spring Boot · Flask · Node.js · REST APIs · WebSocket |

![AI engineering capability map: agent systems and LLMs, machine learning, data pipelines, and applications.](docs/images/engineering-map.svg)

## Selected projects

| Project                                                | What it explores                               | Main technologies                                       |
| ------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------- |
| [TalentAI](https://github.com/redaelfer/TalentAI)      | AI-assisted recruitment and candidate matching | React · Spring Boot · Spring AI · Ollama · PostgreSQL   |
| [RetinaScan](https://github.com/redaelfer/RetinaScan)  | Academic retinal-image classification          | TensorFlow · MobileNetV2 · Flask · React · Spring Boot  |
| [APT Detection](https://github.com/redaelfer/NosqlAPT) | Machine learning for security-log analysis     | Python · XGBoost · scikit-learn · TensorFlow · Logstash |
| [BigData](https://github.com/redaelfer/BigData)        | Streaming events from ingestion to storage     | Kafka · PySpark · HDFS · Python · Docker                |
| [AgentFleet](https://github.com/redaelfer/AgentFleet)  | A control interface for containerized agents   | Next.js · TypeScript · Dockerode · PostgreSQL · Redis   |
| [JobOS](https://github.com/redaelfer/JobOS)            | A local workspace for job-search organization  | Node.js · SQLite · Ollama · LaTeX                       |

**[Explore all projects and case studies →](https://reda-elferrasi.vercel.app/#work)**

## Portfolio technology stack

![React, TypeScript, Vite, CSS, Vercel, Vitest, and Git](https://skillicons.dev/icons?i=react,ts,vite,css,vercel,vitest,git&theme=light&perline=7)

**React · TypeScript · Vite · CSS · Vercel · Vitest · Git**

Radix UI powers accessible dialogs, Lucide provides icons, and Vercel Web Analytics tracks visits. The interface includes project search and filters, English/French switching, responsive layouts, and reduced-motion support.

### How this portfolio is built

```mermaid
flowchart LR
    UI["React + TypeScript<br/>Radix UI · Lucide · CSS"] --> Build["Vite<br/>Static build"]
    Content["Project content<br/>English / French CVs"] --> Build
    Build --> Hosting["Vercel<br/>Hosting & CDN"]
    Hosting --> Visitor["Portfolio visitor"]
    Visitor --> Analytics["Vercel<br/>Web Analytics"]

    classDef primary fill:#184f3b,color:#ffffff,stroke:#184f3b;
    class Hosting primary;
```

---

[CV editing](docs/EDITING-CVS.md) · [Development notes](docs/DEVELOPMENT.md) · [Deployment](docs/VERCEL-DEPLOYMENT.md)
