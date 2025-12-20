import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT = new Map<string, number>();
const WINDOW_MS = 60_000; // 1 minute

export async function POST(req: NextRequest) {
  try {
    // 1️⃣ Rate limiting (IP-based)
    const ip =
      req.headers.get("x-forwarded-for") ??
      "unknown";

    const lastTime = RATE_LIMIT.get(ip);
    if (lastTime && Date.now() - lastTime < WINDOW_MS) {
      return NextResponse.json(
        { error: "Trop de requêtes. Réessaie plus tard." },
        { status: 429 }
      );
    }
    RATE_LIMIT.set(ip, Date.now());

    // 2️⃣ Parse body (UNE SEULE FOIS)
    const { name, email, message, company } = await req.json();

    // 3️⃣ Honeypot anti-spam
    if (company) {
      return NextResponse.json({ success: true });
    }

    // 4️⃣ Validation stricte
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Données invalides." },
        { status: 400 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Message trop long." },
        { status: 400 }
      );
    }

    // 5️⃣ Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio DevHolvanus" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
