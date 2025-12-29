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

  // Accent cohérent avec /commander/page.tsx
  const accent =
    locale === "he" ? "bg-indigo-600 hover:bg-indigo-700" : "bg-slate-900 hover:bg-black";

  const accentSolid =
    locale === "he" ? "bg-indigo-600 border-indigo-600 text-white" : "bg-slate-900 border-slate-900 text-white";

  // Radios
  const [productId, setProductId] = useState<ProductId>("mezouza");

  // Champs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [qty, setQty] = useState<string>("1");
  const [urgency, setUrgency] = useState("");
  const [details, setDetails] = useState("");

  const NA_FR = "Non renseigné";
  const NA_HE = "—";

  // Progress (3 étapes)
  const step = useMemo(() => {
    const hasStep1 = !!productId;
    const hasStep2 =
      name.trim().length > 1 &&
      phone.trim().length > 3 &&
      city.trim().length > 1 &&
      qty.trim().length > 0;

    const hasStep3 = details.trim().length >= 10;

    if (hasStep1 && hasStep2 && hasStep3) return 3;
    if (hasStep1 && hasStep2) return 2;
    return 1;
  }, [productId, name, phone, city, qty, details]);

  const message = useMemo(() => {
    const product = productLabel(locale, productId);

    const safeCity = city.trim() ? city.trim() : isHebrew ? NA_HE : NA_FR;
    const safeUrgency = urgency.trim() ? urgency.trim() : isHebrew ? NA_HE : NA_FR;
    const safeName = name.trim() ? name.trim() : isHebrew ? NA_HE : NA_FR;
    const safePhone = phone.trim() ? phone.trim() : isHebrew ? NA_HE : NA_FR;
    const safeQty = qty.trim() ? qty.trim() : isHebrew ? NA_HE : NA_FR;
    const safeDetails = details.trim() ? details.trim() : isHebrew ? NA_HE : NA_FR;

    if (isHebrew) {
      return (
        `שלום, אני רוצה לבקש הערכה בנושא סת״ם.\n\n` +
        `מוצר/שירות: ${product}\n` +
        `כמות: ${safeQty}\n` +
        `עיר: ${safeCity}\n` +
        `דחיפות: ${safeUrgency}\n` +
        `שם: ${safeName}\n` +
        `טלפון: ${safePhone}\n\n` +
        `פרטים:\n${safeDetails}\n\n` +
        `*אפשר לשלוח תמונות כאן מיד אחרי ההודעה.*`
      );
    }

    return (
      `Bonjour, je souhaite demander une estimation (STaM).\n\n` +
      `• Produit/Service : ${product}\n` +
      `• Quantité : ${safeQty}\n` +
      `• Ville : ${safeCity}\n` +
      `• Urgence : ${safeUrgency}\n` +
      `• Nom : ${safeName}\n` +
      `• Téléphone : ${safePhone}\n\n` +
      `Détails :\n${safeDetails}\n\n` +
      `*Vous pouvez envoyer des photos sur WhatsApp juste après ce message.*`
    );
  }, [isHebrew, locale, productId, city, qty, urgency, name, phone, details]);

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
      aria-label={isHebrew ? "טופס בקשה" : "Formulaire de demande"}
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
            className={`h-2 rounded-full transition-all ${locale === "he" ? "bg-indigo-600" : "bg-slate-900"}`}
            style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
          />
        </div>

        <p className="text-xs text-slate-500">
          {step === 1
            ? isHebrew
              ? "בחר מוצר כדי להתחיל."
              : "Choisissez le produit pour commencer."
            : step === 2
              ? isHebrew
                ? "מלא שם/טלפון/עיר/כמות — ואז אפשר לשלוח."
                : "Renseignez nom / téléphone / ville / quantité, puis vous pouvez envoyer."
              : isHebrew
                ? "מושלם. אפשר לשלוח."
                : "Parfait. Vous pouvez envoyer."}
        </p>
      </div>

      {/* Choix produit */}
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
                  checked ? accentSolid : "bg-white hover:bg-slate-50"
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
            : "Astuce : si vous avez des photos/vidéo, envoyez-les juste après le message."}
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

        <input
          name="qty"
          required
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          placeholder={isHebrew ? "כמות" : "Quantité"}
          className="w-full rounded-xl border px-4 py-3"
          dir={isHebrew ? "rtl" : "ltr"}
          inputMode="numeric"
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
          <option value={isHebrew ? "היום" : "Aujourd’hui"}>
            {isHebrew ? "היום" : "Aujourd’hui"}
          </option>
          <option value="24–48h">24–48h</option>
          <option value={isHebrew ? "השבוע" : "Cette semaine"}>
            {isHebrew ? "השבוע" : "Cette semaine"}
          </option>
          <option value={isHebrew ? "לא דחוף" : "Pas urgent"}>
            {isHebrew ? "לא דחוף" : "Pas urgent"}
          </option>
        </select>

        <textarea
          name="details"
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder={
            isHebrew
              ? "פרטים נוספים (מה צריך? מצב? אפשר לצרף תמונה בוואטסאפ)"
              : "Détails (quoi ? modèle/format ? état ? Vous pourrez envoyer une photo sur WhatsApp)"
          }
          className="w-full rounded-xl border px-4 py-3"
          dir={isHebrew ? "rtl" : "ltr"}
        />
      </div>

      {/* CTA */}
      <button
        type="submit"
        className={`w-full rounded-xl py-4 font-semibold text-white transition ${accent}`}
      >
        {isHebrew ? "שלח לוואטסאפ" : "Envoyer sur WhatsApp"}
      </button>

      <p className="text-center text-xs text-slate-500">
        {isHebrew ? "אין תשלום בשלב זה" : "Aucun paiement à ce stade"}
      </p>

      {/* Mini FAQ */}
      <div className="rounded-xl border bg-slate-50 p-4 text-xs text-slate-700 space-y-2">
        <div className="font-semibold">{isHebrew ? "שאלות קצרות" : "Mini FAQ"}</div>

        <div>
          <span className="font-semibold">
            {isHebrew ? "האם זה מחייב?" : "Est-ce engageant ?"}
          </span>{" "}
          {isHebrew
            ? "לא. אתה מקבל הכוונה/הערכה ואז מחליט."
            : "Non. Vous recevez une estimation/orientation, puis vous décidez."}
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
          {isHebrew
            ? "בדרך כלל באותו יום (תלוי בשעה ובעומס)."
            : "Souvent dans la journée (selon l’heure et la charge)."}
        </div>
      </div>

      {/* Aperçu WhatsApp */}
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
