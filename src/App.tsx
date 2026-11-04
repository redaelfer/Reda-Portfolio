import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { LanguageProvider, useLanguage } from "./lib/language";
import { HeroSystem, ArchitecturePlayground } from "./components/Architecture";
import {
  FeaturedProjects,
  ProjectArchive,
  ProjectDialog,
} from "./components/Projects";
import { About, CvDialog, Experience } from "./components/Career";
import { Button } from "./components/ui/button";
import type { Project } from "./data/projects";
import { asset } from "./lib/utils";

function Navigation({ onCv }: { onCv: () => void }) {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const links = [
    { id: "work", en: "Work", fr: "Projets" },
    { id: "playground", en: "Playground", fr: "Atelier" },
    { id: "experience", en: "Experience", fr: "Expérience" },
    { id: "about", en: "About", fr: "À propos" },
  ];
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main > section[id], main > div > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menuOpen]);
  return (
    <header className="site-header">
      <nav
        className="navigation"
        aria-label={t("Main navigation", "Navigation principale")}
      >
        <a
          className="brand"
          href="#top"
          aria-label={t(
            "Reda El Ferrasi, back to top",
            "Reda El Ferrasi, retour en haut",
          )}
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">
            re<span>.</span>
          </span>
          <span>
            Reda El Ferrasi
            <span className="brand-sub">AI · DATA · FULL STACK</span>
          </span>
        </a>
        <div className="desktop-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : ""}
              aria-current={active === link.id ? "location" : undefined}
            >
              {t(link.en, link.fr)}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <div
            className="language-switch"
            role="group"
            aria-label="Language / Langue"
          >
            <button
              lang="en"
              aria-pressed={language === "en"}
              className={language === "en" ? "is-active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <span>/</span>
            <button
              lang="fr"
              aria-pressed={language === "fr"}
              className={language === "fr" ? "is-active" : ""}
              onClick={() => setLanguage("fr")}
            >
              FR
            </button>
          </div>
          <Button
            size="small"
            variant="outline"
            onClick={onCv}
            className="nav-cv"
          >
            {t("My CV", "Mon CV")}
            <ArrowDownToLine size={14} />
          </Button>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={t(
              "Toggle navigation",
              "Ouvrir ou fermer la navigation",
            )}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div id="mobile-navigation" className="mobile-navigation">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {t(link.en, link.fr)}
                <ArrowUpRight size={18} />
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onCv();
              }}
            >
              {t("Download my CV", "Télécharger mon CV")}
              <ArrowDownToLine size={18} />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

function Hero({ onCv }: { onCv: () => void }) {
  const { t } = useLanguage();
  return (
    <section className="section hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-eyebrow">
          <span className="status-dot" />
          <span className="mono">
            {t(
              "AI & DATA ENGINEER · ENSIAS GRADUATE",
              "INGÉNIEUR IA & DATA · DIPLÔMÉ ENSIAS",
            )}
          </span>
        </div>
        <h1 id="hero-title">
          {t("From data to", "Des données à")}
          <br />
          <span className="serif-accent">
            {t("useful", "une intelligence")}
            <br className="en-title-break" /> {t("intelligence.", "utile.")}
          </span>
        </h1>
        <p className="hero-description">
          {t(
            "I’m Reda El Ferrasi. I build AI agents, machine learning systems and data pipelines — then connect them to applications people can use.",
            "Je suis Reda El Ferrasi. Je construis des agents IA, des systèmes de machine learning et des pipelines data, puis je les relie à des applications utiles.",
          )}
        </p>
        <div className="hero-actions">
          <Button asChild>
            <a href="#work">
              {t("Explore my work", "Explorer mes projets")}
              <ArrowDown size={17} />
            </a>
          </Button>
          <Button variant="ghost" onClick={onCv}>
            {t("Get my CV", "Voir mes CV")}
            <ArrowUpRight size={17} />
          </Button>
        </div>
        <div className="hero-socials">
          <a
            href="https://github.com/redaelfer"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            GitHub
            <ArrowUpRight size={12} />
          </a>
          <a
            href="https://www.linkedin.com/in/reda-elferrasi/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} />
            LinkedIn
            <ArrowUpRight size={12} />
          </a>
          <span className="hero-location">
            {t("Based in Morocco", "Basé au Maroc")}
          </span>
        </div>
      </div>
      <HeroSystem />
      <div className="hero-bottom">
        <span className="mono">
          {t(
            "CURIOUS MIND. PRACTICAL ENGINEERING.",
            "ESPRIT CURIEUX. INGÉNIERIE CONCRÈTE.",
          )}
        </span>
        <a href="#work" className="mono">
          {t("SCROLL TO DISCOVER", "DÉCOUVRIR LES PROJETS")}
          <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}

function ProofStrip() {
  const { t } = useLanguage();
  return (
    <div className="proof-strip">
      <div>
        <span className="proof-label mono">
          {t("BUILT ON EXPERIENCE AT", "UNE EXPÉRIENCE CONSTRUITE CHEZ")}
        </span>
        <span>
          Matious<span className="proof-company-light"> Digital</span>
        </span>
        <span className="oncf-wordmark">ONCF</span>
        <span>
          S4U<span className="company-dot">.</span>
        </span>
        <span className="proof-divider" />
        <span className="proof-education">
          ENSIAS
          <small>
            {t("Data Science & IoT · 2026", "Data Science & IoT · 2026")}
          </small>
        </span>
      </div>
    </div>
  );
}

function Contact({ onCv }: { onCv: () => void }) {
  const { t } = useLanguage();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  useEffect(() => {
    if (copyState === "idle") return;
    const timer = window.setTimeout(() => setCopyState("idle"), 4000);
    return () => window.clearTimeout(timer);
  }, [copyState]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("redaelferrasi@gmail.com");
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="section contact-inner">
        <div className="section-topline">
          <span className="eyebrow">
            <span className="index">06 /</span>
            {t("WHAT’S NEXT", "ET ENSUITE")}
          </span>
          <span className="contact-status mono">
            <span className="status-dot" />
            {t("LET’S START A CONVERSATION", "ÉCHANGEONS ENSEMBLE")}
          </span>
        </div>
        <div className="contact-main">
          <div>
            <h2 id="contact-title">
              {t("Something good", "De belles idées")}
              <br />
              <span className="serif-accent">
                {t("starts with hello.", "commencent par bonjour.")}
              </span>
            </h2>
            <p>
              {t(
                "Have an AI, ML or data opportunity? A project that connects a few disciplines? I’d like to hear about it.",
                "Une opportunité en IA, ML ou data ? Un projet à la croisée des disciplines ? Parlons-en.",
              )}
            </p>
            <a className="contact-email" href="mailto:redaelferrasi@gmail.com">
              redaelferrasi@gmail.com
              <ArrowUpRight size={25} />
            </a>
            <button className="copy-email" onClick={copyEmail}>
              {copyState === "copied" ? (
                <Check size={14} />
              ) : (
                <Copy size={14} />
              )}
              {copyState === "copied"
                ? t("Email copied", "Adresse copiée")
                : t("Copy email address", "Copier l’adresse e-mail")}
            </button>
            <span role="status" className="copy-status">
              {copyState === "failed"
                ? t(
                    "Copy unavailable. Select the email above or open your mail app.",
                    "Copie indisponible. Sélectionnez l’adresse ci-dessus ou ouvrez votre messagerie.",
                  )
                : copyState === "copied"
                  ? t("Copied to clipboard.", "Copié dans le presse-papiers.")
                  : ""}
            </span>
          </div>
          <div className="contact-links">
            <a href="mailto:redaelferrasi@gmail.com">
              <Mail size={19} />
              <span>{t("Say hello", "Dire bonjour")}</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/reda-elferrasi/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={19} />
              <span>LinkedIn</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href="https://github.com/redaelfer"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} />
              <span>GitHub</span>
              <ArrowUpRight size={18} />
            </a>
            <button onClick={onCv}>
              <ArrowDownToLine size={19} />
              <span>{t("Download a CV", "Télécharger un CV")}</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div>
        <a href="#top" className="footer-brand">
          re<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Reda El Ferrasi</p>
        <span className="mono">
          {t("BUILT WITH INTENTION. AND REACT.", "CONÇU AVEC SOIN. ET REACT.")}
        </span>
        <a href="#top" className="back-top">
          {t("Back to top", "Retour en haut")}
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}

function Portfolio() {
  const [cvOpen, setCvOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();
  return (
    <>
      <a href="#main" className="skip-link">
        {t("Skip to content", "Aller au contenu")}
      </a>
      <Navigation onCv={() => setCvOpen(true)} />
      <main id="main">
        <Hero onCv={() => setCvOpen(true)} />
        <ProofStrip />
        <FeaturedProjects onSelect={setSelectedProject} />
        <ArchitecturePlayground />
        <ProjectArchive onSelect={setSelectedProject} />
        <Experience />
        <About onSelect={setSelectedProject} />
        <Contact onCv={() => setCvOpen(true)} />
      </main>
      <Footer />
      <CvDialog open={cvOpen} onOpenChange={setCvOpen} />
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <a
        href={asset("cv/cv-redaelferrasi-AI-ENG.pdf")}
        className="sr-only"
        tabIndex={-1}
      >
        {t("English AI CV", "CV IA anglais")}
      </a>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}
