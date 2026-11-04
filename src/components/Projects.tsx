import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Camera,
  ExternalLink,
  FolderGit2,
  Github,
  Search,
  X,
} from "lucide-react";
import {
  categories,
  projects,
  type Category,
  type Project,
} from "../data/projects";
import github from "../data/github.json";
import { useLanguage } from "../lib/language";
import { asset } from "../lib/utils";
import { Button } from "./ui/button";
import { Dialog } from "./ui/dialog";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { language, t } = useLanguage();
  return (
    <Dialog
      open={!!project}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      title={project?.name || ""}
      description={project?.label[language] || ""}
      wide
    >
      {project && (
        <>
          <ProjectVisual key={project.id} project={project} />
          {!project.media.src && (
            <p className="media-note">
              <Camera size={16} />
              {t(
                "Screenshot placeholder. A real app capture will be added after a local run.",
                "Emplacement réservé. Une vraie capture sera ajoutée après un lancement local.",
              )}
            </p>
          )}
          {project.media.video && (
            <video
              className="project-video"
              src={asset(project.media.video)}
              controls
              preload="metadata"
              aria-label={t(
                `${project.name} demonstration`,
                `Démonstration ${project.name}`,
              )}
            />
          )}
          <div className="case-grid">
            <div>
              <h3>{t("The idea", "L’idée")}</h3>
              <p>{project.problem[language]}</p>
            </div>
            <div>
              <h3>{t("What I built", "Ce que j’ai construit")}</h3>
              <ul>
                {project.implementation.map((item) => (
                  <li key={item.en}>{item[language]}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="evidence-note">
            <span className="mono">
              {t("EVIDENCE & CONTEXT", "RÉSULTATS & CONTEXTE")}
            </span>
            <p>{project.evidence[language]}</p>
          </div>
          <div className="tag-list">
            {project.stack.map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <div className="case-actions">
            <Button asChild>
              <a
                href={`https://github.com/redaelfer/${project.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                {t("Explore the repository", "Explorer le dépôt")}
                <ArrowUpRight size={17} />
              </a>
            </Button>
            <a
              href={project.source}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {t("Project source", "Source du projet")}
              <ExternalLink size={14} />
            </a>
            {project.demoUrl && (
              <Button variant="outline" asChild>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  {t("Open live app", "Ouvrir l’application")}
                  <ArrowUpRight size={16} />
                </a>
              </Button>
            )}
          </div>
        </>
      )}
    </Dialog>
  );
}

export function FeaturedProjects({
  onSelect,
}: {
  onSelect: (project: Project) => void;
}) {
  const { language, t } = useLanguage();
  return (
    <section
      className="section work-section"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-topline">
        <span className="eyebrow">
          <span className="index">01 /</span>
          {t("SELECTED WORK", "PROJETS SÉLECTIONNÉS")}
        </span>
        <span className="mono section-aside">2024 — 2026</span>
      </div>
      <div className="section-heading">
        <h2 id="work-title">
          {t("Ideas, built into", "Des idées devenues")}
          <br />
          <span className="serif-accent">
            {t("something useful.", "des outils utiles.")}
          </span>
        </h2>
        <div>
          <p>
            {t(
              "A selection of projects across applied AI, data infrastructure and the interfaces that make them usable.",
              "Une sélection de projets en IA appliquée, infrastructure data et interfaces pour les rendre utilisables.",
            )}
          </p>
          <a href="#archive" className="text-link">
            {t("Explore all 14 repositories", "Explorer les 14 dépôts")}
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
      <div className="featured-grid">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <article className="project-card" key={project.id}>
              <button
                className="project-visual-button"
                onClick={() => onSelect(project)}
                aria-label={t(
                  `Explore ${project.name}`,
                  `Explorer ${project.name}`,
                )}
              >
                <ProjectVisual project={project} />
                <span className="project-open">
                  <ArrowUpRight size={22} />
                </span>
              </button>
              <div className="project-card-copy">
                <div className="project-card-meta">
                  <span className="mono">
                    {project.number} / {project.label[language]}
                  </span>
                  <a
                    href={`https://github.com/redaelfer/${project.id}`}
                    aria-label={`${project.name} GitHub`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={19} />
                  </a>
                </div>
                <h3>
                  <button onClick={() => onSelect(project)}>
                    {project.name}
                    <ArrowUpRight size={23} />
                  </button>
                </h3>
                <p>{project.description[language]}</p>
                <div className="tag-list">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}

export function ProjectArchive({
  onSelect,
}: {
  onSelect: (project: Project) => void;
}) {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [sort, setSort] = useState("curated");
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        event.key === "/" &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) &&
        !target.isContentEditable &&
        !document.querySelector('[role="dialog"]')
      ) {
        event.preventDefault();
        input.current?.focus();
        input.current?.scrollIntoView({ behavior: "instant", block: "center" });
      }
    };
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);
  const metadata = new Map(
    github.repositories.map((repo) => [repo.name, repo]),
  );
  const needle = query.toLocaleLowerCase().trim();
  const filtered = projects.filter(
    (project) =>
      (category === "all" || project.disciplines.includes(category)) &&
      [
        project.name,
        project.id,
        project.description.en,
        project.description.fr,
        ...project.stack,
      ]
        .join(" ")
        .toLocaleLowerCase()
        .includes(needle),
  );
  const sorted =
    sort === "name"
      ? [...filtered].sort((a, b) => a.name.localeCompare(b.name))
      : sort === "recent"
        ? [...filtered].sort((a, b) =>
            (metadata.get(b.id)?.updatedAt || "").localeCompare(
              metadata.get(a.id)?.updatedAt || "",
            ),
          )
        : filtered;
  return (
    <section
      className="section archive-section"
      id="archive"
      aria-labelledby="archive-title"
    >
      <div className="section-topline">
        <span className="eyebrow">
          <span className="index">03 /</span>
          {t("THE REPOSITORY INDEX", "L’INDEX DES DÉPÔTS")}
        </span>
        <a
          href="https://github.com/redaelfer"
          target="_blank"
          rel="noreferrer"
          className="text-link mono"
        >
          <Github size={15} />
          @redaelfer
          <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="section-heading compact-heading">
        <h2 id="archive-title">
          {t("Always building.", "Toujours construire.")}
        </h2>
        <p>
          {t(
            "The full collection. Finished projects, useful experiments and a few works in progress.",
            "Toute la collection. Projets aboutis, expérimentations et quelques travaux en cours.",
          )}
        </p>
      </div>
      <div className="archive-toolbar">
        <div className="search-field">
          <Search size={18} />
          <input
            ref={input}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t(
              "Find a project, technology, or idea…",
              "Rechercher un projet, une technologie…",
            )}
            aria-label={t("Search projects", "Rechercher des projets")}
            aria-keyshortcuts="/"
          />
          <kbd>/</kbd>
        </div>
        <label className="sort-field">
          <span className="sr-only">
            {t("Sort projects", "Trier les projets")}
          </span>
          <select
            aria-label={t("Sort projects", "Trier les projets")}
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="curated">
              {t("Curated order", "Ordre éditorial")}
            </option>
            <option value="recent">
              {t("Recently updated", "Mise à jour récente")}
            </option>
            <option value="name">{t("Name A–Z", "Nom A–Z")}</option>
          </select>
        </label>
      </div>
      <div
        className="filter-row"
        role="group"
        aria-label={t("Filter projects", "Filtrer les projets")}
      >
        {categories.map((item) => (
          <button
            className={`filter-button ${category === item.id ? "is-active" : ""}`}
            aria-pressed={category === item.id}
            onClick={() => setCategory(item.id)}
            key={item.id}
          >
            {item.label[language]}
            <span>
              {
                projects.filter(
                  (project) =>
                    item.id === "all" || project.disciplines.includes(item.id),
                ).length
              }
            </span>
          </button>
        ))}
      </div>
      <p className="archive-count mono" role="status">
        {t(
          `${sorted.length} of ${projects.length} repositories`,
          `${sorted.length} dépôts sur ${projects.length}`,
        )}
      </p>
      <div className="repository-list">
        {sorted.map((project) => (
          <article className="repository-row" key={project.id}>
            <span className={`repository-icon visual-${project.color}`}>
              <FolderGit2 size={21} strokeWidth={1.4} />
            </span>
            <div className="repository-main">
              <button
                className="repository-name"
                onClick={() => onSelect(project)}
              >
                {project.name}
                <ArrowUpRight size={17} />
              </button>
              <p>{project.description[language]}</p>
              <div className="repository-tags">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
            <span className="repository-type mono">
              {
                categories.find((item) => item.id === project.category)?.label[
                  language
                ]
              }
            </span>
            <a
              className="repository-source"
              href={`https://github.com/redaelfer/${project.id}`}
              target="_blank"
              rel="noreferrer"
              aria-label={t(
                `View ${project.name} source on GitHub`,
                `Voir le code de ${project.name} sur GitHub`,
              )}
            >
              <Github size={19} />
              <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </div>
      {sorted.length === 0 && (
        <div className="empty-state">
          <Search size={28} />
          <h3>{t("No projects found.", "Aucun projet trouvé.")}</h3>
          <p>
            {t(
              "Try Python, React, agents, or a different filter.",
              "Essayez Python, React, agents, ou un autre filtre.",
            )}
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            <X size={15} />
            {t("Clear filters", "Réinitialiser les filtres")}
          </Button>
        </div>
      )}
      <div className="archive-footnote mono">
        <span>
          {t(
            "Public GitHub snapshot · reviewed 04 Nov 2026",
            "Instantané GitHub public · revue du 04 nov. 2026",
          )}
        </span>
        <a
          href="https://github.com/redaelfer?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          {t("Latest on GitHub", "Dernières mises à jour sur GitHub")}
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
