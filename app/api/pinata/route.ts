import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as Blob | null;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier reçu" }, { status: 400 });
    }

    // Créer un File lisible par fetch/Pinata
    const pinataFormData = new FormData();
    pinataFormData.append("file", file, (file as any).name || "file.png");

    const pinataRes = await fetch(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
        body: pinataFormData,
      }
    );

    const result = await pinataRes.json();

    if (!pinataRes.ok) {
      console.error("Erreur Pinata :", result);
      return NextResponse.json({ error: result }, { status: 500 });
    }

    return NextResponse.json({
      IpfsHash: result.IpfsHash,
      url: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`,
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
