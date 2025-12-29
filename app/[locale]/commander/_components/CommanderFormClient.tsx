"use client";

import { useMemo, useState } from "react";

type Locale = "fr" | "he";

const PHONE = "972585360510";

const PRODUCTS = [
  { id: "mezouza", fr: "Mézouzot", he: "מזוזות" },
  { id: "tefilin", fr: "Téfilines", he: "תפילין" },
  { id: "sefer", fr: "Séfer Torah", he: "ספר תורה" },
  { id: "klaf", fr: "Écriture sur klaf", he: "כתיבה על קלף" },
] as const;

type ProductId = (typeof PRODUCTS)[number]["id"];

function productLabel(locale: Locale, id: ProductId) {
  const p = PRODUCTS.find((x) => x.id === id)!;
  return locale === "he" ? p.he : p.fr;
}

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export default function CommanderFormClient({ locale }: { locale: Locale }) {
  const isHebrew = locale === "he";

  // Radios
  const [productId, setProductId] = useState<ProductId>("mezouza");

  // Champs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [urgency, setUrgency] = useState("");
  const [details, setDetails] = useState("");

  // Progress (3 étapes)
  const step = useMemo(() => {
    // Étape 1: choix produit
    const hasStep1 = !!productId;

    // Étape 2: infos essentielles
    const hasStep2 = name.trim().length > 1 && phone.trim().length > 3 && city.trim().length > 1;

    // Étape 3: détails (optionnel mais recommandé)
    const hasStep3 = details.trim().length >= 10;

    if (hasStep1 && hasStep2 && hasStep3) return 3;
    if (hasStep1 && hasStep2) return 2;
    return 1;
  }, [productId, name, phone, city, details]);

  const message = useMemo(() => {
    const product = productLabel(locale, productId);

    if (isHebrew) {
      return (
        `שלום, אני רוצה להזמין / לבקש הערכה בנושא סת״ם.\n\n` +
        `מוצר/שירות: ${product}\n` +
        `עיר: ${city || "—"}\n` +
        `דחיפות: ${urgency || "—"}\n` +
        `שם: ${name || "—"}\n` +
        `טלפון: ${phone || "—"}\n\n` +
        `פרטים:\n${details || "—"}\n\n` +
        `*אפשר לשלוח תמונות כאן מיד אחרי ההודעה.*`
      );
    }

    return (
      `Bonjour, je souhaite commander / demander une estimation (STaM).\n\n` +
      `Produit/Service : ${product}\n` +
      `Ville : ${city || "—"}\n` +
      `Urgence : ${urgency || "—"}\n` +
      `Nom : ${name || "—"}\n` +
      `Téléphone : ${phone || "—"}\n\n` +
      `Détails :\n${details || "—"}\n\n` +
      `*Vous pouvez envoyer des photos sur WhatsApp juste après ce message.*`
    );
  }, [isHebrew, locale, productId, city, urgency, name, phone, details]);

  const waLink = useMemo(() => buildWhatsAppLink(message), [message]);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = waLink;
  }

  return (
    <form
      id="form"
      onSubmit={submit}
      className="mt-6 space-y-5 text-sm"
      aria-label={isHebrew ? "טופס הזמנה" : "Formulaire de commande"}
    >
      {/* Progress bar 3 étapes */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span className={step >= 1 ? "font-semibold text-slate-900" : ""}>
            {isHebrew ? "שלב 1: בחירה" : "Étape 1 : Choix"}
          </span>
          <span className={step >= 2 ? "font-semibold text-slate-900" : ""}>
            {isHebrew ? "שלב 2: פרטים" : "Étape 2 : Infos"}
          </span>
          <span className={step >= 3 ? "font-semibold text-slate-900" : ""}>
            {isHebrew ? "שלב 3: שליחה" : "Étape 3 : Envoi"}
          </span>
        </div>

        <div className="h-2 w-full rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-emerald-600 transition-all"
            style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
          />
        </div>

        <p className="text-xs text-slate-500">
          {step === 1
            ? isHebrew
              ? "בחר מוצר כדי להתחיל."
              : "Choisis le produit pour commencer."
            : step === 2
              ? isHebrew
                ? "מלא שם/טלפון/עיר, ואז אפשר לשלוח."
                : "Remplis nom/téléphone/ville, puis tu peux envoyer."
              : isHebrew
                ? "מושלם. אפשר לשלוח."
                : "Parfait. Tu peux envoyer."}
        </p>
      </div>

      {/* Choix rapide (RADIOS) */}
      <fieldset className="space-y-2">
        <legend className="font-medium">
          {isHebrew ? "בחר מוצר" : "Choisissez le produit"}
        </legend>

        <div className="grid grid-cols-2 gap-2">
          {PRODUCTS.map((p) => {
            const checked = productId === p.id;
            return (
              <label
                key={p.id}
                className={`cursor-pointer rounded-xl border px-3 py-3 transition ${
                  checked ? "bg-emerald-600 text-white border-emerald-600" : "bg-white hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="product"
                    value={p.id}
                    checked={checked}
                    onChange={() => setProductId(p.id)}
                    className="h-4 w-4"
                    aria-label={isHebrew ? p.he : p.fr}
                  />
                  <span className="font-semibold">{isHebrew ? p.he : p.fr}</span>
                </div>
              </label>
            );
          })}
        </div>

        <p className="text-xs text-slate-500">
          {isHebrew
            ? "טיפ: אם יש תמונות/וידאו — שלח מיד אחרי ההודעה."
            : "Astuce : si tu as des photos/vidéo, envoie-les juste après le message."}
        </p>
      </fieldset>

      {/* Champs */}
      <div className="grid gap-3">
        <input
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={isHebrew ? "שם מלא" : "Votre nom"}
          className="w-full rounded-xl border px-4 py-3"
          dir={isHebrew ? "rtl" : "ltr"}
        />

        <input
          name="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={isHebrew ? "טלפון" : "Téléphone"}
          className="w-full rounded-xl border px-4 py-3"
          dir={isHebrew ? "rtl" : "ltr"}
          inputMode="tel"
        />

        <input
          name="city"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={isHebrew ? "עיר" : "Ville"}
          className="w-full rounded-xl border px-4 py-3"
          dir={isHebrew ? "rtl" : "ltr"}
        />

        <select
          name="urgency"
          required
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
          className="w-full rounded-xl border px-4 py-3"
          dir={isHebrew ? "rtl" : "ltr"}
        >
          <option value="">{isHebrew ? "דחיפות" : "Urgence"}</option>
          <option value={isHebrew ? "היום" : "Aujourd’hui"}>{isHebrew ? "היום" : "Aujourd’hui"}</option>
          <option value="24–48h">24–48h</option>
          <option value={isHebrew ? "השבוע" : "Cette semaine"}>{isHebrew ? "השבוע" : "Cette semaine"}</option>
          <option value={isHebrew ? "לא דחוף" : "Pas urgent"}>{isHebrew ? "לא דחוף" : "Pas urgent"}</option>
        </select>

        <textarea
          name="details"
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder={
            isHebrew
              ? "פרטים נוספים (מה צריך? כמה יחידות? אפשר לצרף תמונה בוואטסאפ)"
              : "Détails (quoi ? combien ? vous pourrez envoyer une photo sur WhatsApp)"
          }
          className="w-full rounded-xl border px-4 py-3"
          dir={isHebrew ? "rtl" : "ltr"}
        />
      </div>

      {/* CTA */}
      <button
        type="submit"
        className="w-full rounded-xl bg-emerald-600 py-4 font-semibold text-white hover:bg-emerald-700"
      >
        {isHebrew ? "שלח לוואטסאפ" : "Envoyer sur WhatsApp"}
      </button>

      <p className="text-center text-xs text-slate-500">
        {isHebrew ? "אין תשלום בשלב זה" : "Aucun paiement à ce stade"}
      </p>

      {/* Mini FAQ sous le bouton (réduit les hésitations) */}
      <div className="rounded-xl border bg-slate-50 p-4 text-xs text-slate-700 space-y-2">
        <div className="font-semibold">{isHebrew ? "שאלות קצרות" : "Mini FAQ"}</div>

        <div>
          <span className="font-semibold">
            {isHebrew ? "האם זה מחייב?" : "Est-ce engageant ?"}
          </span>{" "}
          {isHebrew ? "לא. אתה מקבל הכוונה/הערכה ואז מחליט." : "Non. Tu reçois une estimation/orientation puis tu décides."}
        </div>

        <div>
          <span className="font-semibold">
            {isHebrew ? "אפשר לשלוח תמונות?" : "Puis-je envoyer des photos ?"}
          </span>{" "}
          {isHebrew ? "כן, מיד אחרי שליחת ההודעה." : "Oui, juste après l’envoi du message."}
        </div>

        <div>
          <span className="font-semibold">
            {isHebrew ? "זמן מענה?" : "Délai de réponse ?"}
          </span>{" "}
          {isHebrew ? "בדרך כלל באותו יום (תלוי בשעה ובעומס)." : "Souvent dans la journée (selon l’heure et la charge)."}
        </div>
      </div>

      {/* (Option) Aperçu message — utile pour confiance */}
      <details className="rounded-xl border bg-white p-4">
        <summary className="cursor-pointer text-xs font-semibold text-slate-700">
          {isHebrew ? "תצוגת ההודעה (WhatsApp)" : "Aperçu du message (WhatsApp)"}
        </summary>
        <pre className="mt-3 whitespace-pre-wrap text-xs text-slate-700">{message}</pre>
        <a
          href={waLink}
          className="mt-3 inline-flex w-full items-center justify-center rounded-lg border bg-slate-50 px-4 py-2 text-xs font-semibold hover:bg-slate-100"
        >
          {isHebrew ? "לפתוח בוואטסאפ" : "Ouvrir sur WhatsApp"}
        </a>
      </details>
    </form>
  );
}
