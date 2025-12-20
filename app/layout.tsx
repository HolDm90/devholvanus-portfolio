// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "./ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata par défaut (écrasé par [locale]/layout.tsx)
export const metadata: Metadata = {
  title: "DevHolvanus | Web & Blockchain Developer",
  description: "Portfolio professionnel de développeur Web, Backend et Web3.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}