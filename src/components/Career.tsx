import {
  ArrowDownToLine,
  ArrowUpRight,
  Award,
  Braces,
  BrainCircuit,
  Check,
  ChevronDown,
  Database,
  FileDown,
  GraduationCap,
  MapPin,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../lib/language";
import { asset } from "../lib/utils";
import { cvTracks, projects, type Project } from "../data/projects";
import { Dialog } from "./ui/dialog";

export function CvDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { language, t } = useLanguage();
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={t("A CV for the conversation.", "Un CV pour chaque échange.")}
      description={t(
        "Four specializations. English and French. Choose the version that fits your opportunity.",
        "Quatre spécialisations. Anglais et français. Choisissez la version adaptée à votre opportunité.",
      )}
    >
      <div className="cv-list">
        {cvTracks.map((track) => (
          <div className="cv-row" key={track.id}>
            <span className="cv-icon">
              <FileDown size={23} strokeWidth={1.4} />
            </span>
            <div>
              <h3>{track.label[language]}</h3>
              <p>{track.subtitle[language]}</p>
            </div>
            <div className="cv-downloads">
              {(["ENG", "FR"] as const).map((locale) => (
                <a
                  href={asset(`cv/cv-redaelferrasi-${track.id}-${locale}.pdf`)}
                  download
                  key={locale}
                  aria-label={`${t("Download", "Télécharger")} ${track.label[language]} ${locale === "ENG" ? "English" : "français"} PDF`}
                >
                  {locale === "ENG" ? "EN" : "FR"}
                  <ArrowDownToLine size={13} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="cv-note mono">
        <Check size={14} />
        {t(
          "Current CVs · reviewed November 2026 · PDF",
          "CV actuels · revus en novembre 2026 · PDF",
        )}
      </p>
    </Dialog>
  );
}

export function Experience() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number | null>(0);
  const roles = [
    {
      company: "Matious Digital",
      role: t(
        "AI Engineer · Final-year project",
        "Ingénieur IA · Projet de fin d’études",
      ),
      date: t("JAN — SEP 2026", "JANV. — SEPT. 2026"),
      type: "AI / AGENTS",
      description: t(
        "Building and testing an orchestration platform for 20–40 concurrent AI agents.",
        "Développement et test d’une plateforme d’orchestration de 20 à 40 agents IA simultanés.",
      ),
      details: [
        t(
          "Integrated OpenClaw and Hermes Agent through WebSocket and REST APIs.",
          "Intégration d’OpenClaw et Hermes Agent via WebSocket et API REST.",
        ),
        t(
          "Automated prompts, model selection, routing and error recovery.",
          "Automatisation des prompts, du choix de modèles, du routage et de la reprise sur erreur.",
        ),
        t(
          "Deployed containerized agents on Hetzner Cloud.",
          "Déploiement d’agents conteneurisés sur Hetzner Cloud.",
        ),
      ],
      stat: "20–40",
      statLabel: t("concurrent agents tested", "agents simultanés testés"),
      tags: ["OpenClaw", "Hermes Agent", "Docker", "Hetzner", "WebSocket"],
    },
    {
      company: "ONCF",
      role: t("Data Engineering Intern", "Stagiaire Data Engineer"),
      date: t("JUN — AUG 2025", "JUIN — AOÛT 2025"),
      type: "DATA / ETL",
      description: t(
        "Turning SNMP and Syslog infrastructure data into monitoring and incident visibility.",
        "Transformation de données SNMP et Syslog en supervision et visibilité sur les incidents.",
      ),
      details: [
        t(
          "Automated ETL with a 23% latency reduction during testing.",
          "ETL automatisé avec une réduction de latence de 23 % lors des tests.",
        ),
        t(
          "Centralized data and built dashboards with more than 10 KPIs.",
          "Centralisation des données et tableaux de bord avec plus de 10 KPI.",
        ),
        t(
          "Reduced incident detection time by 35% during NOC testing.",
          "Réduction du délai de détection des incidents de 35 % lors des tests NOC.",
        ),
      ],
      stat: "−23%",
      statLabel: t("ETL latency in tests", "latence ETL en test"),
      tags: ["ETL", "SNMP", "Syslog", "Dashboards"],
    },
    {
      company: "S4U",
      role: t(
        "Full Stack Developer Intern",
        "Stagiaire développeur Full Stack",
      ),
      date: t("JUL — AUG 2024", "JUIL. — AOÛT 2024"),
      type: "WEB / SAAS",
      description: t(
        "Developing a React ticketing SaaS and testing its key workflows.",
        "Développement d’un SaaS de gestion de tickets React et test de ses fonctionnalités clés.",
      ),
      details: [
        t(
          "Reduced ticket processing time by 30% in tests.",
          "Réduction du temps de traitement des tickets de 30 % en test.",
        ),
        t(
          "Added Jest tests with 72% coverage of key features.",
          "Ajout de tests Jest avec 72 % de couverture des fonctionnalités clés.",
        ),
      ],
      stat: "72%",
      statLabel: t(
        "key-feature test coverage",
        "couverture des fonctions clés",
      ),
      tags: ["React", "JavaScript", "Jest", "SaaS"],
    },
  ];
  return (
    <section
      className="section experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-topline">
        <span className="eyebrow">
          <span className="index">04 /</span>
          {t("EXPERIENCE", "EXPÉRIENCE")}
        </span>
        <span className="mono section-aside">
          {t("LEARNING BY BUILDING", "APPRENDRE EN CONSTRUISANT")}
        </span>
      </div>
      <div className="experience-layout">
        <div className="experience-intro">
          <h2 id="experience-title">
            {t("Real teams.", "Des équipes.")}
            <br />
            <span className="serif-accent">
              {t("Real problems.", "Des défis réels.")}
            </span>
          </h2>
          <p>
            {t(
              "From full-stack foundations to data engineering and multi-agent systems. A little more depth with every project.",
              "Du full stack à la data engineering et aux systèmes multi-agents. Un peu plus de profondeur à chaque projet.",
            )}
          </p>
          <p className="small-note">
            {t(
              "Results below are reported in my latest CVs. Test results are labelled with their context.",
              "Les résultats ci-dessous figurent dans mes derniers CV. Les mesures de test sont contextualisées.",
            )}
          </p>
        </div>
        <div className="experience-list">
          {roles.map((role, i) => (
            <article
              className={`experience-item ${expanded === i ? "is-open" : ""}`}
              key={role.company}
            >
              <button
                className="experience-toggle"
                aria-expanded={expanded === i}
                aria-controls={`role-${i}`}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="experience-date mono">
                  <span className="timeline-dot" />
                  {role.date}
                </div>
                <div className="experience-company">
                  <h3>{role.company}</h3>
                  <ChevronDown size={21} />
                </div>
                <p>{role.role}</p>
              </button>
              <div className="experience-summary">
                <p>{role.description}</p>
                <div className="experience-stat">
                  <strong>{role.stat}</strong>
                  <span>{role.statLabel}</span>
                </div>
              </div>
              <div
                id={`role-${i}`}
                hidden={expanded !== i}
                className="experience-details"
              >
                <ul>
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {role.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About({ onSelect }: { onSelect: (project: Project) => void }) {
  const { t } = useLanguage();
  const [skillIndex, setSkillIndex] = useState(0);
  const skills = [
    {
      icon: BrainCircuit,
      name: t("AI & machine learning", "IA et machine learning"),
      tech: [
        "Python",
        "TensorFlow / Keras",
        "scikit-learn",
        "XGBoost",
        "Spring AI",
        "Ollama",
        "Tool calling",
        "Agent orchestration",
        "Flask",
      ],
      ids: ["TalentAI", "RetinaScan", "NosqlAPT", "AI-Agents", "AgentFleet"],
    },
    {
      icon: Database,
      name: t("Data & infrastructure", "Data et infrastructure"),
      tech: [
        "SQL",
        "Pandas",
        "NumPy",
        "Kafka",
        "PySpark",
        "HDFS",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "Docker",
        "Git",
      ],
      ids: ["BigData", "NosqlAPT", "JobOS"],
    },
    {
      icon: Braces,
      name: t("Full-stack development", "Développement full stack"),
      tech: [
        "JavaScript",
        "TypeScript",
        "Java",
        "React",
        "Next.js",
        "Spring Boot",
        "Node.js",
        "REST APIs",
        "WebSocket",
        "Jest",
        "JUnit / Mockito",
      ],
      ids: ["TalentAI", "RetinaScan", "AgentFleet", "JobOS"],
    },
  ];
  const skill = skills[skillIndex];
  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="section-topline">
        <span className="eyebrow">
          <span className="index">05 /</span>
          {t("THE PERSON BEHIND THE CODE", "LA PERSONNE DERRIÈRE LE CODE")}
        </span>
        <span className="mono section-aside">
          <MapPin size={13} />
          {t("BASED IN MOROCCO", "BASÉ AU MAROC")}
        </span>
      </div>
      <div className="about-grid">
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img
              src={asset("images/reda-el-ferrasi.jpeg")}
              alt="Reda El Ferrasi"
              width="560"
              height="560"
              loading="lazy"
            />
          </div>
        </div>
        <div className="about-copy">
          <h2 id="about-title">
            {t("Curiosity is", "La curiosité,")}
            <br />
            <span className="serif-accent">
              {t("the common thread.", "le fil conducteur.")}
            </span>
          </h2>
          <p>
            {t(
              "I’m Reda, a state-qualified engineer in Data Science and IoT from ENSIAS. I work across AI, machine learning and data engineering, with the full-stack skills to turn those ideas into applications.",
              "Je suis Reda, ingénieur d’État en Data Science et IoT, diplômé de l’ENSIAS. Je travaille en IA, machine learning et data engineering, avec les compétences full stack pour transformer ces idées en applications.",
            )}
          </p>
          <p>
            {t(
              "What interests me most is the space between disciplines: a model connected to an API, an agent connected to a tool, data connected to a decision.",
              "Ce qui m’intéresse le plus, c’est le lien entre les disciplines : un modèle relié à une API, un agent à un outil, des données à une décision.",
            )}
          </p>
          <div className="education-list">
            <div>
              <GraduationCap size={23} strokeWidth={1.4} />
              <div>
                <strong>ENSIAS</strong>
                <p>
                  {t(
                    "State Engineering Degree · Data Science & IoT",
                    "Diplôme d’ingénieur d’État · Data Science & IoT",
                  )}
                </p>
              </div>
              <span className="mono">2023–26</span>
            </div>
            <div>
              <GraduationCap size={23} strokeWidth={1.4} />
              <div>
                <strong>CPGE · TSI</strong>
                <p>
                  {t(
                    "Technology & Industrial Sciences",
                    "Technologie et sciences industrielles",
                  )}
                </p>
              </div>
              <span className="mono">2021–23</span>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-panel">
        <div className="skills-sidebar">
          <span className="eyebrow">{t("MY TOOLKIT", "MES OUTILS")}</span>
          <h3>
            {t("The right tool.", "Le bon outil.")}
            <br />
            {t("For the actual problem.", "Pour le problème réel.")}
          </h3>
          <div
            className="skill-tabs"
            role="group"
            aria-label={t("Explore skills", "Explorer les compétences")}
          >
            {skills.map(({ icon: Icon, name }, i) => (
              <button
                className={skillIndex === i ? "is-active" : ""}
                aria-pressed={skillIndex === i}
                key={name}
                onClick={() => setSkillIndex(i)}
              >
                <Icon size={18} />
                {name}
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
        </div>
        <div className="skills-content">
          <h4>{skill.name}</h4>
          <div className="skill-chips">
            {skill.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <span className="mono">
            {t("SEE IT IN MY WORK", "VOIR DANS MES PROJETS")}
          </span>
          <div className="skills-projects">
            {skill.ids.map((id) => {
              const project = projects.find((item) => item.id === id)!;
              return (
                <button onClick={() => onSelect(project)} key={id}>
                  {project.name}
                  <ArrowUpRight size={15} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="about-bottom">
        <div>
          <Award size={20} />
          <p>
            <strong>CS50x</strong>
            <span>Harvard University</span>
          </p>
          <p>
            <strong>AWS Knowledge: Cloud Essentials</strong>
            <span>{t("Training badge", "Badge de formation")}</span>
          </p>
        </div>
        <div className="languages">
          <span>
            {t("Arabic", "Arabe")} <strong>{t("Native", "Natif")}</strong>
          </span>
          <span>
            {t("English", "Anglais")} <strong>B2</strong>
          </span>
          <span>
            {t("French", "Français")} <strong>B2</strong>
          </span>
        </div>
      </div>
      <div className="outside-code">
        <Wrench size={18} />
        <p>
          <span className="mono">
            {t("AWAY FROM THE KEYBOARD", "LOIN DU CLAVIER")}
          </span>
          {t(
            "ECU remapping, car & motorcycle mechanics, game modding, history and mythology.",
            "Reprogrammation ECU, mécanique auto-moto, modding de jeux, histoire et mythologie.",
          )}
        </p>
      </div>
    </section>
  );
}
