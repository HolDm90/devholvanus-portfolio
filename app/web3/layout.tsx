import { ReactNode } from "react";
import Web3Providers from "./providers";

export default function Web3Layout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen bg-black text-white">
      <Web3Providers>{children}</Web3Providers>
    </section>
  );
}
