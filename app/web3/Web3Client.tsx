"use client";

import BadgeBuilder from "../web3/components/BadgeBuilder";
import FaucetNotice from "../web3/components/FaucetNotice";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";

export default function Web3Client() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center">

      {/* Retour */}
      <button
        onClick={() => router.push("/")}
        className="self-start mb-6 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-md shadow-lg hover:scale-105 transition"
      >
        ← Retour au Portfolio
      </button>

      {/* Wallet */}
      <div className="h-[72px] mb-6 flex items-center justify-center">
        <ConnectButton />
      </div>

      {/* Faucet */}
      <div className="mb-8">
        <FaucetNotice />
      </div>

      {/* Badge Builder */}
      <div className="w-full max-w-4xl p-6 bg-[#111827]/60 rounded-2xl shadow-lg shadow-cyan-500/50">
        <BadgeBuilder />
      </div>
    </section>
  );
}
