// app/[locale]/mezouzot/page.tsx
import Link from "next/link";
import { isLocale, type Locale } from "../_i18n";
import { buildMetadata } from "../_seo/metadata";
import SeoJsonLd from "../_seo/SeoJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  return buildMetadata({
    locale,
    title: locale === "he" ? "מזוזות" : "Mézouzot",
    description:
      locale === "he"
        ? "הזמנה ותיאום מזוזות כשרות לפי ההלכה — רציני, ברור ודיסקרטי."
        : "Commande et coordination de mézouzot cachères selon la Halakha — sérieux, clair et discret.",
    pathname: "/mezouzot",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const isHebrew = locale === "he";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SeoJsonLd locale={locale} pathname="/mezouzot" />

      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-4xl px-5 py-10 md:py-12">
          <p className="text-xs font-semibold text-emerald-700">
            {isHebrew ? "בחירה נכונה • הידור • התאמה" : "Choix • Hidour • Adaptation"}
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            {isHebrew ? "מזוזות" : "Mézouzot"}
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            {isHebrew
              ? "תיאום בקשה למזוזות כשרות: התאמה לצורך, רמת הידור והכוונה מקצועית לפי ההלכה."
              : "Coordination de mézouzot cachères : adaptation à votre besoin, niveau de hidour, et accompagnement sérieux selon la Halakha."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/commander`}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black"
            >
              {isHebrew ? "שליחת בקשה" : "Faire une demande"}
            </Link>

            <Link
              href={`/${locale}/verifications`}
              className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {isHebrew ? "בדיקות" : "Vérifications"}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {isHebrew ? "יצירת קשר" : "Contact"}
            </Link>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            {isHebrew
              ? "אין תשלום בשלב זה. אפשר לצרף תמונות בוואטסאפ אחרי שליחת הבקשה."
              : "Aucun paiement à ce stade. Vous pouvez envoyer des photos sur WhatsApp juste après la demande."}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">
            {isHebrew ? "מה כולל התיאום" : "Ce que nous coordonnons"}
          </h2>

          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              •{" "}
              {isHebrew
                ? "הכוונה לבחירה נכונה לפי מיקום (דירה/עסק), רמת הידור ותקציב."
                : "Orientation pour choisir selon le lieu (maison/bureau), le niveau de hidour et le budget."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "אפשרות לתיאום בדיקה למזוזות קיימות."
                : "Possibilité de coordonner une vérification de mézouzot existantes."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "תיאום מול סופר סת״ם מתאים לפי זמינות."
                : "Coordination avec un sofer STaM adapté selon disponibilité."}
            </li>
          </ul>

          <div className="mt-6 rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold">{isHebrew ? "הערה:" : "Note :"}</span>{" "}
            {isHebrew
              ? "מחירים וזמנים תלויים בפרטים ובזמינות. תקבלו מענה מסודר לאחר הבקשה."
              : "Les prix et délais dépendent des détails et des disponibilités. Vous recevez une réponse structurée après la demande."}
          </div>

          <div className="mt-4 rounded-xl border bg-slate-50 px-4 py-3 text-xs text-slate-600">
            {isHebrew
              ? "הערה: מרכזהסת״ם הוא מרכז תיאום. העבודה בפועל מתבצעת ע״י סופר מוסמך (בהתאם לזמינות)."
              : "Note : Merkaz HaSTaM est un centre de coordination. Le travail est réalisé par un sofer qualifié (selon disponibilité)."}
          </div>
        </div>
      </section>
    </main>
  );
}
