// app/[locale]/page.tsx
import { use } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { getStaticParams } from "../locales/server";

export async function generateStaticParams() {
  return getStaticParams(); // [{ locale: 'en' }, { locale: 'fr' }]
}

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params); // 👈 obligatoire dans Next.js 15+

  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}