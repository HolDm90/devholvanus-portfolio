"use client";

import { useEffect } from "react";

interface Props {
  style: "A" | "B" | "C";
  textTop: string;
  textMiddle: string;
  textBottom: string;
  onGenerateFile?: (file: File) => void;
}

export default function PreviewBadge({
  style,
  textTop,
  textMiddle,
  textBottom,
  onGenerateFile,
}: Props) {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background
    switch (style) {
      case "A":
        ctx.fillStyle = "#111827";
        ctx.fillRect(0, 0, 400, 400);
        ctx.strokeStyle = "#00E5FF";
        ctx.lineWidth = 6;
        ctx.strokeRect(10, 10, 380, 380);
        break;
      case "B":
        ctx.fillStyle = "#1F1F2E";
        ctx.fillRect(0, 0, 400, 400);
        ctx.strokeStyle = "#8B5CF6";
        ctx.lineWidth = 8;
        ctx.strokeRect(20, 20, 360, 360);
        break;
      case "C":
        ctx.fillStyle = "#0B0B0F";
        ctx.fillRect(0, 0, 400, 400);
        ctx.strokeStyle = "#22C55E";
        ctx.lineWidth = 10;
        ctx.strokeRect(15, 15, 370, 370);
        break;
    }

    // Text
    const lines = [textTop, textMiddle, textBottom].filter(Boolean);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px Orbitron, sans-serif";

    lines.forEach((line, i) => {
      ctx.fillText(line, 50, 150 + i * 50);
    });

    // Export to File
    canvas.toBlob((blob) => {
      if (!blob) return;

      if (typeof onGenerateFile === "function") {
        const file = new File([blob], "badge.png", { type: "image/png" });
        onGenerateFile(file);
      }
    });
  }, [style, textTop, textMiddle, textBottom, onGenerateFile]);

  return (
    <div className="mt-6 w-full flex justify-center">
      <p className="text-sm text-gray-400">
        Génération image en cours…
      </p>
    </div>
  );
}
