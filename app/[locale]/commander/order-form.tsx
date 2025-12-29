"use client";

import { useMemo, useState } from "react";

type Locale = "fr" | "he";

type Props = {
  locale: Locale;
  initialType?: string;
};

const PHONE_TEL = "+972585360510";

function text(locale: Locale) {
  const he = locale === "he";

  return {
    formTitle: he ? "פרטי הבקשה" : "Détails de la demande",
    formDesc: he
      ? "מלאו את הפרטים. כרגע זה יוצר הודעה מסודרת ל-WhatsApp. בהמשך נוסיף תשלום אונליין (Checkout)."
      : "Remplissez les champs. Pour l’instant cela génère un message WhatsApp structuré. Ensuite on intégrera le paiement en ligne (Checkout).",

    typeLabel: he ? "סוג הבקשה" : "Type de demande",
    typePlaceholder: he ? "בחרו…" : "Choisissez…",
    types: he
      ? [
          { v: "mezouza", l: "מזוזות" },
          { v: "tefilin", l: "תפילין" },
          { v: "sefer-torah", l: "ספר תורה" },
          { v: "meguilat-ester", l: "מגילת אסתר" },
          { v: "pitoum-haketoret", l: "פיטום הקטורת" },
          { v: "lamnatseah", l: "למנצח" },
          { v: "birkat-habayit", l: "ברכת הבית" },
          { v: "autre", l: "אחר / שאלה" },
        ]
      : [
          { v: "mezouza", l: "Mézouzot" },
          { v: "tefilin", l: "Téfilines" },
          { v: "sefer-torah", l: "Séfer Torah" },
          { v: "meguilat-ester", l: "Meguilat Esther" },
          { v: "pitoum-haketoret", l: "Pitoum HaKetoret" },
          { v: "lamnatseah", l: "Lamnatse’aḥ" },
          { v: "birkat-habayit", l: "Birkat HaBayit" },
          { v: "autre", l: "Autre / Question" },
        ],

    needLabel: he ? "מה צריך" : "Ce que vous cherchez",
    needPh: he
      ? "קנייה / בדיקה / תיקון / הערכה…"
      : "Achat / vérification / réparation / estimation…",

    urgencyLabel: he ? "דחיפות" : "Urgence",
    urgencies: he
      ? [
          { v: "normal", l: "רגיל" },
          { v: "rapide", l: "דחוף" },
          { v: "tres-urgent", l: "מאוד דחוף" },
        ]
      : [
          { v: "normal", l: "Normale" },
          { v: "rapide", l: "Rapide" },
          { v: "tres-urgent", l: "Très urgent" },
        ],

    locationLabel: he ? "אזור" : "Lieu / Ville",
    locationPh: he ? "נתניה / ירושלים / בית שמש…" : "Netanya / Jérusalem / Bet Shemesh…",

    detailsLabel: he ? "פרטים חשובים" : "Détails importants",
    detailsPh: he
      ? "לדוגמה: רמת הידור, כמות, תקציב, אם יש בעיה ידועה, האם יש תמונות…"
      : "Ex : niveau de hidour, quantité, budget, problème connu, photos disponibles…",

    halakhicLabel: he ? "הצהרה (מסגרת הלכתית)" : "Déclaration (cadre halakhique)",
    halakhicText: he
      ? "אני מבין/ה שהכתיבה/בדיקה/תיקון נעשים ע״י סופר, והאחריות ההלכתית לכשרות הכתיבה שייכת לסופר. מרכּז הסת״ם מתאם ומלווה את התהליך."
      : "Je comprends que la ketiva / vérification / restauration est réalisée par un sofer, et que la responsabilité halakhique de la ketiva lui incombe. Merkaz HaSTaM coordonne et accompagne le processus.",

    cta: he ? "לשלוח ב-WhatsApp" : "Envoyer sur WhatsApp",
    helper: he
      ? "טיפ: אפשר להוסיף תמונות ב-WhatsApp אחרי השליחה."
      : "Astuce : vous pourrez ajouter des photos dans WhatsApp après l’envoi.",

    missing: he ? "נא למלא: סוג הבקשה + מה צריך." : "Merci de remplir : type de demande + besoin.",
  };
}

export default function OrderForm({ locale, initialType }: Props) {
  const c = text(locale);

  const [type, setType] = useState(initialType || "");
  const [need, setNeed] = useState("");
  const [urgency, setUrgency] = useState("normal");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [accepted, setAccepted] = useState(false);

  const typeLabel = useMemo(() => {
    const found = c.types.find((x) => x.v === type);
    return found?.l || "";
  }, [type, c.types]);

  const message = useMemo(() => {
    const lines =
      locale === "he"
        ? [
            "שלום, אני רוצה להתחיל בקשה דרך Merkaz HaSTaM (Marketplace/Coordination).",
            "",
            `סוג בקשה: ${typeLabel || "-"}`,
            `מה צריך: ${need || "-"}`,
            `דחיפות: ${c.urgencies.find((u) => u.v === urgency)?.l || "-"}`,
            `אזור: ${location || "-"}`,
            "",
            "פרטים:",
            details || "-",
            "",
            "הצהרה:",
            c.halakhicText,
          ]
        : [
            "Bonjour, je souhaite démarrer une demande via Merkaz HaSTaM (Marketplace/Coordination).",
            "",
            `Type : ${typeLabel || "-"}`,
            `Besoin : ${need || "-"}`,
            `Urgence : ${c.urgencies.find((u) => u.v === urgency)?.l || "-"}`,
            `Lieu : ${location || "-"}`,
            "",
            "Détails :",
            details || "-",
            "",
            "Déclaration :",
            c.halakhicText,
          ];

    return lines.join("\n");
  }, [locale, typeLabel, need, urgency, location, details, c]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!type || !need) {
      alert(c.missing);
      return;
    }
    if (!accepted) {
      // déclaration non acceptée : on bloque
      return;
    }

    const link = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(
      message
    )}`;
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">{c.formTitle}</h2>
      <p className="mt-2 text-sm text-slate-600">{c.formDesc}</p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-6">
        {/* Type */}
        <div className="grid gap-2">
          <label className="text-sm font-medium">{c.typeLabel}</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="h-11 rounded-xl border px-3 text-sm"
          >
            <option value="">{c.typePlaceholder}</option>
            {c.types.map((x) => (
              <option key={x.v} value={x.v}>
                {x.l}
              </option>
            ))}
          </select>
        </div>

        {/* Need */}
        <div className="grid gap-2">
          <label className="text-sm font-medium">{c.needLabel}</label>
          <input
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            placeholder={c.needPh}
            className="h-11 rounded-xl border px-3 text-sm"
          />
        </div>

        {/* Urgency */}
        <div className="grid gap-2">
          <label className="text-sm font-medium">{c.urgencyLabel}</label>
          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="h-11 rounded-xl border px-3 text-sm"
          >
            {c.urgencies.map((u) => (
              <option key={u.v} value={u.v}>
                {u.l}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="grid gap-2">
          <label className="text-sm font-medium">{c.locationLabel}</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={c.locationPh}
            className="h-11 rounded-xl border px-3 text-sm"
          />
        </div>

        {/* Details */}
        <div className="grid gap-2">
          <label className="text-sm font-medium">{c.detailsLabel}</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder={c.detailsPh}
            rows={5}
            className="rounded-xl border px-3 py-3 text-sm"
          />
        </div>

        {/* Halakhic acceptance */}
        <div className="rounded-xl border bg-slate-50 p-4">
          <div className="text-sm font-semibold">{c.halakhicLabel}</div>
          <p className="mt-2 text-sm text-slate-700">{c.halakhicText}</p>

          <label className="mt-3 flex items-start gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1"
            />
            <span>{locale === "he" ? "אני מאשר/ת" : "J’accepte"}</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={!accepted}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-medium text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {c.cta}
        </button>

        <p className="text-xs text-slate-500">{c.helper}</p>
      </form>
    </div>
  );
}
