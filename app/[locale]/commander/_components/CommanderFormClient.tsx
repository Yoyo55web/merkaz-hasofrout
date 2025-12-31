"use client";

import { useMemo, useState } from "react";

type Locale = "fr" | "he";

const PHONE = "972585360510";

const PRODUCTS = [
  { id: "mezouza", fr: "Mézouzot", he: "מזוזות" },
  { id: "tefilin", fr: "Téfilines", he: "תפילין" },
  { id: "sefer", fr: "Séfer Torah", he: "ספר תורה" },
  { id: "meguila", fr: "Méguilat Esther", he: "מגילת אסתר" },
  { id: "pitoum", fr: "Pitoum Hakétoret", he: "פיטום הקטורת" },
  { id: "parchemin", fr: "Écriture sur parchemin", he: "כתיבה על קלף" },
  { id: "pack", fr: "Pack", he: "חבילה" },
] as const;

type ProductId = (typeof PRODUCTS)[number]["id"];

function productLabel(locale: Locale, id: ProductId) {
  const p = PRODUCTS.find((x) => x.id === id)!;
  return locale === "he" ? p.he : p.fr;
}

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

/* ----------------------------- Parchemin subtypes ----------------------------- */

type ParcheminType = "" | "ketouba" | "birkat" | "autre";

function parcheminTypeLabel(locale: Locale, type: ParcheminType) {
  if (locale === "he") {
    switch (type) {
      case "ketouba":
        return "כתובה";
      case "birkat":
        return "ברכת הבית";
      case "autre":
        return "אחר (בהתאמה אישית)";
      default:
        return "סוג כתיבה";
    }
  }

  switch (type) {
    case "ketouba":
      return "Kétouba";
    case "birkat":
      return "Birkat Habayit";
    case "autre":
      return "Autre (sur-mesure)";
    default:
      return "Type d’écriture";
  }
}

/* --------------------------------- Packs --------------------------------- */

type PackId = "" | "bar" | "mariage" | "maison";
type BarOption = "rachis" | "rachis_plus";
type MaisonOption = "" | "5" | "10";
type MariageMezuzotCount = "" | "2" | "3" | "4";

function packLabel(locale: Locale, id: PackId) {
  if (locale === "he") {
    switch (id) {
      case "bar":
        return "חבילת בר מצווה";
      case "mariage":
        return "חבילת חתונה";
      case "maison":
        return "חבילת בית";
      default:
        return "בחר חבילה";
    }
  }
  switch (id) {
    case "bar":
      return "Pack Bar Mitzvah";
    case "mariage":
      return "Pack Mariage";
    case "maison":
      return "Pack Maison";
    default:
      return "Choisir un pack";
  }
}

/* ------------------------------- Multi items ------------------------------ */
/**
 * ✅ En mode multi, on autorise aussi "pack" comme item.
 * ✅ Et on ajoute les sous-options de "parchemin" en multi (ketouba/birkat/autre + texte).
 */
type LineItem =
  | {
      kind: "product";
      productId: Exclude<ProductId, "pack">;
      qty: string;

      // ✅ utile seulement si productId === "parchemin"
      parcheminType?: ParcheminType;
      parcheminCustom?: string;
    }
  | {
      kind: "pack";
      packId: PackId;
      barOption: BarOption;
      maisonOption: MaisonOption;
      mariageCount: MariageMezuzotCount;
      qty: string; // “1 pack” en général
    };

const DEFAULT_PRODUCT_ITEM: LineItem = {
  kind: "product",
  productId: "mezouza",
  qty: "1",
  parcheminType: "",
  parcheminCustom: "",
};

const DEFAULT_PACK_ITEM: LineItem = {
  kind: "pack",
  packId: "mariage",
  barOption: "rachis_plus",
  maisonOption: "",
  mariageCount: "3",
  qty: "1",
};

export default function CommanderFormClient({ locale }: { locale: Locale }) {
  const isHebrew = locale === "he";

  // Accent cartes radios
  const accentSolid =
    locale === "he"
      ? "bg-indigo-600 border-indigo-600 text-white"
      : "bg-slate-900 border-slate-900 text-white";

  // ✅ Bouton WhatsApp vert
  const waBtn = "bg-green-600 hover:bg-green-700";

  // Choix principal (mode “produit unique”)
  const [productId, setProductId] = useState<ProductId>("mezouza");

  // ✅ Mode multi
  const [multi, setMulti] = useState(false);
  const [items, setItems] = useState<LineItem[]>([{ ...DEFAULT_PRODUCT_ITEM }]);

  // Parchemin (uniquement en mode produit unique)
  const [parcheminType, setParcheminType] = useState<ParcheminType>("");
  const [parcheminCustom, setParcheminCustom] = useState("");

  // Packs (uniquement en mode produit unique)
  const [packId, setPackId] = useState<PackId>("");
  const [barOption, setBarOption] = useState<BarOption>("rachis_plus");
  const [maisonOption, setMaisonOption] = useState<MaisonOption>("");
  const [mariageCount, setMariageCount] = useState<MariageMezuzotCount>("3");

  // Champs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // facultatif
  const [city, setCity] = useState("");
  const [qty, setQty] = useState<string>("1");
  const [details, setDetails] = useState(""); // facultatif

  const NA_FR = "Non renseigné";
  const NA_HE = "—";

  /* ------------------------------- UX actions ------------------------------ */

  function onToggleMulti(next: boolean) {
    setMulti(next);

    // Quand on passe en multi: on masque “produit unique”, donc on reset ses sous-champs.
    if (next) {
      setPackId("");
      setParcheminType("");
      setParcheminCustom("");
      if (items.length === 0) setItems([{ ...DEFAULT_PRODUCT_ITEM }]);
    }
  }

  function onChangeProduct(next: ProductId) {
    setProductId(next);

    // reset sous-champs selon le choix
    if (next !== "parchemin") {
      setParcheminType("");
      setParcheminCustom("");
    }
    if (next !== "pack") {
      setPackId("");
      setBarOption("rachis_plus");
      setMaisonOption("");
      setMariageCount("3");
    }
  }

  function addItemProduct() {
    setItems((prev) => [...prev, { ...DEFAULT_PRODUCT_ITEM }]);
  }

  function addItemPack() {
    setItems((prev) => [...prev, { ...DEFAULT_PACK_ITEM }]);
  }

  function removeItem(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  function updateItem(index: number, next: LineItem) {
    setItems((prev) => prev.map((it, i) => (i === index ? next : it)));
  }

  /* -------------------------------- Progress ------------------------------- */

  const step = useMemo(() => {
    const hasStep1 = multi ? items.length > 0 : !!productId;

    const hasBasics = name.trim().length > 1 && city.trim().length > 1;

    const hasProducts = multi
      ? items.length > 0 && items.every((it) => it.qty.trim().length > 0)
      : qty.trim().length > 0;

    if (hasStep1 && hasBasics && hasProducts) return 3;
    if (hasStep1 && hasBasics) return 2;
    return 1;
  }, [multi, items, productId, name, city, qty]);

  /* -------------------------------- Message -------------------------------- */

  function formatSingleSelection(): string {
    // Produit unique
    if (productId !== "pack") {
      const product = productLabel(locale, productId);
      const safeQty = qty.trim() ? qty.trim() : "1";

      let extraLine = "";
      if (productId === "parchemin") {
        const typeText =
          parcheminType === "autre"
            ? (parcheminCustom.trim() || (isHebrew ? NA_HE : NA_FR))
            : parcheminTypeLabel(locale, parcheminType);

        extraLine = isHebrew
          ? `סוג כתיבה: ${typeText}\n`
          : `• Type d’écriture : ${typeText}\n`;
      }

      return isHebrew
        ? `מוצר/שירות: ${product}\n${extraLine}כמות: ${safeQty}\n`
        : `• Produit/Service : ${product}\n${extraLine}• Quantité : ${safeQty}\n`;
    }

    // Pack (produit unique)
    const packName = packLabel(locale, packId);
    const safeQty = qty.trim() ? qty.trim() : "1";

    if (isHebrew) {
      let line = `חבילה: ${packName}\nכמות: ${safeQty}\n`;
      if (packId === "bar") {
        line +=
          barOption === "rachis_plus"
            ? "כולל: תפילין (רש״י) + טלית + נרתיק טלית + נרתיק תפילין\n"
            : "כולל: תפילין (רש״י) + טלית\n";
      }
      if (packId === "mariage") {
        line += `כולל: כתובה (מותאמת אישית) + ${mariageCount || "3"} מזוזות\n`;
      }
      if (packId === "maison") {
        line +=
          maisonOption === "10"
            ? "כולל: 10 מזוזות (עם הנחה)\n"
            : maisonOption === "5"
              ? "כולל: 5 מזוזות (עם הנחה)\n"
              : "כולל: מזוזות (חבילה)\n";
      }
      return line;
    }

    let line = `• Pack : ${packName}\n• Quantité : ${safeQty}\n`;
    if (packId === "bar") {
      line +=
        barOption === "rachis_plus"
          ? "• Inclus : Téfilines (Rachi) + Talit + Pochette talit + Pochette téfilines\n"
          : "• Inclus : Téfilines (Rachi) + Talit\n";
    }
    if (packId === "mariage") {
      line += `• Inclus : Kétouba (sur-mesure) + ${mariageCount || "3"} Mézouzot\n`;
    }
    if (packId === "maison") {
      line +=
        maisonOption === "10"
          ? "• Inclus : Pack 10 Mézouzot (avec remise)\n"
          : maisonOption === "5"
            ? "• Inclus : Pack 5 Mézouzot (avec remise)\n"
            : "• Inclus : Mézouzot (pack)\n";
    }
    return line;
  }

  function formatMultiSelection(): string {
    const lines = items.map((it) => {
      const q = it.qty.trim() || "1";

      if (it.kind === "product") {
        if (it.productId === "parchemin") {
          const typeText =
            it.parcheminType === "autre"
              ? (it.parcheminCustom?.trim() || (isHebrew ? NA_HE : NA_FR))
              : parcheminTypeLabel(locale, (it.parcheminType ?? "") as ParcheminType);

          return `- ${productLabel(locale, it.productId)} (${typeText}) × ${q}`;
        }

        return `- ${productLabel(locale, it.productId)} × ${q}`;
      }

      // pack
      const pName = packLabel(locale, it.packId);

      if (it.packId === "mariage") {
        return isHebrew
          ? `- ${pName}: כתובה (מותאמת אישית) + ${it.mariageCount || "3"} מזוזות × ${q}`
          : `- ${pName} : Kétouba (sur-mesure) + ${it.mariageCount || "3"} Mézouzot × ${q}`;
      }

      if (it.packId === "bar") {
        const desc = isHebrew
          ? it.barOption === "rachis_plus"
            ? "תפילין (רש״י) + טלית + נרתיקים"
            : "תפילין (רש״י) + טלית"
          : it.barOption === "rachis_plus"
            ? "Téfilines (Rachi) + Talit + Pochettes"
            : "Téfilines (Rachi) + Talit";

        return `- ${pName}: ${desc} × ${q}`;
      }

      if (it.packId === "maison") {
        const desc = isHebrew
          ? it.maisonOption === "10"
            ? "10 מזוזות (עם הנחה)"
            : it.maisonOption === "5"
              ? "5 מזוזות (עם הנחה)"
              : "מזוזות (חבילה)"
          : it.maisonOption === "10"
            ? "Pack 10 Mézouzot (avec remise)"
            : it.maisonOption === "5"
              ? "Pack 5 Mézouzot (avec remise)"
              : "Mézouzot (pack)";

        return `- ${pName}: ${desc} × ${q}`;
      }

      return `- ${pName} × ${q}`;
    });

    return isHebrew
      ? `מוצרים/שירותים:\n${lines.join("\n")}\n`
      : `• Produits/Services :\n${lines.join("\n")}\n`;
  }

  const message = useMemo(() => {
    const safeCity = city.trim() ? city.trim() : isHebrew ? NA_HE : NA_FR;
    const safeName = name.trim() ? name.trim() : isHebrew ? NA_HE : NA_FR;
    const safePhone = phone.trim();
    const safeDetails = details.trim();

    const selectionBlock = multi ? formatMultiSelection() : formatSingleSelection();

    const contactBlock = isHebrew
      ? `עיר: ${safeCity}\nשם: ${safeName}\n` + (safePhone ? `טלפון: ${safePhone}\n` : "")
      : `• Ville : ${safeCity}\n• Nom : ${safeName}\n` + (safePhone ? `• Téléphone : ${safePhone}\n` : "");

    const detailsBlock = safeDetails
      ? isHebrew
        ? `\nפרטים:\n${safeDetails}`
        : `\nDétails (facultatif) :\n${safeDetails}`
      : "";

    return isHebrew
      ? `שלום, אני רוצה לבקש הערכה בנושא סת״ם.\n\n${selectionBlock}${contactBlock}${detailsBlock}`
      : `Bonjour, je souhaite demander une estimation (STaM).\n\n${selectionBlock}${contactBlock}${detailsBlock}`;
  }, [
    multi,
    items,
    productId,
    qty,
    locale,
    isHebrew,
    city,
    name,
    phone,
    details,
    parcheminType,
    parcheminCustom,
    packId,
    barOption,
    maisonOption,
    mariageCount,
  ]);

  const waLink = useMemo(() => buildWhatsAppLink(message), [message]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // ✅ Enregistrer le lead AVANT la redirection WhatsApp
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "commander",
          locale,
          multi,
          productId,
          items,
          packId,
          mariageCount,
          barOption,
          maisonOption,
          parcheminType,
          parcheminCustom,
          name,
          phone,
          city,
          qty,
          details,
          message,
          waLink,
          createdAt: new Date().toISOString(),
        }),
      });
    } catch {
      // On ne bloque pas WhatsApp si l’enregistrement échoue
    }

    window.location.href = waLink;
  }

  /* ---------------------------------- UI ---------------------------------- */

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
            className={`h-2 rounded-full transition-all ${
              locale === "he" ? "bg-indigo-600" : "bg-slate-900"
            }`}
            style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
          />
        </div>
      </div>

      {/* ✅ Mode multi en premier (clair) */}
      <div className="rounded-xl border bg-slate-50 p-4">
        <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
          <input
            type="checkbox"
            checked={multi}
            onChange={(e) => onToggleMulti(e.target.checked)}
            className="h-4 w-4"
          />
          {isHebrew ? "אני רוצה כמה מוצרים" : "Je veux plusieurs produits"}
        </label>
        <p className="mt-1 text-xs text-slate-600">
          {isHebrew
            ? "אם מסומן — תראה רשימה של מוצרים/חבילות עם כמות לכל אחד."
            : "Si coché — vous choisissez une liste de produits/packs avec une quantité pour chacun."}
        </p>
      </div>

      {/* ✅ Choix produit unique / pack : uniquement si multi = false */}
      {!multi && (
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
                      onChange={() => onChangeProduct(p.id)}
                      className="h-4 w-4"
                      aria-label={isHebrew ? p.he : p.fr}
                    />
                    <span className="font-semibold">{isHebrew ? p.he : p.fr}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {/* ✅ Pack (produit unique) */}
      {!multi && productId === "pack" && (
        <div className="grid gap-3">
          <select
            name="packId"
            required
            value={packId}
            onChange={(e) => setPackId(e.target.value as PackId)}
            className="w-full rounded-xl border px-4 py-3"
            dir={isHebrew ? "rtl" : "ltr"}
          >
            <option value="">{packLabel(locale, "")}</option>
            <option value="bar">{packLabel(locale, "bar")}</option>
            <option value="mariage">{packLabel(locale, "mariage")}</option>
            <option value="maison">{packLabel(locale, "maison")}</option>
          </select>

          {packId === "bar" && (
            <select
              name="barOption"
              value={barOption}
              onChange={(e) => setBarOption(e.target.value as BarOption)}
              className="w-full rounded-xl border px-4 py-3"
              dir={isHebrew ? "rtl" : "ltr"}
            >
              <option value="rachis_plus">
                {isHebrew
                  ? "תפילין (רש״י) + טלית + נרתיק טלית + נרתיק תפילין"
                  : "Téfilines (Rachi) + Talit + Pochette talit + Pochette téfilines"}
              </option>
              <option value="rachis">
                {isHebrew ? "תפילין (רש״י) + טלית" : "Téfilines (Rachi) + Talit"}
              </option>
            </select>
          )}

          {packId === "mariage" && (
            <select
              name="mariageCount"
              required
              value={mariageCount}
              onChange={(e) => setMariageCount(e.target.value as MariageMezuzotCount)}
              className="w-full rounded-xl border px-4 py-3"
              dir={isHebrew ? "rtl" : "ltr"}
            >
              <option value="">
                {isHebrew ? "בחר מספר מזוזות" : "Choisir le nombre de Mézouzot"}
              </option>
              <option value="2">
                {isHebrew
                  ? "כתובה (מותאמת אישית) + 2 מזוזות"
                  : "Kétouba (sur-mesure) + 2 Mézouzot"}
              </option>
              <option value="3">
                {isHebrew
                  ? "כתובה (מותאמת אישית) + 3 מזוזות"
                  : "Kétouba (sur-mesure) + 3 Mézouzot"}
              </option>
              <option value="4">
                {isHebrew
                  ? "כתובה (מותאמת אישית) + 4 מזוזות"
                  : "Kétouba (sur-mesure) + 4 Mézouzot"}
              </option>
            </select>
          )}

          {packId === "maison" && (
            <select
              name="maisonOption"
              required
              value={maisonOption}
              onChange={(e) => setMaisonOption(e.target.value as MaisonOption)}
              className="w-full rounded-xl border px-4 py-3"
              dir={isHebrew ? "rtl" : "ltr"}
            >
              <option value="">{isHebrew ? "בחר כמות" : "Choisir la quantité"}</option>
              <option value="5">Pack 5 Mézouzot (avec remise)</option>
              <option value="10">Pack 10 Mézouzot (avec remise)</option>
            </select>
          )}
        </div>
      )}

      {/* ✅ Parchemin (produit unique) */}
      {!multi && productId === "parchemin" && (
        <div className="grid gap-3">
          <select
            name="parcheminType"
            required
            value={parcheminType}
            onChange={(e) => setParcheminType(e.target.value as ParcheminType)}
            className="w-full rounded-xl border px-4 py-3"
            dir={isHebrew ? "rtl" : "ltr"}
          >
            <option value="">{isHebrew ? "סוג כתיבה" : "Type d’écriture"}</option>
            <option value="ketouba">{parcheminTypeLabel(locale, "ketouba")}</option>
            <option value="birkat">{parcheminTypeLabel(locale, "birkat")}</option>
            <option value="autre">{parcheminTypeLabel(locale, "autre")}</option>
          </select>

          {parcheminType === "autre" && (
            <input
              name="parcheminCustom"
              required
              value={parcheminCustom}
              onChange={(e) => setParcheminCustom(e.target.value)}
              placeholder={
                isHebrew
                  ? "תאר בקצרה מה אתה רוצה (בהתאמה אישית)"
                  : "Décrivez ce que vous souhaitez (sur-mesure)"
              }
              className="w-full rounded-xl border px-4 py-3"
              dir={isHebrew ? "rtl" : "ltr"}
            />
          )}
        </div>
      )}

      {/* ✅ Liste multi (inclut aussi Pack + sous-options parchemin) */}
      {multi && (
        <div className="rounded-xl border bg-slate-50 p-4 space-y-3">
          <div className="text-xs font-semibold text-slate-700">
            {isHebrew ? "Liste de choix" : "Liste des choix"}
          </div>

          {items.map((it, idx) => {
            const qtyValue = it.qty;

            return (
              <div key={idx} className="space-y-2 rounded-lg border bg-white p-3">
                {/* Type item: produit / pack */}
                <div className="grid grid-cols-3 gap-2">
                  <select
                    value={it.kind}
                    onChange={(e) => {
                      const kind = e.target.value as "product" | "pack";
                      if (kind === "product") {
                        updateItem(idx, {
                          kind: "product",
                          productId: "mezouza",
                          qty: "1",
                          parcheminType: "",
                          parcheminCustom: "",
                        });
                      } else {
                        updateItem(idx, { ...DEFAULT_PACK_ITEM, qty: "1" });
                      }
                    }}
                    className="col-span-2 w-full rounded-lg border px-3 py-2"
                    dir={isHebrew ? "rtl" : "ltr"}
                  >
                    <option value="product">{isHebrew ? "מוצר" : "Produit"}</option>
                    <option value="pack">{isHebrew ? "חבילה" : "Pack"}</option>
                  </select>

                  <input
                    value={qtyValue}
                    onChange={(e) => {
                      const q = e.target.value;
                      updateItem(idx, { ...it, qty: q } as LineItem);
                    }}
                    placeholder={isHebrew ? "כמות" : "Qté"}
                    className="w-full rounded-lg border px-3 py-2"
                    inputMode="numeric"
                    dir={isHebrew ? "rtl" : "ltr"}
                  />
                </div>

                {it.kind === "product" ? (
                  <div className="space-y-2">
                    <select
                      value={it.productId}
                      onChange={(e) => {
                        const nextProductId = e.target.value as Exclude<ProductId, "pack">;

                        updateItem(idx, {
                          kind: "product",
                          productId: nextProductId,
                          qty: it.qty,
                          parcheminType: nextProductId === "parchemin" ? (it.parcheminType ?? "") : "",
                          parcheminCustom: nextProductId === "parchemin" ? (it.parcheminCustom ?? "") : "",
                        });
                      }}
                      className="w-full rounded-lg border px-3 py-2"
                      dir={isHebrew ? "rtl" : "ltr"}
                    >
                      {PRODUCTS.filter((p) => p.id !== "pack").map((p) => (
                        <option key={p.id} value={p.id}>
                          {isHebrew ? p.he : p.fr}
                        </option>
                      ))}
                    </select>

                    {/* ✅ sous-options parchemin en multi */}
                    {it.productId === "parchemin" && (
                      <div className="space-y-2">
                        <select
                          value={it.parcheminType ?? ""}
                          onChange={(e) =>
                            updateItem(idx, {
                              ...it,
                              parcheminType: e.target.value as ParcheminType,
                              parcheminCustom: e.target.value === "autre" ? (it.parcheminCustom ?? "") : "",
                            })
                          }
                          className="w-full rounded-lg border px-3 py-2"
                          dir={isHebrew ? "rtl" : "ltr"}
                        >
                          <option value="">{isHebrew ? "סוג כתיבה" : "Type d’écriture"}</option>
                          <option value="ketouba">{parcheminTypeLabel(locale, "ketouba")}</option>
                          <option value="birkat">{parcheminTypeLabel(locale, "birkat")}</option>
                          <option value="autre">{parcheminTypeLabel(locale, "autre")}</option>
                        </select>

                        {(it.parcheminType ?? "") === "autre" && (
                          <input
                            value={it.parcheminCustom ?? ""}
                            onChange={(e) =>
                              updateItem(idx, { ...it, parcheminCustom: e.target.value })
                            }
                            placeholder={
                              isHebrew
                                ? "תאר בקצרה מה אתה רוצה (בהתאמה אישית)"
                                : "Décrivez ce que vous souhaitez (sur-mesure)"
                            }
                            className="w-full rounded-lg border px-3 py-2"
                            dir={isHebrew ? "rtl" : "ltr"}
                          />
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <select
                      value={it.packId}
                      onChange={(e) =>
                        updateItem(idx, {
                          ...it,
                          packId: e.target.value as PackId,
                        })
                      }
                      className="w-full rounded-lg border px-3 py-2"
                      dir={isHebrew ? "rtl" : "ltr"}
                    >
                      <option value="bar">{packLabel(locale, "bar")}</option>
                      <option value="mariage">{packLabel(locale, "mariage")}</option>
                      <option value="maison">{packLabel(locale, "maison")}</option>
                    </select>

                    {it.packId === "bar" && (
                      <select
                        value={it.barOption}
                        onChange={(e) =>
                          updateItem(idx, {
                            ...it,
                            barOption: e.target.value as BarOption,
                          })
                        }
                        className="w-full rounded-lg border px-3 py-2"
                        dir={isHebrew ? "rtl" : "ltr"}
                      >
                        <option value="rachis_plus">
                          {isHebrew
                            ? "תפילין (רש״י) + טלית + נרתיקים"
                            : "Téfilines (Rachi) + Talit + Pochettes"}
                        </option>
                        <option value="rachis">
                          {isHebrew ? "תפילין (רש״י) + טלית" : "Téfilines (Rachi) + Talit"}
                        </option>
                      </select>
                    )}

                    {it.packId === "mariage" && (
                      <select
                        value={it.mariageCount}
                        onChange={(e) =>
                          updateItem(idx, {
                            ...it,
                            mariageCount: e.target.value as MariageMezuzotCount,
                          })
                        }
                        className="w-full rounded-lg border px-3 py-2"
                        dir={isHebrew ? "rtl" : "ltr"}
                      >
                        <option value="2">
                          {isHebrew
                            ? "כתובה (מותאמת אישית) + 2 מזוזות"
                            : "Kétouba (sur-mesure) + 2 Mézouzot"}
                        </option>
                        <option value="3">
                          {isHebrew
                            ? "כתובה (מותאמת אישית) + 3 מזוזות"
                            : "Kétouba (sur-mesure) + 3 Mézouzot"}
                        </option>
                        <option value="4">
                          {isHebrew
                            ? "כתובה (מותאמת אישית) + 4 מזוזות"
                            : "Kétouba (sur-mesure) + 4 Mézouzot"}
                        </option>
                      </select>
                    )}

                    {it.packId === "maison" && (
                      <select
                        value={it.maisonOption}
                        onChange={(e) =>
                          updateItem(idx, {
                            ...it,
                            maisonOption: e.target.value as MaisonOption,
                          })
                        }
                        className="w-full rounded-lg border px-3 py-2"
                        dir={isHebrew ? "rtl" : "ltr"}
                      >
                        <option value="5">Pack 5 Mézouzot (avec remise)</option>
                        <option value="10">Pack 10 Mézouzot (avec remise)</option>
                      </select>
                    )}
                  </div>
                )}

                <div className="flex justify-end">
                  {items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem(idx)}
                      className="text-xs font-semibold text-slate-600 hover:underline"
                    >
                      {isHebrew ? "להסיר" : "Supprimer"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={addItemProduct}
              className="w-full rounded-lg border bg-white px-3 py-2 text-xs font-semibold hover:bg-slate-100"
            >
              {isHebrew ? "להוסיף מוצר" : "Ajouter un produit"}
            </button>
            <button
              type="button"
              onClick={addItemPack}
              className="w-full rounded-lg border bg-white px-3 py-2 text-xs font-semibold hover:bg-slate-100"
            >
              {isHebrew ? "להוסיף חבילה" : "Ajouter un pack"}
            </button>
          </div>
        </div>
      )}

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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={isHebrew ? "טלפון (לא חובה)" : "Téléphone (facultatif)"}
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

        {/* Quantité seulement en mode simple (pas multi) */}
        {!multi && (
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
        )}

        <textarea
          name="details"
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder={
            isHebrew
              ? "פרטים נוספים (לא חובה)"
              : "Détails (facultatif) : format, état, dimensions, etc."
          }
          className="w-full rounded-xl border px-4 py-3"
          dir={isHebrew ? "rtl" : "ltr"}
        />
      </div>

      {/* CTA WhatsApp vert */}
      <button
        type="submit"
        className={`w-full rounded-xl py-4 font-semibold text-white transition ${waBtn}`}
      >
        {isHebrew ? "שלח לוואטסאפ" : "Envoyer sur WhatsApp"}
      </button>

      <p className="text-center text-xs text-slate-500">
        {isHebrew ? "אין תשלום בשלב זה" : "Aucun paiement à ce stade"}
      </p>
    </form>
  );
}
