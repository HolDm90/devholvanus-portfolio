// locales/en.ts
 export default {
  // Navbar
  navbar: {
    brand: "DevHolvanus",
    links: {
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    switchToFr: "FR",
  },

  // Hero
  hero: {
    title: "Web & Web3 Developer",
    description:
      "Full-stack developer specialized in frontend, backend, and Web3. I build performant, secure, and scalable applications — from UI to APIs and blockchain smart contracts.",
    cta: {
      projects: "See my projects",
      dapp: "Access the DApp",
    },
  },
    

   // About
  about: {
  title: "About",
  content: {
    role: "Developer",
    backend: "Backend & Full-Stack",
    suffix1: ", I build robust, secure, and scalable web applications with a strong focus on",
    rest: "REST APIs",
    and: "and",
    web3: "Web3",
    experience: "I have solid experience with",
    django: "Django REST Framework",
    node: "Node.js",
    forBackend: "for the backend",
    asWellAs: "as well as",
    react: "React",
    nextjs: "Next.js",
    forFrontend: "for modern, high-performance interfaces.",
    mastery: "I master authentication, permission systems, project architecture, and full-stack integration.",
    web3Work: "In Web3, I develop",
    smartContracts: "smart contracts",
    dapps: "full DApps",
    integrating: "integrating wallets, IPFS, NFTs, and on-chain interactions, with a focus on quality and security.",
    goal: "My goal is to deliver reliable, maintainable, and production-ready solutions — not just demos."
  }
},

  // Skills
  skills: {
    title: "Technical Skills",
    categories: {
      backend: "Backend Engineering",
      frontend: "Frontend Engineering",
      web3: "Blockchain / Web3",
      devops: "DevOps & Tools",
    },
  },

  // Projects
  projects: {
    title: "Selected Projects",
  },

  // Contact
  contact: {
    title: "Let's Work Together",
    subtitle:
      "Freelance missions, backend, Web3, or long-term opportunities. Reply within 24h.",
    form: {
      name: "Your name",
      email: "Your email",
      message: "Your message",
      submit: "Send message",
      sending: "Sending...",
    },
    success: "Message sent successfully ✓",
    error: "An error occurred. Please try again later.",
    emailLabel: "Or contact me directly at",
    email: "denahouholvanus@mail.com",
  },

  // Footer
  footer: {
    brand: "DevHolvanus",
    description:
      "Web, Backend & Blockchain Developer. Building modern, secure, and production-ready solutions.",
    navigation: "Navigation",
    links: {
      portfolio: "Portfolio",
      dapp: "NFT Skill Badge DApp",
      contact: "Contact",
    },
    findMe: "Find me on",
    copyright: "All rights reserved.",
    builtWith: "Built with Next.js, Tailwind CSS & Web3.",
  },

  // Metadata
  metadata: {
    title: {
      default: "DevHolvanus | Web, Backend & Blockchain Developer",
      template: "%s | DevHolvanus",
    },
    description:
      "Web, Backend & Blockchain Developer. Building modern apps with Next.js, Django, secure APIs, and smart contracts.",
    openGraph: {
      title: "DevHolvanus | Web, Backend & Blockchain Developer",
      description:
        "Professional portfolio – Web, Backend & Blockchain. Real projects: NFT DApps, Django APIs, modern apps.",
      locale: "en_US",
    },
    twitter: {
      title: "DevHolvanus | Web & Blockchain Developer",
      description:
        "Web, Backend & Web3 Developer. Explore my projects: NFT DApps, Django APIs, modern apps.",
    },
  },
} as const