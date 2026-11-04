import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Box,
  BrainCircuit,
  Braces,
  Check,
  CircleDot,
  Database,
  FileText,
  GitBranch,
  Layers3,
  Play,
  RotateCcw,
  ScanEye,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useLanguage } from "../lib/language";
import { Button } from "./ui/button";

export function HeroSystem() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(1);
  const nodes = [
    {
      icon: Database,
      name: "Data",
      code: "01",
      en: "Good intelligence starts with well-prepared data.",
      fr: "Une intelligence utile commence par des données bien préparées.",
    },
    {
      icon: BrainCircuit,
      name: "AI / ML",
      code: "02",
      en: "Models and agents turn information into useful capabilities.",
      fr: "Modèles et agents transforment l’information en capacités utiles.",
    },
    {
      icon: Braces,
      name: "Full stack",
      code: "03",
      en: "Thoughtful interfaces bring the whole system to people.",
      fr: "Des interfaces soignées mettent le système à la portée de chacun.",
    },
  ];
  return (
    <div className="hero-system">
      <div className="system-header mono">
        <span>
          <span className="status-dot" />
          {t("CONNECTING THE DOTS", "RELIER LES IDÉES")}
        </span>
        <span>RE / 2026</span>
      </div>
      <div className="system-canvas">
        <svg
          className="system-orbits"
          viewBox="0 0 480 355"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="240" cy="177" r="116" />
          <ellipse
            cx="240"
            cy="177"
            rx="175"
            ry="68"
            transform="rotate(-36 240 177)"
          />
          <path
            className="orbit-line"
            d="M108 126L240 177L380 110M240 177L294 287"
          />
          <circle className="orbit-satellite" cx="141" cy="281" r="4" />
          <circle className="orbit-satellite" cx="331" cy="69" r="3" />
        </svg>
        <div className="system-core" aria-hidden="true">
          <span className="core-mark">
            re<span>.</span>
          </span>
          <span className="mono">ENGINEER</span>
        </div>
        {nodes.map(({ icon: Icon, name, code }, i) => (
          <button
            key={name}
            className={`system-node system-node-${i} ${selected === i ? "is-selected" : ""}`}
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
            aria-label={t(
              `Explore ${name} layer`,
              `Explorer la couche ${name}`,
            )}
          >
            <span className="node-icon">
              <Icon size={19} strokeWidth={1.5} />
            </span>
            <span>
              {name}
              <small className="mono">LAYER / {code}</small>
            </span>
            <span className="node-indicator" />
          </button>
        ))}
        <span className="system-coordinates mono">
          {t("BUILT WITH CURIOSITY", "CONSTRUIT AVEC CURIOSITÉ")}
        </span>
      </div>
      <div className="system-caption" aria-live="polite">
        <span className="mono">0{selected + 1} /</span>
        <p>{t(nodes[selected].en, nodes[selected].fr)}</p>
        <ArrowUpRight size={19} />
      </div>
      <a href="#playground" className="system-explore mono">
        {t("EXPLORE THE ARCHITECTURE", "EXPLORER L’ARCHITECTURE")}
        <ArrowDown size={14} />
      </a>
    </div>
  );
}

const paths = [
  {
    id: "TalentAI",
    name: "TalentAI",
    tagline: [
      "A document becomes a useful signal.",
      "Un document devient un signal utile.",
    ],
    nodes: [
      {
        icon: FileText,
        name: ["Candidate CV", "CV candidat"],
        technology: "React",
        detail: [
          "A candidate enters the recruitment workflow through the React interface.",
          "Un candidat entre dans le processus de recrutement via l’interface React.",
        ],
      },
      {
        icon: Braces,
        name: ["Application API", "API applicative"],
        technology: "Spring Boot",
        detail: [
          "The Java backend connects candidates, recruiters, applications and the AI service.",
          "Le backend Java relie candidats, recruteurs, candidatures et service IA.",
        ],
      },
      {
        icon: Sparkles,
        name: ["AI assistance", "Assistance IA"],
        technology: "Spring AI / Ollama",
        detail: [
          "Prompts extract skills, assess compatibility and generate interview questions. This diagram does not call an LLM.",
          "Les prompts extraient les compétences, évaluent la compatibilité et génèrent des questions. Ce schéma n’appelle pas de LLM.",
        ],
      },
      {
        icon: Database,
        name: ["Recruitment workflow", "Processus RH"],
        technology: "PostgreSQL",
        detail: [
          "Recruiters review results within the application workflow, backed by PostgreSQL.",
          "Les recruteurs consultent les résultats dans le processus applicatif, avec persistance PostgreSQL.",
        ],
      },
    ],
  },
  {
    id: "RetinaScan",
    name: "RetinaScan",
    tagline: [
      "From image pixels to model predictions.",
      "Des pixels de l’image aux prédictions.",
    ],
    nodes: [
      {
        icon: ScanEye,
        name: ["Retinal image", "Image rétinienne"],
        technology: "React",
        detail: [
          "The interface accepts a retinal image for analysis. No image is uploaded in this portfolio.",
          "L’interface reçoit une image rétinienne à analyser. Aucune image n’est envoyée dans ce portfolio.",
        ],
      },
      {
        icon: Braces,
        name: ["Authenticated API", "API authentifiée"],
        technology: "Spring Boot / JWT",
        detail: [
          "Spring Boot manages roles, authentication and analysis records.",
          "Spring Boot gère les rôles, l’authentification et les résultats d’analyse.",
        ],
      },
      {
        icon: BrainCircuit,
        name: ["Image classification", "Classification"],
        technology: "Flask / MobileNetV2",
        detail: [
          "A Flask service exposes the TensorFlow classifier. Academic work, without clinical validation.",
          "Un service Flask expose le classifieur TensorFlow. Travail académique, sans validation clinique.",
        ],
      },
      {
        icon: Layers3,
        name: ["Review results", "Consulter les résultats"],
        technology: "React dashboard",
        detail: [
          "The application displays saved analyses, history and statistics.",
          "L’application affiche les analyses enregistrées, l’historique et les statistiques.",
        ],
      },
    ],
  },
  {
    id: "BigData",
    name: "BigData",
    tagline: [
      "Follow an event through the pipeline.",
      "Suivez un événement dans le pipeline.",
    ],
    nodes: [
      {
        icon: Braces,
        name: ["Generate", "Générer"],
        technology: "Python",
        detail: [
          "The producer creates sample messages and publishes them to a Kafka topic.",
          "Le producteur crée des messages de démonstration et les publie vers un topic Kafka.",
        ],
      },
      {
        icon: GitBranch,
        name: ["Ingest", "Ingérer"],
        technology: "Kafka",
        detail: [
          "Kafka acts as the messaging layer between the producer and stream processor.",
          "Kafka sert de couche de messagerie entre le producteur et le traitement en flux.",
        ],
      },
      {
        icon: Workflow,
        name: ["Process", "Traiter"],
        technology: "Spark Streaming",
        detail: [
          "Spark Structured Streaming consumes and transforms incoming events.",
          "Spark Structured Streaming consomme et transforme les événements entrants.",
        ],
      },
      {
        icon: Database,
        name: ["Store", "Stocker"],
        technology: "HDFS",
        detail: [
          "Processed data is written to distributed storage. Services are coordinated with Docker Compose.",
          "Les données traitées sont écrites dans le stockage distribué. Docker Compose orchestre les services.",
        ],
      },
    ],
  },
  {
    id: "AgentFleet",
    name: "AgentFleet",
    tagline: [
      "From a dashboard to isolated agents.",
      "Du tableau de bord aux agents isolés.",
    ],
    nodes: [
      {
        icon: Layers3,
        name: ["Control plane", "Centre de contrôle"],
        technology: "Next.js / shadcn/ui",
        detail: [
          "A TypeScript dashboard brings agent deployment, health and logs into one interface.",
          "Un tableau de bord TypeScript réunit déploiement, état et logs des agents.",
        ],
      },
      {
        icon: Braces,
        name: ["Docker API", "API Docker"],
        technology: "Dockerode",
        detail: [
          "Next.js API routes connect the management interface to the Docker Engine.",
          "Les routes API Next.js relient l’interface de gestion à Docker Engine.",
        ],
      },
      {
        icon: Box,
        name: ["Agent containers", "Conteneurs agents"],
        technology: "Docker",
        detail: [
          "Agents run in isolated containers. No container is launched by this portfolio.",
          "Les agents fonctionnent dans des conteneurs isolés. Ce portfolio ne lance aucun conteneur.",
        ],
      },
      {
        icon: Database,
        name: ["State & history", "État et historique"],
        technology: "PostgreSQL / Redis",
        detail: [
          "PostgreSQL holds metadata and history; Redis supports state and message buffering.",
          "PostgreSQL conserve les métadonnées et l’historique ; Redis gère l’état et les messages.",
        ],
      },
    ],
  },
];

export function ArchitecturePlayground() {
  const { language, t } = useLanguage();
  const [pathIndex, setPathIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const path = paths[pathIndex];
  const index = language === "en" ? 0 : 1;
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      if (step < path.nodes.length - 1) setStep((current) => current + 1);
      else {
        setRunning(false);
        setFinished(true);
      }
    }, 1250);
    return () => window.clearTimeout(timer);
  }, [running, step, path.nodes.length]);
  function changePath(next: number) {
    setPathIndex(next);
    setStep(0);
    setRunning(false);
    setFinished(false);
  }
  return (
    <section
      id="playground"
      className="playground-section"
      aria-labelledby="playground-title"
    >
      <div className="section playground-inner">
        <div className="section-topline">
          <span className="eyebrow">
            <span className="index">02 /</span>
            {t("THE ARCHITECTURE PLAYGROUND", "L’ATELIER D’ARCHITECTURE")}
          </span>
          <span className="mono section-aside">
            <CircleDot size={13} />
            {t("CLICK. FOLLOW. EXPLORE.", "CLIQUEZ. SUIVEZ. EXPLOREZ.")}
          </span>
        </div>
        <div className="section-heading">
          <h2 id="playground-title">
            {t("Look under", "Explorez")}
            <br />
            <span className="serif-accent">
              {t("the hood.", "les rouages.")}
            </span>
          </h2>
          <p>
            {t(
              "I like understanding how the pieces fit. Pick a project and follow the path from input to output.",
              "J’aime comprendre comment les pièces s’assemblent. Choisissez un projet et suivez le parcours de l’entrée à la sortie.",
            )}
          </p>
        </div>
        <div className="lab-shell">
          <div className="lab-toolbar">
            <div
              className="lab-tabs"
              role="group"
              aria-label={t(
                "Choose an architecture",
                "Choisir une architecture",
              )}
            >
              {paths.map((item, i) => (
                <button
                  aria-pressed={pathIndex === i}
                  onClick={() => changePath(i)}
                  className={pathIndex === i ? "is-active" : ""}
                  key={item.id}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <span className="lab-label mono">
              {t("INTERACTIVE DIAGRAM", "SCHÉMA INTERACTIF")}
            </span>
          </div>
          <div className="lab-content">
            <div className="lab-title">
              <span className="mono">
                {t("THE DATA JOURNEY", "LE PARCOURS DES DONNÉES")}
              </span>
              <h3>{path.tagline[index]}</h3>
            </div>
            <div
              className={`lab-pipeline ${running ? "is-running" : ""}`}
              role="group"
              aria-label={t("Architecture stages", "Étapes de l’architecture")}
            >
              {path.nodes.map(({ icon: Icon, name, technology }, i) => (
                <div
                  className="lab-stage-group"
                  key={`${path.id}-${technology}`}
                >
                  <button
                    className={`lab-stage ${step === i ? "is-current" : ""} ${i < step || finished ? "is-complete" : ""}`}
                    aria-pressed={step === i}
                    onClick={() => {
                      setStep(i);
                      setRunning(false);
                      setFinished(false);
                    }}
                  >
                    <span className="lab-stage-index mono">
                      0{i + 1}
                      {i < step || finished ? <Check size={13} /> : null}
                    </span>
                    <Icon size={30} strokeWidth={1.4} />
                    <strong>{name[index]}</strong>
                    <small>{technology}</small>
                  </button>
                  {i < path.nodes.length - 1 && (
                    <ArrowRight
                      className={`lab-connector ${i < step ? "is-passed" : ""}`}
                      size={23}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="lab-detail" aria-live="polite">
              <span className="mono">
                0{step + 1} / {path.nodes[step].technology}
              </span>
              <p>{path.nodes[step].detail[index]}</p>
            </div>
          </div>
          <div className="lab-footer">
            <p>
              <span className="status-dot" />
              {t(
                "Architecture illustration — app screenshots coming soon.",
                "Illustration d’architecture — captures d’application à venir.",
              )}
            </p>
            <Button
              variant="light"
              size="small"
              onClick={() => {
                setStep(0);
                setFinished(false);
                setRunning((current) => !current);
              }}
              aria-label={
                running
                  ? t("Stop walkthrough", "Arrêter le parcours")
                  : t(
                      "Play architecture walkthrough",
                      "Lancer le parcours d’architecture",
                    )
              }
            >
              {running ? (
                <RotateCcw size={15} />
              ) : (
                <Play size={14} fill="currentColor" />
              )}
              {running
                ? t("Stop", "Arrêter")
                : finished
                  ? t("Replay flow", "Rejouer le parcours")
                  : t("Follow the flow", "Suivre le parcours")}
            </Button>
          </div>
        </div>
        <a
          href={`https://github.com/redaelfer/${path.id}`}
          className="playground-source text-link"
          target="_blank"
          rel="noreferrer"
        >
          {t("Go deeper in the source code", "Approfondir dans le code source")}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
