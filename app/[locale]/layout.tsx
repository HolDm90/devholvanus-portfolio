// app/[locale]/layout.tsx
import { I18nProviderClient } from "../locales/client";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { use } from "react";

// ✅ generateMetadata : params est une Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const { default: messages } =
    locale === "fr"
      ? await import("../locales/fr")
      : await import("../locales/en");

  const meta = messages.metadata;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "Web Developer",
      "Backend Developer",
      "Blockchain Developer",
      "Next.js",
      "Django",
      "Web3",
      "Smart Contracts",
      "NFT",
      "Developer Portfolio",
    ],
    authors: [{ name: "DevHolvanus" }],
    creator: "DevHolvanus",
    metadataBase: new URL(baseUrl),
    openGraph: {
      ...meta.openGraph,
      url: baseUrl,
      siteName: locale === "fr" ? "Portfolio DevHolvanus" : "DevHolvanus Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "DevHolvanus – Web & Blockchain Developer",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      ...meta.twitter,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      lang: locale,
    },
  };
}

// ✅ Layout composant : utilise React.use()
export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params); // 👈 résout la Promise
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}