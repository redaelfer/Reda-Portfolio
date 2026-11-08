export type Category = "all" | "ai" | "data" | "web" | "experiments";
export type Localized = { en: string; fr: string };
export type Project = {
  id: string;
  name: string;
  category: Exclude<Category, "all">;
  disciplines: Category[];
  label: Localized;
  description: Localized;
  stack: string[];
  featured?: boolean;
  number?: string;
  color: string;
  problem: Localized;
  implementation: Localized[];
  evidence: Localized;
  source: string;
  media: { src: string | null; alt: Localized; video?: string | null };
  demoUrl: string | null;
};
const l = (en: string, fr: string): Localized => ({ en, fr });
const media = (name: string) => ({
  src: null,
  alt: l(`${name} application screenshot`, `Capture de l’application ${name}`),
});
export const categories: { id: Category; label: Localized }[] = [
  { id: "all", label: l("All work", "Tous les projets") },
  { id: "ai", label: l("AI & ML", "IA & ML") },
  { id: "data", label: l("Data engineering", "Data engineering") },
  { id: "web", label: l("Full stack", "Full stack") },
  { id: "experiments", label: l("Experiments", "Expérimentations") },
];

export const projects: Project[] = [
  {
    id: "RetinaScan",
    name: "RetinaScan",
    category: "ai",
    disciplines: ["ai", "data", "web"],
    featured: true,
    number: "01",
    color: "lavender",
    label: l("Applied computer vision", "Vision par ordinateur appliquée"),
    description: l(
      "A retinal-image classification project connecting a TensorFlow model to a secure full-stack application.",
      "Un projet de classification d’images rétiniennes reliant un modèle TensorFlow à une application full stack sécurisée.",
    ),
    stack: ["TensorFlow", "MobileNetV2", "Flask", "React", "Spring Boot"],
    problem: l(
      "Explore the path from retinal image preparation and model training to an application for reviewing results.",
      "Explorer le parcours : préparation des images rétiniennes, entraînement du modèle et consultation des résultats.",
    ),
    implementation: [
      l(
        "Transfer learning with a frozen MobileNetV2 base, image augmentation and dropout of 0.5.",
        "Transfer learning avec une base MobileNetV2 gelée, augmentation d’images et dropout de 0,5.",
      ),
      l(
        "Flask exposes predictions to a Spring Boot API with JWT authentication.",
        "Flask expose les prédictions à une API Spring Boot avec authentification JWT.",
      ),
      l(
        "React interface for image upload, analysis history and statistics.",
        "Interface React pour l’envoi d’images, l’historique et les statistiques.",
      ),
    ],
    evidence: l(
      "Approximately 74% validation accuracy over 10 epochs, reported in my ML CV. Academic project; no clinical validation is claimed.",
      "Environ 74 % d’exactitude en validation sur 10 époques, selon mon CV ML. Projet académique ; aucune validation clinique revendiquée.",
    ),
    source: "https://github.com/redaelfer/RetinaScan#readme",
    media: media("RetinaScan"),
    demoUrl: null,
  },
  {
    id: "TalentAI",
    name: "TalentAI",
    category: "ai",
    disciplines: ["ai", "web"],
    featured: true,
    number: "02",
    color: "sage",
    label: l("AI-augmented recruitment", "Recrutement augmenté par l’IA"),
    description: l(
      "Connecting candidates and opportunities with LLM-powered skill extraction, matching and interview preparation.",
      "Relier candidats et opportunités grâce à l’extraction de compétences, au matching et aux questions d’entretien par LLM.",
    ),
    stack: ["React", "Spring Boot", "Spring AI", "Ollama", "PostgreSQL"],
    problem: l(
      "Bring candidate applications, recruiter workflows and AI-assisted evaluation into one platform.",
      "Réunir les candidatures, les processus RH et l’évaluation assistée par IA dans une plateforme.",
    ),
    implementation: [
      l(
        "Candidate and recruiter dashboards with a recruitment Kanban board.",
        "Tableaux de bord candidat et recruteur avec Kanban de recrutement.",
      ),
      l(
        "Spring AI and Ollama prompts for skill extraction, compatibility assessment and interview questions.",
        "Prompts Spring AI et Ollama pour l’extraction de compétences, la compatibilité et les questions d’entretien.",
      ),
      l(
        "PostgreSQL persistence, Docker, Jenkins, Kubernetes, Prometheus and Grafana configuration.",
        "Persistance PostgreSQL et configuration Docker, Jenkins, Kubernetes, Prometheus et Grafana.",
      ),
    ],
    evidence: l(
      "Two JUnit/Mockito tests exercise scoring and extraction with mocked LLM responses, as documented in my latest AI CV.",
      "Deux tests JUnit/Mockito vérifient le scoring et l’extraction avec des réponses LLM simulées, selon mon dernier CV IA.",
    ),
    source: "https://github.com/redaelfer/TalentAI#readme",
    media: media("TalentAI"),
    demoUrl: null,
  },
  {
    id: "JobOS",
    name: "JobOS",
    category: "web",
    disciplines: ["ai", "web"],
    featured: true,
    number: "03",
    color: "pink",
    label: l(
      "A local workspace for the job search",
      "Un espace local pour la recherche d’emploi",
    ),
    description: l(
      "Job discovery, application tracking and AI-assisted CV tailoring in a local-first Node.js workspace.",
      "Recherche d’offres, suivi des candidatures et adaptation de CV assistée par IA dans un espace Node.js local.",
    ),
    stack: ["Node.js", "JavaScript", "SQLite", "Ollama", "LaTeX"],
    problem: l(
      "Keep job offers, application stages and tailored drafts connected in one local workflow.",
      "Relier offres, étapes de candidature et brouillons personnalisés dans un processus local unique.",
    ),
    implementation: [
      l(
        "Node.js API and browser interface with SQLite persistence.",
        "API Node.js et interface web avec persistance SQLite.",
      ),
      l(
        "Job capture extension and source-linked search with duplicate handling.",
        "Extension de capture et recherche avec liens sources et déduplication.",
      ),
      l(
        "AI ranking and controlled LaTeX CV text replacements; outreach remains a draft.",
        "Classement IA et remplacements de texte contrôlés dans un CV LaTeX ; les messages restent des brouillons.",
      ),
    ],
    evidence: l(
      "README documents isolated tests, model providers and local setup. No live application is embedded here.",
      "Le README documente les tests isolés, les fournisseurs de modèles et l’installation locale. Aucune application en ligne intégrée ici.",
    ),
    source: "https://github.com/redaelfer/JobOS#readme",
    media: media("JobOS"),
    demoUrl: null,
  },
  {
    id: "NosqlAPT",
    name: "APT Detection",
    category: "ai",
    disciplines: ["ai", "data"],
    featured: true,
    number: "04",
    color: "peach",
    label: l(
      "Machine learning × cybersecurity",
      "Machine learning × cybersécurité",
    ),
    description: l(
      "A hybrid autoencoder and XGBoost pipeline for identifying attack stages in network and system logs.",
      "Un pipeline hybride autoencodeur et XGBoost pour identifier les phases d’attaque dans les logs réseau et système.",
    ),
    stack: ["Python", "XGBoost", "TensorFlow", "scikit-learn", "Logstash"],
    problem: l(
      "Turn noisy security logs into useful features for classifying Advanced Persistent Threat activity.",
      "Transformer les logs de sécurité en variables utiles pour classifier les activités APT.",
    ),
    implementation: [
      l(
        "DAPT 2020 preparation: missing values, encoding and normalization.",
        "Préparation de DAPT 2020 : valeurs manquantes, encodage et normalisation.",
      ),
      l(
        "Autoencoder representations combined with XGBoost and early stopping.",
        "Représentations d’autoencodeur combinées à XGBoost avec early stopping.",
      ),
      l(
        "Serialized preprocessing and a Docker Compose / Logstash ingestion setup.",
        "Prétraitement sérialisé et ingestion Docker Compose / Logstash.",
      ),
    ],
    evidence: l(
      "Internal validation AUC of 0.984, reported in my ML CV. A dataset validation result, not production security performance.",
      "AUC de 0,984 en validation interne, selon mon CV ML. Résultat sur jeu de données, sans revendication de performance en production.",
    ),
    source: "https://github.com/redaelfer/NosqlAPT#readme",
    media: media("APT Detection"),
    demoUrl: null,
  },
  {
    id: "BigData",
    name: "Streaming Pipeline",
    category: "data",
    disciplines: ["data"],
    featured: true,
    number: "05",
    color: "blue",
    label: l(
      "From events to distributed storage",
      "Des événements au stockage distribué",
    ),
    description: l(
      "A containerized pipeline carrying Python-generated events through Kafka and Spark into HDFS.",
      "Un pipeline conteneurisé acheminant les événements Python via Kafka et Spark vers HDFS.",
    ),
    stack: ["Python", "Kafka", "PySpark", "HDFS", "Docker"],
    problem: l(
      "Connect event generation, ingestion, stream processing and distributed storage.",
      "Relier génération d’événements, ingestion, traitement en flux et stockage distribué.",
    ),
    implementation: [
      l(
        "A Python producer publishes generated messages to a Kafka topic.",
        "Un producteur Python publie les messages générés vers un topic Kafka.",
      ),
      l(
        "Spark Structured Streaming processes the stream and writes to HDFS.",
        "Spark Structured Streaming traite le flux et écrit dans HDFS.",
      ),
      l(
        "Docker Compose coordinates Kafka, Zookeeper, Spark, Hadoop and the producer.",
        "Docker Compose orchestre Kafka, Zookeeper, Spark, Hadoop et le producteur.",
      ),
    ],
    evidence: l(
      "Repository includes the producer, Spark code and container orchestration. No throughput benchmark is claimed.",
      "Le dépôt contient le producteur, le code Spark et l’orchestration. Aucun benchmark de débit revendiqué.",
    ),
    source: "https://github.com/redaelfer/BigData#readme",
    media: media("Streaming Pipeline"),
    demoUrl: null,
  },
  {
    id: "AgentFleet",
    name: "AgentFleet",
    category: "ai",
    disciplines: ["ai", "web"],
    featured: true,
    number: "06",
    color: "sand",
    label: l("Agent-monitoring prototype", "Prototype de supervision d’agents"),
    description: l(
      "A Docker-backed monitoring prototype that lists containers and displays their names, IDs and current states in a Next.js dashboard.",
      "Un prototype de supervision connecté à Docker qui affiche les noms, identifiants et états des conteneurs dans un tableau de bord Next.js.",
    ),
    stack: ["Next.js", "TypeScript", "shadcn/ui", "Dockerode", "Docker"],
    problem: l(
      "Explore how a dashboard can monitor Docker containers used for AI developer agents.",
      "Explorer la supervision de conteneurs Docker destinés aux agents IA de développement depuis un tableau de bord.",
    ),
    implementation: [
      l(
        "A Next.js GET endpoint uses Dockerode to list existing containers through the Docker socket.",
        "Un endpoint GET Next.js utilise Dockerode pour lister les conteneurs existants via le socket Docker.",
      ),
      l(
        "The API returns each container’s name, shortened ID and state.",
        "L’API renvoie le nom, l’identifiant abrégé et l’état de chaque conteneur.",
      ),
      l(
        "A TypeScript dashboard with shadcn/ui refreshes the container list every three seconds.",
        "Un tableau de bord TypeScript avec shadcn/ui actualise la liste des conteneurs toutes les trois secondes.",
      ),
    ],
    evidence: l(
      "The public source implements container listing and status polling. Agent provisioning remains an unfinished part of this personal prototype.",
      "Le code public implémente la liste des conteneurs et l’actualisation de leur état. Le provisionnement d’agents reste une fonctionnalité inachevée de ce prototype personnel.",
    ),
    source: "https://github.com/redaelfer/AgentFleet#readme",
    media: media("AgentFleet"),
    demoUrl: null,
  },
  {
    id: "AI-Agents",
    name: "AI-Agents",
    category: "ai",
    disciplines: ["ai"],
    color: "sage",
    label: l("Local AI assistant", "Assistant IA local"),
    description: l(
      "An Ollama / Llama 3.2 assistant with Python tool calls, document summaries and CPU/RAM monitoring.",
      "Un assistant Ollama / Llama 3.2 avec outils Python, résumés de documents et suivi CPU/RAM.",
    ),
    stack: ["Python", "Streamlit", "Ollama", "psutil"],
    problem: l(
      "Connect a local language model to useful system and document tools.",
      "Relier un modèle de langage local à des outils système et documentaires.",
    ),
    implementation: [
      l(
        "Streamlit chat with tool execution and result synthesis.",
        "Chat Streamlit avec exécution d’outils et synthèse.",
      ),
      l(
        "Document parsing, reminders and CPU/RAM monitoring with psutil.",
        "Analyse de documents, rappels et suivi CPU/RAM avec psutil.",
      ),
    ],
    evidence: l(
      "My AI CV documents a 1,500-character excerpt limit per summarized document. Local setup is in the repository.",
      "Mon CV IA mentionne une limite de 1 500 caractères par extrait de document résumé. Installation locale décrite dans le dépôt.",
    ),
    source: "https://github.com/redaelfer/AI-Agents#readme",
    media: media("AI-Agents"),
    demoUrl: null,
  },
  {
    id: "ScootRent-JEE",
    name: "ScootRent",
    category: "web",
    disciplines: ["web"],
    color: "sand",
    label: l("Scooter rental platform", "Plateforme de location de scooters"),
    description: l(
      "A Java EE rental application with client/admin roles, reservations and PDF billing.",
      "Une application Java EE avec rôles client/admin, réservations et facturation PDF.",
    ),
    stack: ["Java EE", "Servlets", "JSP", "MySQL", "iText"],
    problem: l(
      "Organize electric scooter bookings and rental administration.",
      "Organiser les réservations et la gestion de locations de scooters électriques.",
    ),
    implementation: [
      l(
        "Repository description lists role-based dashboards, reservation tracking and PDF invoices.",
        "La description du dépôt présente les tableaux de bord, le suivi des réservations et les factures PDF.",
      ),
    ],
    evidence: l(
      "Summary based on the public repository description; no README available during review.",
      "Résumé fondé sur la description publique du dépôt ; aucun README disponible lors de la revue.",
    ),
    source: "https://github.com/redaelfer/ScootRent-JEE",
    media: media("ScootRent"),
    demoUrl: null,
  },
  {
    id: "pfa-php",
    name: "Academic Connect",
    category: "web",
    disciplines: ["web"],
    color: "lavender",
    label: l(
      "Student–professor collaboration",
      "Collaboration étudiants–professeurs",
    ),
    description: l(
      "A PHP community app with role-based profiles, posts, messaging and friend requests.",
      "Une communauté PHP avec profils par rôle, publications, messagerie et demandes d’amitié.",
    ),
    stack: ["PHP", "MySQL", "CSS"],
    problem: l(
      "Support communication and content sharing in an academic community.",
      "Faciliter la communication et le partage dans une communauté académique.",
    ),
    implementation: [
      l(
        "Public metadata describes student/professor profiles, messaging and posts.",
        "Les métadonnées décrivent des profils étudiant/professeur, la messagerie et les publications.",
      ),
    ],
    evidence: l(
      "Summary based on repository metadata; no README available.",
      "Résumé fondé sur les métadonnées du dépôt ; aucun README disponible.",
    ),
    source: "https://github.com/redaelfer/pfa-php",
    media: media("Academic Connect"),
    demoUrl: null,
  },
  {
    id: "fb-reels-automator",
    name: "Reels Automator",
    category: "experiments",
    disciplines: ["web", "experiments"],
    color: "blue",
    label: l(
      "Chrome extension experiment",
      "Expérimentation d’extension Chrome",
    ),
    description: l(
      "A Manifest V3 extension exploring interaction automation and structured activity data collection.",
      "Une extension Manifest V3 explorant l’automatisation d’interactions et la collecte de données d’activité.",
    ),
    stack: ["JavaScript", "Chrome MV3"],
    problem: l(
      "Explore browser extension automation and structured activity records.",
      "Explorer l’automatisation par extension et les données d’activité.",
    ),
    implementation: [
      l(
        "Public metadata describes Reels interaction automation and activity data collection.",
        "Les métadonnées décrivent l’automatisation d’interactions Reels et la collecte d’activité.",
      ),
    ],
    evidence: l(
      "Repository description only; no README or deployed demo verified.",
      "Description du dépôt uniquement ; aucun README ni démo en ligne vérifiés.",
    ),
    source: "https://github.com/redaelfer/fb-reels-automator",
    media: media("Reels Automator"),
    demoUrl: null,
  },
  {
    id: "phalanx-ai-test",
    name: "Phalanx prototype",
    category: "experiments",
    disciplines: ["experiments", "web"],
    color: "sage",
    label: l("Flask dashboard prototype", "Prototype de tableau de bord Flask"),
    description: l(
      "A small Flask dashboard prototype with a theme toggle, pytest tests and CI configuration.",
      "Un petit prototype Flask avec changement de thème, tests pytest et configuration CI.",
    ),
    stack: ["Python", "Flask", "pytest"],
    problem: l(
      "Prototype a small web dashboard and its test workflow.",
      "Prototyper un tableau de bord web et son processus de test.",
    ),
    implementation: [
      l(
        "Single-route Flask dashboard, theme script, pytest and CI files.",
        "Tableau de bord Flask à route unique, script de thème, pytest et fichiers CI.",
      ),
    ],
    evidence: l(
      "Prototype based on reviewed source. No deployed service or production capability verified.",
      "Prototype décrit d’après le code examiné. Aucun service déployé ni capacité de production vérifiés.",
    ),
    source: "https://github.com/redaelfer/phalanx-ai-test",
    media: media("Phalanx prototype"),
    demoUrl: null,
  },
  {
    id: "greenpip",
    name: "greenpip",
    category: "experiments",
    disciplines: ["experiments", "data"],
    color: "peach",
    label: l(
      "Python testing & CI experiment",
      "Expérimentation Python, tests et CI",
    ),
    description: l(
      "A calculator and tests exploring CI measurement reports. No efficiency result is claimed.",
      "Une calculatrice et des tests explorant les rapports de mesure CI. Aucun gain d’efficacité revendiqué.",
    ),
    stack: ["Python", "pytest", "GitHub Actions"],
    problem: l(
      "Experiment with automated testing and CI measurement outputs.",
      "Expérimenter les tests automatisés et les mesures CI.",
    ),
    implementation: [
      l(
        "Calculator, tests, duration plot and comparative report scaffolding.",
        "Calculatrice, tests, graphique de durée et structure de rapport comparatif.",
      ),
    ],
    evidence: l(
      "The reviewed comparative report contains zero observed runs; performance improvements are unverified.",
      "Le rapport examiné contient zéro exécution observée ; les gains ne sont pas vérifiés.",
    ),
    source: "https://github.com/redaelfer/greenpip",
    media: media("greenpip"),
    demoUrl: null,
  },
  {
    id: "workspacetest",
    name: "Workspace notes",
    category: "experiments",
    disciplines: ["experiments"],
    color: "sand",
    label: l("Documentation workspace", "Espace de documentation"),
    description: l(
      "Planning documents and a login API placeholder. Documentation rather than a finished application.",
      "Documents de planification et ébauche d’API de connexion. De la documentation plutôt qu’une application aboutie.",
    ),
    stack: ["Documentation"],
    problem: l(
      "Capture early workspace and API planning notes.",
      "Conserver les premières notes de planification d’espace de travail et d’API.",
    ),
    implementation: [
      l(
        "Workspace guide and login API planning documents.",
        "Guide d’espace de travail et documents de planification d’API de connexion.",
      ),
    ],
    evidence: l(
      "Documentation placeholders; no implemented authentication backend verified.",
      "Ébauches documentaires ; aucun backend d’authentification implémenté vérifié.",
    ),
    source: "https://github.com/redaelfer/workspacetest",
    media: media("Workspace notes"),
    demoUrl: null,
  },
  {
    id: "portfolio",
    name: "This portfolio",
    category: "web",
    disciplines: ["web"],
    color: "sage",
    label: l("Design × engineering", "Design × ingénierie"),
    description: l(
      "The portfolio you are exploring: React, TypeScript, accessible interactions and English/French support.",
      "Le portfolio que vous explorez : React, TypeScript, interactions accessibles et anglais/français.",
    ),
    stack: ["React", "TypeScript", "Vite", "Radix UI"],
    problem: l(
      "Make technical work understandable and easy to explore.",
      "Rendre les projets techniques compréhensibles et faciles à explorer.",
    ),
    implementation: [
      l(
        "Project search, architecture explorer, case studies and bilingual CV library.",
        "Recherche de projets, explorateur d’architecture, études de cas et bibliothèque de CV bilingue.",
      ),
    ],
    evidence: l(
      "The repository contains the React/TypeScript source, interaction tests and editable CV sources. The portfolio is deployed on Vercel.",
      "Le dépôt contient le code React/TypeScript, les tests d’interaction et les sources modifiables des CV. Le portfolio est déployé sur Vercel.",
    ),
    source: "https://github.com/redaelfer/portfolio",
    media: media("Portfolio"),
    demoUrl: null,
  },
];

export const cvTracks = [
  {
    id: "AI",
    label: l("AI engineering", "Ingénierie IA"),
    subtitle: l(
      "Agents · LLMs · Tool calling",
      "Agents · LLM · Appels d’outils",
    ),
  },
  {
    id: "ML",
    label: l("Machine learning", "Machine learning"),
    subtitle: l(
      "Computer vision · Model evaluation",
      "Vision par ordinateur · Évaluation",
    ),
  },
  {
    id: "DATA-SCIENCE",
    label: l("Data science", "Data science"),
    subtitle: l(
      "Data preparation · Pipelines · Analysis",
      "Préparation · Pipelines · Analyse",
    ),
  },
  {
    id: "FULL-STACK",
    label: l("Full-stack engineering", "Ingénierie full stack"),
    subtitle: l("React · Java · Node.js", "React · Java · Node.js"),
  },
];
