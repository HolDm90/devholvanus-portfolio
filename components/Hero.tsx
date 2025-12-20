"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "../app/locales/client";

export default function Hero() {
  const t = useI18n();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#8B5CF6] to-[#22C55E]"
      >
        {t('hero.title')}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 text-lg max-w-2xl opacity-80"
      >
        {t('hero.description')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-10 flex gap-6"
      >
        <Link
          href="#projects"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] text-black font-semibold hover:scale-105 transition"
        >
          {t('hero.cta.projects')}
        </Link>

        <Link
          href="/web3"
          className="px-6 py-3 rounded-xl border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF]/10 transition"
        >
          {t('hero.cta.dapp')}
        </Link>
      </motion.div>
    </section>
  );
}