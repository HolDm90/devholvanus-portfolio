// components/projects.data.ts
export const PROJECTS = [
  {
    title: "NFT Skill Badge DApp",
    type: "Web3 / Blockchain",
    description:
      "DApp permettant de créer, vérifier et minter des badges NFT on-chain.",
    highlights: [
      "Mint ERC-721",
      "Génération dynamique de metadata",
      "Connexion wallet (RainbowKit)",
      "IPFS via Pinata",
    ],
    stack: ["Next.js", "Wagmi", "Viem", "Solidity", "IPFS"],
    link: "/web3",
  },
  {
    title: "Task Management API",
    type: "Backend",
    description:
      "API REST sécurisée pour la gestion de tâches avec authentification.",
    highlights: [
      "Auth JWT",
      "Permissions utilisateurs",
      "CRUD avancé",
      "Architecture propre",
    ],
    stack: ["Django", "Django REST Framework", "JWT"],
    link: "https://github.com/HolDm90/gestionTaches",
  },
  {
    title: "Portfolio Pro Web",
    type: "Frontend",
    description:
      "Portfolio moderne optimisé SEO pour développeur Web & Blockchain.",
    highlights: [
      "Animations Framer Motion",
      "SEO avancé",
      "Design responsive",
      "Architecture App Router",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    link: "/",
  },
];
