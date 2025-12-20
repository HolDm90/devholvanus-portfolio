"use client";

import Link from "next/link";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { useI18n } from "../app/locales/client";

export default function Footer() {
  const t = useI18n();

  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold tracking-wide">
            {t('footer.brand')}
          </h3>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            {t('footer.description')}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-slate-300">
            {t('footer.navigation')}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#00E5FF] transition">
                {t('footer.links.portfolio')}
              </Link>
            </li>
            <li>
              <Link href="/web3" className="hover:text-[#8B5CF6] transition">
                {t('footer.links.dapp')}
              </Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#22C55E] transition">
                {t('footer.links.contact')}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-slate-300">
            {t('footer.findMe')}
          </h4>
          <div className="flex gap-4">
            <a
              href="https://github.com/HolDm90"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#8B5CF6] transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/holvanus-denahou-566574349"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#00E5FF] transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="/web3"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#22C55E] transition"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} DevHolvanus — {t('footer.copyright')}
        <span className="block mt-1">{t('footer.builtWith')}</span>
      </div>
    </footer>
  );
}