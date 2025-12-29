// app/[locale]/contact/page.tsx
import Link from "next/link";
import { isLocale, type Locale, t } from "../_i18n";
import SeoJsonLd from "../_seo/SeoJsonLd";
import { buildMetadata } from "../_seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  return buildMetadata({
    locale,
    title: locale === "he" ? "יצירת קשר" : "Contact",
    description:
      locale === "he"
        ? "שאלה או בקשה? בחרו את הדרך הנוחה: טופס קצר, וואטסאפ או שיחה."
        : "Une question ou une demande ? Choisissez le plus simple : formulaire, WhatsApp ou appel.",
    pathname: "/contact",
  });
}

const WHATSAPP_PHONE_INTL = "972585360510";
const WHATSAPP_TEXT_FR =
  "Bonjour, je souhaite demander une estimation (STaM). Ville : [ ] • Produit : [ ] • Urgence : [ ] • Détails : ";
const WHATSAPP_TEXT_HE =
  "שלום, אני רוצה לבקש הערכה בנושא סת״ם. עיר: [ ] • מוצר: [ ] • דחיפות: [ ] • פרטים: ";

function buildWaLink(locale: Locale) {
  const text = locale === "he" ? WHATSAPP_TEXT_HE : WHATSAPP_TEXT_FR;
  return `https://wa.me/${WHATSAPP_PHONE_INTL}?text=${encodeURIComponent(text)}`;
}

const PHONE_IL_DISPLAY = "058-536-0510";
const PHONE_IL_TEL = "+972585360510";

const PHONE_FR_DISPLAY = "+33 1 77 47 32 45";
const PHONE_FR_TEL = "+33177473245";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const tr = t(locale);
  const isHebrew = locale === "he";

  const waLink = buildWaLink(locale);

  return (
    <main
      className="min-h-screen bg-white text-slate-900"
      dir={isHebrew ? "rtl" : "ltr"}
    >
      <SeoJsonLd locale={locale} pathname="/contact" />

      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-emerald-700">
              {isHebrew ? "מענה ברור ומסודר" : "Réponse claire & structurée"}
            </p>

            <h1 className="text-3xl font-semibold">
              {isHebrew ? "יצירת קשר" : "Contact"}
            </h1>

            <p className="max-w-2xl text-slate-600">
              {isHebrew
                ? "יש שאלה? רוצים הערכה או בדיקה? הדרך הכי מהירה היא למלא בקשה קצרה (30 שנ׳) — ואז נקבל את כל הפרטים כדי לענות בדיוק."
                : "Une question ? Besoin d’une estimation ou d’une vérification ? Le plus rapide est de remplir une courte demande (30 sec) — on aura les bons détails pour répondre précisément."}
            </p>

            {/* Primary CTA */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}/commander`}
                className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-black"
              >
                {tr.cta.commanderOnline}
              </Link>

              <a
                href={waLink}
                className="rounded-xl border bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
                rel="noreferrer"
                target="_blank"
              >
                {isHebrew ? "וואטסאפ" : "WhatsApp"}
              </a>

              <a
                href={`tel:${PHONE_IL_TEL}`}
                className="rounded-xl border bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                {isHebrew ? "להתקשר (ישראל)" : "Appeler (Israël)"}
              </a>

              <a
                href={`tel:${PHONE_FR_TEL}`}
                className="rounded-xl border bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                {isHebrew ? "להתקשר (צרפת)" : "Appeler (France)"}
              </a>
            </div>

            {/* Info block: phones + response time */}
            <div className="mt-4 rounded-2xl border bg-slate-50 p-4 text-xs text-slate-700">
              <div className="grid gap-2 sm:grid-cols-3">
                <div>
                  <div className="font-semibold">
                    {isHebrew ? "טלפון (ישראל)" : "Téléphone (Israël)"}
                  </div>
                  <div className="mt-1">{PHONE_IL_DISPLAY}</div>
                </div>

                <div>
                  <div className="font-semibold">
                    {isHebrew ? "טלפון (צרפת)" : "Téléphone (France)"}
                  </div>
                  <div className="mt-1">{PHONE_FR_DISPLAY}</div>
                </div>

                <div>
                  <div className="font-semibold">
                    {isHebrew ? "זמן תגובה" : "Délai de réponse"}
                  </div>
                  <div className="mt-1">
                    {isHebrew
                      ? "בדרך כלל באותו יום (תלוי בעומס)."
                      : "Souvent dans la journée (selon l’heure et la charge)."}
                  </div>
                </div>
              </div>

              <div className="mt-3 text-slate-600">
                {isHebrew
                  ? "דחוף? עדיף שיחה. לא דחוף? טופס/וואטסאפ ייתן מענה מדויק יותר."
                  : "Urgence ? Un appel est préférable. Sinon, le formulaire/WhatsApp permet une réponse plus précise."}
              </div>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              {isHebrew
                ? "אין תשלום בשלב זה. אפשר לשלוח תמונה אחרי מילוי הבקשה או בוואטסאפ."
                : "Aucun paiement à ce stade. Vous pourrez envoyer une photo après la demande, ou sur WhatsApp."}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-5 py-10 md:grid-cols-3">
          {/* Card 1: Quick paths */}
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">
              {isHebrew ? "הדרך הכי מהירה" : "Le plus rapide"}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {isHebrew
                ? "כדי לחסוך הלוך-ושוב — הטופס קצר ואוסף את הפרטים החשובים."
                : "Pour éviter les allers-retours, le formulaire collecte les infos essentielles."}
            </p>

            <div className="mt-4 space-y-2">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-sm font-semibold">
                  {isHebrew ? "✅ בקשה (30 שנ׳)" : "✅ Demande (30 sec)"}
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  {isHebrew
                    ? "קטגוריה, עיר, דחיפות ותיאור קצר."
                    : "Catégorie, ville, urgence, description courte."}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-sm font-semibold">
                  {isHebrew ? "✅ וואטסאפ" : "✅ WhatsApp"}
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  {isHebrew
                    ? "אפשר לצרף תמונות/פרטים בקלות."
                    : "Facile pour envoyer une photo ou des détails."}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-sm font-semibold">
                  {isHebrew ? "✅ שיחה" : "✅ Appel"}
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  {isHebrew
                    ? "לטיפול דחוף או כשצריך להסביר מהר."
                    : "Pour l’urgence ou quand il faut clarifier vite."}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Info */}
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">
              {isHebrew ? "אזורי שירות" : "Zones de service"}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {isHebrew
                ? "פעילות במיוחד באזורים הבאים, וגם בשאר הארץ בהתאם לזמינות."
                : "Service actif notamment dans les zones suivantes, et ailleurs en Israël selon disponibilité."}
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="rounded-xl bg-slate-50 p-3">
                {isHebrew ? "נתניה" : "Netanya"}
              </li>
              <li className="rounded-xl bg-slate-50 p-3">
                {isHebrew ? "ירושלים" : "Jérusalem"}
              </li>
              <li className="rounded-xl bg-slate-50 p-3">
                {isHebrew ? "בית שמש" : "Beit Shemesh"}
              </li>
            </ul>

            <p className="mt-4 text-xs text-slate-500">
              {isHebrew
                ? "אם אתם בעיר אחרת — ציינו זאת בבקשה."
                : "Si vous êtes dans une autre ville, indiquez-la simplement dans la demande."}
            </p>
          </div>

          {/* Card 3: What to include */}
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">
              {isHebrew ? "מה לכתוב כדי שנענה בדיוק" : "Quoi écrire pour une réponse précise"}
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="rounded-xl bg-slate-50 p-3">
                {isHebrew
                  ? "קטגוריה: מזוזות / תפילין / ספר תורה / כתיבה על קלף"
                  : "Catégorie : Mézouzot / Téfilines / Séfer Torah / écriture sur klaf"}
              </li>
              <li className="rounded-xl bg-slate-50 p-3">
                {isHebrew ? "עיר + דחיפות" : "Ville + urgence"}
              </li>
              <li className="rounded-xl bg-slate-50 p-3">
                {isHebrew
                  ? "תיאור קצר + (אם יש) תמונה"
                  : "Description courte + (si possible) photo"}
              </li>
              <li className="rounded-xl bg-slate-50 p-3">
                {isHebrew
                  ? "מה הרמה הרצויה: מהודר / מחמיר"
                  : "Niveau souhaité : mehadrin / strict"}
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={`/${locale}/commander`}
                className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-black"
              >
                {isHebrew ? "לפתוח טופס קצר" : "Ouvrir le formulaire"}
              </Link>

              <Link
                href={`/${locale}`}
                className="rounded-xl border bg-white px-5 py-3 text-center text-sm font-semibold hover:bg-slate-50"
              >
                {isHebrew ? "חזרה לדף הבית" : "Retour à l’accueil"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTNOTE */}
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-5 py-8">
          <p className="text-xs text-slate-500">
            {isHebrew
              ? "הערה: מרכזהסת״ם מרכז תיאום. הבדיקה/כתיבה מתבצעת ע״י סופר מוסמך (בהתאם לזמינות)."
              : "Note : Merkaz HaSTaM est un centre de coordination. La vérification/écriture est réalisée par un sofer qualifié (selon disponibilité)."}
          </p>
        </div>
      </section>
    </main>
  );
}
