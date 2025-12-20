"use client";

import { useI18n } from "../app/locales/client";
import { motion } from "framer-motion";

const useSkillsData = () => {
  const t = useI18n();
  return [
    {
      category: t('skills.categories.backend'),
      items: [
        "Django & Django REST Framework",
        "Node.js (Express)",
        "REST API Design",
        "JWT Authentication",
        "Permissions & Security",
        "PostgreSQL / MongoDB",
      ],
    },
    {
      category: t('skills.categories.frontend'),
      items: [
        "React",
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "State Management",
        "Responsive UI",
      ],
    },
    {
      category: t('skills.categories.web3'),
      items: [
        "Ethereum / EVM",
        "Solidity (ERC-721 / ERC-1155)",
        "Wagmi / Viem",
        "IPFS / Pinata",
        "Wallet Integration",
      ],
    },
    {
      category: t('skills.categories.devops'),
      items: [
        "Git & GitHub",
        "API Documentation",
        "Project Architecture",
        "Environment Variables",
        "Deployment Basics",
      ],
    },
  ];
};

export default function Skills() {
  const t = useI18n();
  const SKILLS = useSkillsData();

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-orbitron mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#8B5CF6] to-[#22C55E]"
      >
        {t('skills.title')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {SKILLS.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-br from-[#071025] to-[#09102a] border border-[#00E5FF]/20 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#00E5FF]">
              {group.category}
            </h3>

            <ul className="space-y-2 text-sm text-slate-300">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}