/**
 * Single source of truth for the portfolio content.
 * Edit names, links and copy here; the components only render this data.
 */

export const profile = {
  firstName: "Alex",
  handle: "Axaled",
  role: "Développeur & designer produit",
  tagline: "Automatisations IA pour les PME, produits web et interfaces sur mesure.",
  location: "France · à distance",
  availability: "Disponible pour de nouveaux projets",
  email: "alexcrqtt@gmail.com",
  github: "https://github.com/Axaled",
  linkedin: "", // ajoutez votre URL LinkedIn pour afficher le lien
}

export const nav = [
  { label: "Automatisations IA", href: "#automatisations", index: "01" },
  { label: "Web & design", href: "#realisations", index: "02" },
  { label: "Méthode", href: "#methode", index: "03" },
  { label: "À propos", href: "#a-propos", index: "04" },
]

export type Automation = {
  id: string
  title: string
  description: string
  proof: string
  usedIn: string
}

export const automations: Automation[] = [
  {
    id: "documents",
    usedIn: "Verrou",
    title: "Lecture de documents",
    description:
      "Factures, bulletins de paie, fichiers comptables, PDF scannés ou Excel : l'IA extrait les données, les structure et les vérifie avant qu'elles n'entrent dans vos outils.",
    proof: "lecture du FEC et de six mises en page de bulletins de paie (Silae, PayFit, livres de paie), sans saisie manuelle.",
  },
  {
    id: "agents",
    usedIn: "Verrou",
    title: "Agents spécialisés en chaîne",
    description:
      "Plusieurs agents qui se passent le relais : l'un analyse, l'autre cherche des sources, un troisième rédige, un dernier relit et contrôle.",
    proof: "cinq agents rédigent un dossier technique sourcé sur OpenAlex et arXiv, puis le relisent.",
  },
  {
    id: "assistant",
    usedIn: "Showroom Mercedes, Bienassis",
    title: "Assistants conversationnels",
    description:
      "Un assistant qui connaît vos produits, répond à vos clients et déclenche des actions dans votre interface.",
    proof: "assistant qui pilote la scène 3D du showroom, chatbot d'accueil pour un client.",
  },
  {
    id: "saisie",
    usedIn: "Formly",
    title: "Saisie automatique",
    description:
      "Une extension navigateur qui pré-remplit les formulaires de vos portails métier à partir d'une fiche client unique.",
    proof: "remplissage des formulaires de tarification des portails assureurs en un clic.",
  },
  {
    id: "prospection",
    usedIn: "Agents LinkedIn",
    title: "Prospection & CRM",
    description:
      "Qualification de leads, relances, enrichissement de fiches et synchronisation avec votre CRM, sans copier-coller.",
    proof: "veille et prise de contact automatisées sur LinkedIn.",
  },
  {
    id: "controle",
    usedIn: "Verrou",
    title: "Contrôles de cohérence",
    description:
      "Des règles métier qui croisent vos données et remontent les incohérences avant qu'elles ne coûtent cher.",
    proof: "onze règles croisent personnes, périodes et montants avant tout dépôt fiscal.",
  },
  {
    id: "infra",
    usedIn: "Verrou, infrastructure Ailance",
    title: "Hébergement & déploiement",
    description:
      "Docker, serveur dédié, sauvegardes, CI : vos automatisations tournent chez vous ou sur un VPS en Europe.",
    proof: "déploiements conteneurisés derrière Caddy, migrations au démarrage, CI GitHub Actions.",
  },
]

export type Project = {
  id: "verrou" | "showroom" | "formly"
  name: string
  kicker: string
  summary: string
  problem: string
  solution: string
  facts: string[]
  stack: string[]
  links: { label: string; href: string }[]
  year: string
}

export const projects: Project[] = [
  {
    id: "verrou",
    name: "Verrou",
    kicker: "SaaS fiscal · IA documentaire",
    summary:
      "Le crédit d'impôt recherche (CIR/CII) sans solliciter les équipes techniques des PME.",
    problem:
      "Monter un dossier CIR mobilise des ingénieurs pendant des semaines et coûte 15 à 30 % du crédit en honoraires de cabinet.",
    solution:
      "Import du FEC et des bulletins de paie, chiffrage automatique du formulaire 2069-A, questions ciblées aux ingénieurs, dossier technique rédigé par des agents IA et contrôlé par 11 règles de cohérence.",
    facts: [
      "Zéro heure de documentation demandée aux ingénieurs",
      "Six mises en page de bulletins reconnues, 139 documents de test",
      "Onze règles de cohérence avant le dépôt",
      "CERFA 2069-A-SD rempli et mémoire technique imprimable",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Drizzle", "Better Auth", "Claude API", "Docker"],
    links: [],
    year: "2026",
  },
  {
    id: "showroom",
    name: "Mercedes 3D Showroom",
    kicker: "Expérience 3D · Assistant IA",
    summary:
      "Un showroom virtuel où l'on configure une EQS ou une EQE en temps réel, guidé par un assistant.",
    problem:
      "Présenter un véhicule premium en ligne sans la sensation d'un showroom physique.",
    solution:
      "Scène 3D en React Three Fiber avec sol en marbre réfléchissant et éclairage cinématique, changement de couleur en direct, vues extérieure et intérieure, et une interface assistant en verre dépoli qui pilote la scène.",
    facts: [
      "Deux modèles, EQS et EQE, chargés en GLTF",
      "Teinte de carrosserie changée en direct sur le maillage",
      "Vue extérieure orbitale et vue intérieure fixe",
      "Assistant contextuel qui commente et pilote la scène",
    ],
    stack: ["React", "Vite", "Three.js", "React Three Fiber", "Drei", "Zustand"],
    links: [{ label: "Code source", href: "https://github.com/Axaled/Car-showroom" }],
    year: "2026",
  },
  {
    id: "formly",
    name: "Formly",
    kicker: "Extension Chrome · Plateforme courtiers",
    summary:
      "Pré-remplir les formulaires de tarification des portails assureurs en un clic.",
    problem:
      "Les courtiers ressaisissent les mêmes informations client sur chaque portail assureur, plusieurs fois par jour.",
    solution:
      "Une extension Chrome qui lit une fiche client unique et remplit les formulaires des portails, un extranet pour les cabinets et un intranet d'administration.",
    facts: [
      "Une fiche client, tous les portails assureurs",
      "Publiée sur le Chrome Web Store",
      "Extranet cabinets et intranet d'administration",
    ],
    stack: ["Next.js", "TypeScript", "Chrome Extension", "Tailwind", "shadcn/ui"],
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/formly/femckmbjhjllgiddklaahihehajaopll?hl=fr",
      },
    ],
    year: "2025",
  },
]

export const process = [
  {
    step: "01",
    title: "Audit",
    duration: "Une demi-journée",
    description:
      "On cartographie ensemble les tâches répétitives, les outils en place et ce qui vaut vraiment la peine d'être automatisé.",
  },
  {
    step: "02",
    title: "Prototype",
    duration: "Quelques jours",
    description:
      "Un premier flux qui tourne sur vos vraies données. On mesure, on ajuste, on décide en connaissance de cause.",
  },
  {
    step: "03",
    title: "Mise en production",
    duration: "Intégrée à vos outils",
    description:
      "Branché à votre CRM, vos e-mails, vos fichiers. Hébergé chez vous ou sur un serveur en Europe, avec journal et alertes.",
  },
  {
    step: "04",
    title: "Suivi",
    duration: "En continu",
    description:
      "Tableau de bord, corrections, nouvelles idées. Une automatisation qui n'est pas suivie finit par être abandonnée.",
  },
]

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Three.js",
  "PostgreSQL",
  "Drizzle",
  "Docker",
  "Playwright",
  "Claude API",
  "Python",
  "Vite",
  "Extensions Chrome",
  "Zustand",
  "Vitest",
]

export const about = {
  paragraphs: [
    "Je conçois et je développe des produits de bout en bout : la recherche, le design de l'interface, le code, l'hébergement. Pas de passage de relais entre une agence de design et un prestataire technique.",
    "Depuis deux ans, je me concentre sur ce que l'IA change concrètement pour une PME : lire des documents, répondre à des clients, remplir des formulaires, préparer des dossiers. Des tâches ennuyeuses, bien faites, sans surveillance permanente.",
    "Ce qui compte pour moi : des interfaces claires, des flux fiables et des résultats que l'on peut mesurer.",
  ],
}
