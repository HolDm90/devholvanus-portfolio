// app/web3/lib/wagmi.ts
"use client";

import { createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { createPublicClient, http } from "viem";

const WALLETCONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;
if (!WALLETCONNECT_PROJECT_ID) throw new Error("WALLETCONNECT_PROJECT_ID manquant !");

export const chains = [sepolia]; // <-- export chains pour le layout

const { connectors } = getDefaultWallets({
  appName: "DevHolvanus Portfolio",
  projectId: WALLETCONNECT_PROJECT_ID,
  chains,
});

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(`https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`),
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  chains,
});
