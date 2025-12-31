import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

type LeadPayload = {
  source?: string;
  locale?: string;
  createdAt?: string;
  name?: string;
  phone?: string;
  city?: string;
  message?: string;
  waLink?: string;
  details?: string;
  multi?: boolean;
  items?: any;
  productId?: string;
};

function env(name: string) {
  return process.env[name];
}

function canEmail() {
  return !!(env("SMTP_HOST") && env("SMTP_PORT") && env("SMTP_USER") && env("SMTP_PASS") && env("LEAD_EMAIL_TO"));
}

function canSheets() {
  return !!(env("GOOGLE_SHEETS_ID") && env("GOOGLE_SERVICE_ACCOUNT_EMAIL") && env("GOOGLE_PRIVATE_KEY"));
}

async function sendEmail(lead: LeadPayload) {
  const transporter = nodemailer.createTransport({
    host: env("SMTP_HOST"),
    port: Number(env("SMTP_PORT") || 587),
    secure: Number(env("SMTP_PORT")) === 465,
    auth: { user: env("SMTP_USER"), pass: env("SMTP_PASS") },
  });

  const subject = `Nouveau lead - ${lead.source || "site"} (${lead.locale || "?"})`;
  const text =
    `Date: ${lead.createdAt || ""}\n` +
    `Nom: ${lead.name || ""}\n` +
    `Téléphone: ${lead.phone || ""}\n` +
    `Ville: ${lead.city || ""}\n\n` +
    `Message WhatsApp:\n${lead.message || ""}\n\n` +
    `Lien WhatsApp:\n${lead.waLink || ""}\n`;

  await transporter.sendMail({
    from: env("SMTP_FROM") || env("SMTP_USER")!,
    to: env("LEAD_EMAIL_TO")!,
    subject,
    text,
  });
}

async function appendToSheet(lead: LeadPayload) {
  const privateKey = (env("GOOGLE_PRIVATE_KEY") || "").replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: env("GOOGLE_SERVICE_ACCOUNT_EMAIL"),
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Colonnes proposées
  const row = [
    lead.createdAt || new Date().toISOString(),
    lead.source || "",
    lead.locale || "",
    lead.name || "",
    lead.phone || "",
    lead.city || "",
    lead.multi ? "yes" : "no",
    lead.productId || "",
    JSON.stringify(lead.items || null),
    lead.details || "",
    lead.message || "",
    lead.waLink || "",
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: env("GOOGLE_SHEETS_ID")!,
    range: "A1",
    valueInputOption: "RAW",
    requestBody: { values: [row] },
  });
}

export async function POST(req: Request) {
  try {
    const lead = (await req.json()) as LeadPayload;

    // anti-spam minimal
    if (!lead || typeof lead !== "object") {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    // Fire-and-forget mais on attend quand même (pour être sûr)
    const tasks: Promise<any>[] = [];

    if (canEmail()) tasks.push(sendEmail(lead));
    if (canSheets()) tasks.push(appendToSheet(lead));

    await Promise.allSettled(tasks);

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Server error" },
      { status: 500 }
    );
  }
}
