"use client";

import { useState } from "react"; 
import { useAccount, useWriteContract } from "wagmi";
import { toast } from "sonner";
import { publicClient } from "../lib/wagmi";
import { resolveIpfs } from "../lib/ipfs";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_SKILLBADGE_ADDRESS!;
const ABI = [{ inputs:[{ internalType:"string", name:"tokenURI", type:"string"}], name:"mintSkillBadge", outputs:[{internalType:"uint256", name:"", type:"uint256"}], stateMutability:"nonpayable", type:"function" }];

export default function MintBadgeButton({ tokenURI }: { tokenURI: string }) {
  const { address, isConnected } = useAccount();
  const [minting, setMinting] = useState(false);
  const { writeContractAsync } = useWriteContract();
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const imageUrl = resolveIpfs(tokenURI);

  const handleMint = async () => {
    if (!isConnected || !address) return toast.error("Wallet non connecté");
    try {
      setMinting(true); setConfirmed(false); setTxHash(null);
      const estimatedGas = await publicClient.estimateContractGas({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: "mintSkillBadge",
        args: [tokenURI],
        account: address,
      });
      const gasLimit = (estimatedGas * 110n) / 100n;
      const hash = await writeContractAsync({ address: CONTRACT_ADDRESS, abi: ABI, functionName:"mintSkillBadge", args:[tokenURI], gas: gasLimit });
      setTxHash(hash);
      toast.success("Transaction envoyée, en attente de confirmation...");
      await publicClient.waitForTransactionReceipt({ hash });
      setConfirmed(true);
      toast.success("Badge minté avec succès !");
    } catch (err: any) {
      console.error(err);
      toast.error("Erreur lors du mint");
    } finally { setMinting(false); }
  };

  const handleDownload = async () => {
    try {
      const url = resolveIpfs(tokenURI);
      const res = await fetch(url);
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = "SkillBadge.png";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch (err) { console.error(err); toast.error("Erreur lors du téléchargement du NFT"); }
  };

  const handleShare = (platform: "linkedin" | "x" | "facebook" | "whatsapp") => {
    const url = encodeURIComponent(resolveIpfs(tokenURI));
    const text = encodeURIComponent("Je viens de mint mon Skill Badge !");
    let shareUrl = "";
    switch (platform) {
      case "linkedin": shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`; break;
      case "x": shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`; break;
      case "facebook": shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`; break;
      case "whatsapp": shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`; break;
    }
    window.open(shareUrl, "_blank");
  };

  return (
    <>
      <button onClick={handleMint} disabled={minting} className="px-6 py-3 mt-4 rounded-md bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold shadow-lg hover:scale-105 transition-transform">
        {minting ? "Mint en cours..." : "Minter le Badge"}
      </button>

      {txHash && (
        <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer" className="mt-4 block text-cyan-400 underline text-sm">
          {confirmed ? "Transaction confirmée sur Etherscan" : "Voir la transaction sur Etherscan (en attente)"}
        </a>
      )}

      {confirmed && (
        <div className="mt-4 flex flex-col items-center gap-2">
          <img src={imageUrl} alt="NFT Badge" className="w-40 h-40 object-contain rounded-md shadow-lg shadow-cyan-500/50" />
          <button onClick={handleDownload} className="px-4 py-2 bg-green-400 text-black rounded-md font-semibold shadow-md hover:scale-105 transition-transform">Télécharger le NFT</button>
          <div className="flex gap-2 mt-2">
            <button onClick={() => handleShare("linkedin")} className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:scale-105 transition-transform">LinkedIn</button>
            <button onClick={() => handleShare("x")} className="px-3 py-1 bg-sky-500 text-white rounded-md text-sm hover:scale-105 transition-transform">X</button>
            <button onClick={() => handleShare("facebook")} className="px-3 py-1 bg-blue-800 text-white rounded-md text-sm hover:scale-105 transition-transform">Facebook</button>
            <button onClick={() => handleShare("whatsapp")} className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:scale-105 transition-transform">WhatsApp</button>
          </div>
        </div>
      )}
    </>
  );
}
