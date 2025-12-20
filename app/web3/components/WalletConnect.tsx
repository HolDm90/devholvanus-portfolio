"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function WalletConnect() {
  return (
    <div className="flex justify-between items-center w-full max-w-5xl mx-auto px-6 py-4
      bg-black/60 backdrop-blur-xl rounded-2xl border border-cyan-400/20
      shadow-[0_0_30px_rgba(0,255,255,0.25)]">
      
      <h1 className="text-2xl font-bold tracking-widest text-transparent bg-clip-text
        bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400">
        ⚡ SkillBadge DApp
      </h1>

      <ConnectButton showBalance={false} />
    </div>
  );
}
