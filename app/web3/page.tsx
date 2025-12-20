// app/web3/page.tsx
import Web3ClientLoader from "./Web3ClientLoader";

export default function Web3Page() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0c0032] via-[#12004d] to-[#0c0032] p-6 text-white">

      {/* LCP */}
      <header className="flex flex-col items-center gap-6 py-12">
        <h1 className="text-4xl md:text-5xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#8B5CF6] to-[#22C55E] text-center">
          DApp NFT Skill Badge
        </h1>

        <p className="opacity-70 text-center max-w-xl">
          Crée, uploade et mint ton badge NFT sur la blockchain.
        </p>
      </header>

      {/* Client Web3 */}
      <Web3ClientLoader />
    </main>
  );
}
