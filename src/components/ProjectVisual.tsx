import { useState } from "react";
import {
  ArrowRight,
  AudioLines,
  Braces,
  BrainCircuit,
  Camera,
  Check,
  Database,
  FileText,
  GitBranch,
  Layers3,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { Project } from "../data/projects";
import { useLanguage } from "../lib/language";
import { asset } from "../lib/utils";

export function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const { language, t } = useLanguage();
  const [failed, setFailed] = useState(false);
  if (project.media.src && !failed)
    return (
      <div className="project-image">
        <img
          src={asset(project.media.src)}
          alt={project.media.alt[language]}
          loading="lazy"
          width="1200"
          height="750"
          onError={() => setFailed(true)}
        />
      </div>
    );
  const nodes: Record<
    string,
    { icon: typeof BrainCircuit; title: string; sub: string }[]
  > = {
    TalentAI: [
      { icon: FileText, title: "CV", sub: "INPUT" },
      { icon: Sparkles, title: "Ollama", sub: "INTELLIGENCE" },
      { icon: Check, title: "Match", sub: "OUTPUT" },
    ],
    RetinaScan: [
      { icon: ScanEye, title: "Image", sub: "INPUT" },
      { icon: BrainCircuit, title: "MobileNetV2", sub: "MODEL" },
      { icon: Layers3, title: "Results", sub: "FLASK API" },
    ],
    NosqlAPT: [
      { icon: Braces, title: "Logs", sub: "DAPT 2020" },
      { icon: BrainCircuit, title: "Autoencoder", sub: "FEATURES" },
      { icon: ShieldCheck, title: "XGBoost", sub: "CLASSIFIER" },
    ],
    BigData: [
      { icon: AudioLines, title: "Kafka", sub: "INGEST" },
      { icon: Workflow, title: "Spark", sub: "PROCESS" },
      { icon: Database, title: "HDFS", sub: "STORE" },
    ],
    AgentFleet: [
      { icon: Layers3, title: "Docker", sub: "CONTAINERS" },
      { icon: GitBranch, title: "Dockerode", sub: "LIST" },
      { icon: Braces, title: "Next.js", sub: "MONITOR" },
    ],
    JobOS: [
      { icon: FileText, title: "Job offers", sub: "DISCOVER" },
      { icon: Sparkles, title: "Local AI", sub: "TAILOR" },
      { icon: Database, title: "SQLite", sub: "TRACK" },
    ],
  };
  const items = nodes[project.id] || [
    { icon: Braces, title: project.stack[0], sub: "BUILD" },
    { icon: Layers3, title: project.name, sub: "EXPLORE" },
  ];
  return (
    <div
      className={`project-visual visual-${project.color} ${compact ? "visual-compact" : ""}`}
    >
      <div className="visual-topline mono">
        <span>
          <span className="tiny-square" />{" "}
          {t("ARCHITECTURE SKETCH", "SCHÉMA D’ARCHITECTURE")}
        </span>
        <span>{project.number || "↗"}</span>
      </div>
      <div className="visual-flow" aria-hidden="true">
        {items.map(({ icon: Icon, title, sub }, i) => (
          <div className="flow-group" key={title}>
            <div className="flow-tile">
              <Icon size={25} strokeWidth={1.4} />
              <span>{title}</span>
              <small className="mono">{sub}</small>
            </div>
            {i < items.length - 1 && (
              <ArrowRight className="flow-arrow" size={19} />
            )}
          </div>
        ))}
      </div>
      <div className="visual-foot mono">
        <span>{project.id.toLowerCase()}.architecture</span>
        <span>
          <Camera size={12} />
          {t("APP CAPTURE PENDING", "CAPTURE À VENIR")}
        </span>
      </div>
    </div>
  );
}
