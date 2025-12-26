"use client";

import { useState } from "react";
import { toast } from "sonner";
import BadgeEditor from "../components/BadgeEditor/BadgeEditor";
import PinataUploader from "./PinataUploader";
import MintBadgeButton from "./MintBadgeButton";
import FaucetNotice from "./FaucetNotice";

export default function BadgeBuilder() {
  const [exportData, setExportData] = useState<{ blob: Blob; metadata: any } | null>(null);
  const [ipfsUrl, setIpfsUrl] = useState("");

  // Callback depuis BadgeEditor (PNG + metadata JSON)
  const handleExport = (blob: Blob, metadata: any) => {
    setExportData({ blob, metadata });
    toast.success("Badge généré !");
  };

  // Callback depuis PinataUploader
  const handleUploadSuccess = (url: string) => {
    setIpfsUrl(url);
    toast.success("Badge uploadé sur IPFS !");
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-4xl p-6 bg-[#111827]/60 rounded-2xl shadow-lg shadow-cyan-500/50">
      {/* Badge Editor */}
      <div className="w-full">
        <BadgeEditor onExport={handleExport} />
      </div>

      {/* Pinata Uploader */}
      {(exportData || !exportData) && (
        <PinataUploader
          file={exportData?.blob}           // PNG depuis BadgeEditor
          metadata={exportData?.metadata}   // metadata JSON depuis BadgeEditor
          onUploadSuccess={handleUploadSuccess}
        />
      )}

      {/* Mint du badge */}
      {ipfsUrl && <MintBadgeButton tokenURI={ipfsUrl} />}
    </div>
  );
}