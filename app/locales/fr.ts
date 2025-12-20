// locales/en.ts
  export default {
  // Navbar
  navbar: {
    brand: "DevHolvanus",
    links: {
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    switchToEn: "EN",
  },

  // Hero
  hero: {
    title: "Développeur Web & Web3",
    description:
      "Développeur full-stack spécialisé en frontend, backend et Web3. Je conçois des applications performantes, sécurisées et scalables, de l’interface utilisateur jusqu’aux APIs et smart contracts blockchain.",
    cta: {
      projects: "Voir mes projets",
      dapp: "Accéder à la DApp",
    },
  },

  about: {
  title: "À propos",
  content: {
    role: "Développeur",
    backend: "Backend & Full-Stack",
    suffix1: ", je conçois des applications web robustes, sécurisées et scalables, avec une forte spécialisation en",
    rest: "API REST",
    and: "et",
    web3: "Web3",
    experience: "J’ai une solide expérience avec",
    django: "Django REST Framework",
    node: "Node.js",
    forBackend: "pour le backend",
    asWellAs: "ainsi qu’avec",
    react: "React",
    nextjs: "Next.js",
    forFrontend: "pour des interfaces modernes et performantes.",
    mastery: "Je maîtrise l’authentification, la gestion des permissions, l’architecture des projets et l’intégration frontend–backend.",
    web3Work: "Côté Web3, je développe des",
    smartContracts: "smart contracts",
    dapps: "DApps complètes",
    integrating: "intégrant wallets, IPFS, NFTs et interactions on-chain, avec une approche orientée qualité et sécurité.",
    goal: "Mon objectif est de livrer des solutions fiables, maintenables et prêtes pour la production — pas seulement des démos."
  }
},

  // Skills
  skills: {
    title: "Compétences Techniques",
    categories: {
      backend: "Backend Engineering",
      frontend: "Frontend Engineering",
      web3: "Blockchain / Web3",
      devops: "DevOps & Tools",
    },
  },

  // Projects
  projects: {
    title: "Projets Sélectionnés",
  },

  // Contact
  contact: {
    title: "Travaillons ensemble",
    subtitle:
      "Missions freelance, backend, Web3 ou opportunités long terme. Réponse sous 24h.",
    form: {
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      submit: "Envoyer le message",
      sending: "Envoi en cours...",
    },
    success: "Message envoyé avec succès ✓",
    error: "Une erreur est survenue. Réessaie plus tard.",
    emailLabel: "Ou contactez-moi directement à",
    email: "denahouholvanus@mail.com",
  },

  // Footer
  footer: {
    brand: "DevHolvanus",
    description:
      "Développeur Web, Backend & Blockchain. Création de solutions modernes, sécurisées et orientées production.",
    navigation: "Navigation",
    links: {
      portfolio: "Portfolio",
      dapp: "DApp NFT Skill Badge",
      contact: "Contact",
    },
    findMe: "Me retrouver",
    copyright: "Tous droits réservés.",
    builtWith: "Built with Next.js, Tailwind CSS & Web3.",
  },

  // Metadata (optionnel, mais utile si vous les gardez ici)
  metadata: {
    title: {
      default: "DevHolvanus | Développeur Web, Backend & Blockchain",
      template: "%s | DevHolvanus",
    },
    description:
      "Développeur Web, Backend et Blockchain. Création d'applications modernes avec Next.js, Django, APIs sécurisées et smart contracts.",
    openGraph: {
      title: "DevHolvanus | Développeur Web, Backend & Blockchain",
      description:
        "Portfolio professionnel – Web, Backend & Blockchain. Projets concrets : DApp NFT, APIs Django, applications modernes.",
      locale: "fr_FR",
    },
    twitter: {
      title: "DevHolvanus | Développeur Web & Blockchain",
      description:
        "Développeur Web, Backend & Web3. Découvrez mes projets : NFT DApp, Django APIs, applications modernes.",
    },
  },
} as const