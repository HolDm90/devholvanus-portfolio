"use client";

import { useI18n } from "../app/locales/client";
import { motion } from "framer-motion";

export default function About() {
  const t = useI18n();

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-orbitron mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#8B5CF6] to-[#22C55E]"
      >
        {t('about.title')}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center text-slate-300 space-y-6 text-lg leading-relaxed"
      >
        <p>
          {t('about.content.role')}{" "}
          <span className="text-[#00E5FF] font-semibold">{t('about.content.backend')}</span>,
          {t('about.content.suffix1')}{" "}
          <span className="text-[#8B5CF6] font-semibold">{t('about.content.rest')}</span>{" "}
          {t('about.content.and')}{" "}
          <span className="text-[#22C55E] font-semibold">{t('about.content.web3')}</span>.
        </p>

        <p>
          {t('about.content.experience')}{" "}
          <strong>{t('about.content.django')}</strong> {t('about.content.and')}{" "}
          <strong>{t('about.content.node')}</strong> {t('about.content.forBackend')}, {t('about.content.asWellAs')}{" "}
          <strong>{t('about.content.react')}</strong> {t('about.content.and')}{" "}
          <strong>{t('about.content.nextjs')}</strong> {t('about.content.forFrontend')}.
          {t('about.content.mastery')}
        </p>

        <p>
          {t('about.content.web3Work')}{" "}
          <strong>{t('about.content.smartContracts')}</strong> {t('about.content.and')}{" "}
          <strong>{t('about.content.dapps')}</strong> {t('about.content.integrating')}...
        </p>

        <p className="text-slate-400 text-base">
          {t('about.content.goal')}
        </p>
      </motion.div>
    </section>
  );
}