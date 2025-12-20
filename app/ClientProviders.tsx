 "use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";


export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster position="top-right" />
      {children}
    </>
  );
}
 

/* // app/ClientProviders.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { LangProvider } from "@/app/context/LangContext";
import { ThemeProvider } from "@/app/context/ThemeContext";

type Props = {
  children: ReactNode;
  initialLang?: "fr" | "en";
};

export default function ClientProviders({ children, initialLang }: Props) {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [theme, setTheme] = useState<"light" | "dark">("dark"); // ou "light" selon ta préférence par défaut

  // === Gestion de la langue ===
  useEffect(() => {
    const pathname = window.location.pathname;

    // 1. Langue dans l'URL (/en/...)
    if (pathname.startsWith("/en")) {
      setLang("en");
      return;
    }

    // 2. Préférence sauvegardée
    const savedLang = localStorage.getItem("preferredLang") as "fr" | "en" | null;
    if (savedLang) {
      setLang(savedLang);
      return;
    }

    // 3. Fallback sur initialLang ou "fr"
    setLang(initialLang ?? "fr");
  }, [initialLang]);

  // Mise à jour de l'URL et sauvegarde langue
  useEffect(() => {
    localStorage.setItem("preferredLang", lang);

    // Mise à jour douce de l'URL sans rechargement
    if (lang === "en" && !window.location.pathname.startsWith("/en")) {
      window.history.replaceState(null, "", "/en" + window.location.pathname);
    } else if (lang === "fr" && window.location.pathname.startsWith("/en")) {
      window.history.replaceState(null, "", window.location.pathname.replace(/^\/en/, ""));
    }
  }, [lang]);

  // === Gestion du thème (dark/light) ===
  useEffect(() => {
    // Chargement de la préférence sauvegardée ou détection système
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Détection automatique du thème système
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Application du thème sur <html> et sauvegarde
  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <LangProvider lang={lang}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: theme === "dark" ? "#1f2937" : "#ffffff",
              color: theme === "dark" ? "#fff" : "#000",
            },
          }}
        />
        {children}
      </LangProvider>
    </ThemeProvider>
  );
} */