"use client";

import { useRef, useState, useEffect } from "react";
import { Stage, Layer, Rect, Text, Image, Transformer } from "react-konva";
import { BADGE_TEMPLATES } from "../../lib/badgeTemplates";

export default function BadgeEditor({
  onExport,
}: {
  onExport: (blob: Blob, metadata: any) => void;
}) {
  const stageRef = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const trRef = useRef<any>(null);

  // Badge styles
  const [bgColor, setBgColor] = useState("#22d3ee");
  const [textColor, setTextColor] = useState("#fff");
  const [fontSize, setFontSize] = useState(24);
  const [radius, setRadius] = useState(24);
  const [useGradient, setUseGradient] = useState(false);
  const [gradientFrom, setGradientFrom] = useState("#22d3ee");
  const [gradientTo, setGradientTo] = useState("#9333ea");
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderColor, setBorderColor] = useState("#00ffff");
  const [label, setLabel] = useState("Skill Badge");
  const [icon, setIcon] = useState<HTMLImageElement | null>(null);
  const [iconSelected, setIconSelected] = useState(false);
  const [holderName, setHolderName] = useState("Nom du détenteur");

  useEffect(() => {
    if (iconSelected && imageRef.current && trRef.current) {
      trRef.current.nodes([imageRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [iconSelected]);

  const handleImageUpload = (file: File) => {
    const img = new window.Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => setIcon(img);
  };

  const exportBadge = async () => {
    const uri = stageRef.current.toDataURL({ pixelRatio: 2 });
    const blob = await fetch(uri).then(res => res.blob());
    const metadata = {
      name: label,
      description: `Badge on-chain délivré à ${holderName}`,
      attributes: [
        { trait_type: "Holder", value: holderName },
        { trait_type: "Type", value: "Skill Badge" },
      ],
    };
    onExport(blob, metadata);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Controls */}
      <div className="flex gap-2 flex-wrap items-center">
        <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} className="w-12 h-12 rounded-full border border-cyan-400 shadow-md" />
        <input type="text" value={label} onChange={e => setLabel(e.target.value)} placeholder="Titre du badge" className="p-2 rounded-md bg-[#111827]/70 text-white border border-cyan-400 shadow-md w-64" />
        <input type="text" value={holderName} onChange={e => setHolderName(e.target.value)} placeholder="Nom du détenteur" className="p-2 rounded-md bg-[#111827]/70 text-white border border-cyan-400 shadow-md w-64" />
        <label className="px-3 py-1 bg-cyan-500 text-black rounded-md cursor-pointer shadow-md hover:scale-105 transition-transform">
          Ajouter image
          <input hidden type="file" accept="image/*" onChange={e => e.target.files && handleImageUpload(e.target.files[0])} />
        </label>
        <button onClick={exportBadge} className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-md shadow-lg hover:scale-105 transition-transform">
          Export PNG
        </button>
      </div>

      {/* Canvas */}
      <Stage width={300} height={300} ref={stageRef}>
        <Layer>
          <Rect
            width={300}
            height={300}
            cornerRadius={radius}
            fill={useGradient ? undefined : bgColor}
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{ x: 300, y: 300 }}
            fillLinearGradientColorStops={useGradient ? [0, gradientFrom, 1, gradientTo] : undefined}
            stroke={borderWidth ? borderColor : undefined}
            strokeWidth={borderWidth}
            shadowEnabled={true}
            shadowBlur={15}
            shadowOffset={{ x: 0, y: 6 }}
            shadowOpacity={0.35}
          />
          {icon && (
            <>
              <Image
                ref={imageRef}
                image={icon}
                x={100}
                y={60}
                width={100}
                height={100}
                draggable
                onClick={() => setIconSelected(true)}
              />
              {iconSelected && <Transformer ref={trRef} />}
            </>
          )}
          <Text text={label} fontSize={fontSize} fill={textColor} width={300} align="center" y={195} fontStyle="bold" draggable />
          <Text text={holderName} fontSize={14} fill={textColor} width={300} align="center" y={230} draggable />
        </Layer>
      </Stage>
    </div>
  );
}
