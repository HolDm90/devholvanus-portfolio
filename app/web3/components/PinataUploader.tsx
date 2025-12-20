/* "use client";

import { useState } from "react";
import { toast } from "sonner";

interface PinataUploaderProps {
  onUploadSuccess: (url: string) => void;
}

export default function PinataUploader({ onUploadSuccess }: PinataUploaderProps) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await fetch("/api/pinata", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Échec de l'upload");

      const data = await res.json();

      if (!data.IpfsHash) throw new Error("IPFS hash introuvable");

      const url = `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
      onUploadSuccess(url);
      toast.success("Upload réussi !");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'upload sur Pinata");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <label className="cursor-pointer p-2 bg-[#00E5FF] text-black rounded-md">
        {loading ? "Upload en cours..." : "Uploader votre badge"}
        <input type="file" onChange={handleUpload} className="hidden" />
      </label>
    </div>
  );
}
 */

"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";

interface PinataUploaderProps {
  file?: Blob;
  metadata?: any;
  onUploadSuccess: (url: string) => void;
}

export default function PinataUploader({ file, metadata, onUploadSuccess }: PinataUploaderProps) {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (file) uploadToPinata(file, metadata);
  }, [file]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (selectedFile) uploadToPinata(selectedFile);
  }, [selectedFile]);

  const uploadToPinata = async (fileToUpload: Blob | File, metadataToSend?: any) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", fileToUpload, (fileToUpload as File).name || "file.png");
      if (metadataToSend) formData.append("pinataMetadata", JSON.stringify(metadataToSend));

      const res = await fetch("/api/pinata", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Échec de l'upload");

      const data = await res.json();
      if (!data.IpfsHash) throw new Error("IPFS hash introuvable");

      const url = `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
      onUploadSuccess(url);
      toast.success("Upload réussi !");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'upload sur Pinata");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {loading && <span className="text-cyan-400 font-semibold">Upload en cours...</span>}
      {!file && (
        <label className="cursor-pointer p-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-md shadow-lg hover:scale-105 transition-transform">
          Sélectionner un fichier à uploader
          <input type="file" onChange={handleFileSelect} className="hidden" />
        </label>
      )}
    </div>
  );
}
