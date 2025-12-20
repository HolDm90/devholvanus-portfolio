"use client";

import { useI18n } from "../app/locales/client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const t = useI18n();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Unknown error");

      setStatus("success");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-8 py-24 bg-black text-white flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl bg-gradient-to-br from-[#071025] to-[#0b122e] border border-white/10 rounded-2xl p-10 shadow-xl"
      >
        <h2 className="text-3xl md:text-5xl font-orbitron mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 text-center">
          {t('contact.title')}
        </h2>

        <p className="text-center text-slate-300 mb-10">
          {t('contact.subtitle')}
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t('contact.form.name')}
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 rounded-md bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
          />

          <input
            type="email"
            placeholder={t('contact.form.email')}
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 rounded-md bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
          />

          <textarea
            placeholder={t('contact.form.message')}
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="p-3 rounded-md bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
          />

          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="hidden"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-4 px-6 py-3 rounded-md bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading"
              ? t('contact.form.sending')
              : t('contact.form.submit')}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-6 text-center text-green-400">
            {t('contact.success')}
          </p>
        )}

        {status === "error" && (
          <p className="mt-6 text-center text-red-400">
            {t('contact.error')}
          </p>
        )}

        <div className="mt-8 text-center text-sm text-slate-400">
          {t('contact.emailLabel')}{" "}
          <a
            href="mailto:denahouholvanus@mail.com"
            className="text-cyan-400 hover:underline"
          >
            {t('contact.email')}
          </a>
        </div>
      </motion.div>
    </section>
  );
}