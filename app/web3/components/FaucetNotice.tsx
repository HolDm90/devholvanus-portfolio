"use client";

import { useAccount, useBalance, useChainId } from "wagmi";
import { sepolia } from "wagmi/chains";

export default function FaucetNotice() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { data: balance } = useBalance({
    address,
    query: { enabled: !!address },
  });

  if (!isConnected) return null;
  if (chainId !== sepolia.id) return null;

  const hasEth = balance && Number(balance.formatted) > 0.001;

  if (hasEth) return null;

  return (
    <div className="mt-6 w-full max-w-xl rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-4 text-center">
      <p className="text-sm text-cyan-300">
        Tu es sur <strong>Sepolia</strong> mais ton wallet n’a pas assez d’ETH testnet.
      </p>

      <a
        href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block rounded-lg bg-cyan-500 px-4 py-2 text-black font-semibold hover:bg-cyan-400 transition"
      >
        Obtenir de l’ETH Sepolia (Google Cloud Web3 Faucet)
      </a>
    </div>
  );
}
