import { ReactNode } from "react";
import { Web3Providers } from "./providers";
import "@rainbow-me/rainbowkit/styles.css";
import { Analytics } from '@vercel/analytics/react';


export default function Web3Layout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen bg-black text-white">
      <Web3Providers>
        {children}
         <Analytics />
      </Web3Providers>
    </section>
  );
}
