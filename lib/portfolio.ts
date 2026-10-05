/**
 * Single source of truth for the site's content.
 * Edit names, links and copy here; the components only render this data.
 */

export const profile = {
  firstName: "Alexandre",
  lastName: "Croquette",
  role: "Développeur & designer",
  location: "France · à distance",
  availability: "Disponible pour de nouveaux projets",
  email: "alexandre.croquette@ailance.digital",
  github: "https://github.com/Axaled",
  linkedin: "", // ajoutez votre URL LinkedIn pour afficher le lien
}

export const nav = [
  { label: "Ce que j'automatise", href: "/#automatisations", index: "01" },
  { label: "Méthode", href: "/#methode", index: "02" },
  { label: "Réalisations", href: "/realisations", index: "03" },
  { label: "À propos", href: "/#a-propos", index: "04" },
]

export const hero = {
  title: "J'automatise les tâches répétitives des PME.",
  lede:
    "Factures à saisir, e-mails à trier, documents à lire, formulaires à remplir. Je repère ce qui vous fait perdre du temps, je l'automatise avec l'IA et je construis les outils qui vont avec. Vous gardez vos logiciels, vous récupérez des heures.",
  facts: [
    { label: "Pour qui", value: "Les entreprises de 2 à 50 personnes, sans service informatique." },
    { label: "Comment", value: "Un audit d'une demi-journée, un essai sur vos vraies données, puis la mise en place." },
    { label: "Premiers résultats", value: "En quelques jours, pas en quelques mois." },
  ],
}

export type Automation = {
  id: string
  title: string
  description: string
  usedIn: string
  proof: string
}

export const automations: Automation[] = [
  {
    id: "documents",
    title: "Lecture de documents",
    description:
      "Factures, bulletins de paie, fichiers comptables, PDF scannés ou Excel : l'IA extrait les données, les structure et les vérifie avant qu'elles n'entrent dans vos outils.",
    usedIn: "Verrou",
    proof: "lecture du FEC et de six mises en page de bulletins de paie (Silae, PayFit, livres de paie), sans saisie manuelle.",
  },
  {
    id: "agents",
    title: "Rédaction assistée",
    description:
      "Plusieurs assistants qui se passent le relais : l'un analyse, l'autre cherche des sources, un troisième rédige, un dernier relit et contrôle.",
    usedIn: "Verrou",
    proof: "cinq agents rédigent un dossier technique sourcé sur OpenAlex et arXiv, puis le relisent.",
  },
  {
    id: "assistant",
    title: "Réponses aux clients",
    description:
      "Un assistant qui connaît vos produits, répond à vos clients et déclenche des actions dans votre interface.",
    usedIn: "Showroom Mercedes, Bienassis",
    proof: "assistant qui pilote la scène 3D du showroom, chatbot d'accueil pour un client.",
  },
  {
    id: "saisie",
    title: "Saisie automatique",
    description:
      "Une extension navigateur qui pré-remplit les formulaires de vos portails métier à partir d'une fiche client unique.",
    usedIn: "Formly",
    proof: "remplissage des formulaires de tarification des portails assureurs en un clic.",
  },
  {
    id: "prospection",
    title: "Prospection et CRM",
    description:
      "Qualification de contacts, relances, enrichissement de fiches et synchronisation avec votre CRM, sans copier-coller.",
    usedIn: "Agents LinkedIn",
    proof: "veille et prise de contact automatisées sur LinkedIn.",
  },
  {
    id: "controle",
    title: "Contrôles de cohérence",
    description:
      "Des règles métier qui croisent vos données et remontent les incohérences avant qu'elles ne coûtent cher.",
    usedIn: "Verrou",
    proof: "onze règles croisent personnes, périodes et montants avant tout dépôt fiscal.",
  },
  {
    id: "infra",
    title: "Hébergement et mise en place",
    description:
      "Vos automatisations tournent chez vous ou sur un serveur en Europe, avec sauvegardes, journal et alertes.",
    usedIn: "Verrou, infrastructure Ailance",
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
  status?: string
  year: string
}

export const projects: Project[] = [
  {
    id: "verrou",
    name: "Verrou",
    kicker: "Site et application · crédit d'impôt recherche",
    summary: "Obtenir le crédit d'impôt recherche sans mobiliser les ingénieurs de l'entreprise.",
    problem:
      "Monter un dossier CIR occupe des ingénieurs pendant des semaines et coûte 15 à 30 % du crédit en honoraires de cabinet.",
    solution:
      "Un site public qui explique le dispositif et estime le crédit en cinq minutes, puis une application qui lit les fichiers comptables et la paie, pose uniquement les questions qui manquent, rédige le dossier avec l'IA et le vérifie avant le dépôt.",
    facts: [
      "Zéro heure de documentation demandée aux ingénieurs",
      "Six mises en page de bulletins reconnues, 139 documents de test",
      "Onze règles de cohérence avant le dépôt",
      "CERFA 2069-A-SD rempli et mémoire technique imprimable",
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Claude API", "Docker"],
    links: [],
    status: "Lancement en cours",
    year: "2026",
  },
  {
    id: "showroom",
    name: "Showroom Mercedes 3D",
    kicker: "Expérience 3D · assistant",
    summary: "Un showroom virtuel où l'on configure une EQS ou une EQE en temps réel, guidé par un assistant.",
    problem: "Présenter un véhicule premium en ligne sans la sensation d'un showroom physique.",
    solution:
      "Une scène 3D dans le navigateur avec sol en marbre réfléchissant et éclairage de studio, changement de couleur en direct, huit angles de caméra et une vue intérieure, et un assistant qui comprend la demande et pilote la scène.",
    facts: [
      "Deux modèles, EQS et EQE",
      "Teinte de carrosserie changée en direct",
      "Huit angles de caméra et une vue intérieure",
      "Sélecteur de profil et simulateur pour les hésitants à l'électrique",
    ],
    stack: ["React", "Three.js", "React Three Fiber", "Vite"],
    links: [
      { label: "Ouvrir le showroom", href: "https://axaled.github.io/Car-showroom/" },
      { label: "Code source", href: "https://github.com/Axaled/Car-showroom" },
    ],
    year: "2026",
  },
  {
    id: "formly",
    name: "Formly",
    kicker: "Extension Chrome · courtiers en assurance",
    summary: "Pré-remplir les formulaires des portails assureurs en un clic.",
    problem:
      "Les courtiers ressaisissent les mêmes informations client sur chaque portail assureur, plusieurs fois par jour.",
    solution:
      "Une extension Chrome qui lit une fiche client unique et remplit les formulaires des portails, avec un espace pour les cabinets et un espace d'administration.",
    facts: ["Une fiche client, tous les portails assureurs", "Publiée sur le Chrome Web Store"],
    stack: ["Next.js", "TypeScript", "Extension Chrome"],
    links: [
      {
        label: "Installer depuis le Chrome Web Store",
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
    title: "Essai",
    duration: "Quelques jours",
    description:
      "Un premier flux qui tourne sur vos vraies données. On mesure, on ajuste, on décide en connaissance de cause.",
  },
  {
    step: "03",
    title: "Mise en place",
    duration: "Branchée à vos outils",
    description:
      "Reliée à votre CRM, vos e-mails, vos fichiers. Hébergée chez vous ou sur un serveur en Europe, avec journal et alertes.",
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
  "Three.js",
  "PostgreSQL",
  "Docker",
  "Playwright",
  "Claude API",
  "Python",
  "Extensions Chrome",
]

export const about = {
  paragraphs: [
    "Je conçois et je développe des outils de bout en bout : le besoin, le design de l'interface, le code, l'hébergement. Pas de passage de relais entre une agence et un prestataire technique.",
    "Depuis deux ans, je me concentre sur ce que l'IA change concrètement pour une PME : lire des documents, répondre à des clients, remplir des formulaires, préparer des dossiers. Des tâches ennuyeuses, bien faites, sans surveillance permanente.",
    "Ce qui compte pour moi : des interfaces claires, des flux fiables et des résultats que l'on peut mesurer.",
  ],
}
