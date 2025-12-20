"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "../app/locales/client";

export default function Navbar() {
  const t = useI18n();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'fr';
  const otherLocale = currentLocale === 'fr' ? 'en' : 'fr';

  const links = [
    { href: "#skills", label: t('navbar.links.skills') },
    { href: "#projects", label: t('navbar.links.projects') },
    { href: "#contact", label: t('navbar.links.contact') },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white hover:text-cyan-400 transition"
        >
          {t('navbar.brand')}
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition"
            >
              {link.label}
            </Link>
          ))}
          <span className="w-px h-4 bg-white/20" />
          <Link
            href={`/${otherLocale}${pathname.replace(/^\/[^/]+/, '')}`}
            className="text-xs uppercase tracking-widest opacity-70 hover:opacity-100 hover:text-cyan-400 transition"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden p-2 text-white hover:text-cyan-400 transition"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-black/90 border-t border-white/10"
          >
            <div className="flex flex-col gap-4 px-6 py-4 text-white">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-cyan-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${otherLocale}${pathname.replace(/^\/[^/]+/, '')}`}
                className="text-xs uppercase tracking-widest opacity-70 hover:opacity-100 hover:text-cyan-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {otherLocale.toUpperCase()}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}