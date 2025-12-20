"use client";

import { useI18n } from "../app/locales/client";
import { motion } from "framer-motion";
import { PROJECTS } from "../app/projects.data";

export default function Projects() {
  const t = useI18n();

  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-24 bg-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-orbitron mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400"
      >
        {t('projects.title')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#071025] to-[#0b122e] border border-cyan-400/20 shadow-lg hover:shadow-cyan-500/30 transition"
          >
            <div className="mb-2 text-xs uppercase tracking-wide text-cyan-400">
              {project.type}
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-sm text-slate-300 mb-4">
              {project.description}
            </p>

            <ul className="text-sm text-slate-400 space-y-1 mb-4">
              {project.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="inline-block text-sm font-medium text-purple-400 hover:text-cyan-400 transition"
            >
              View project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}