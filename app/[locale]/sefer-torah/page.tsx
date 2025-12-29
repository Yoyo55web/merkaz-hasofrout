// app/[locale]/sefer-torah/page.tsx
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
    title: locale === "he" ? "ספר תורה" : "Séfer Torah",
    description:
      locale === "he"
        ? "תיאום שירותי ספר תורה: כתיבה, בדיקה, תיקון והגהה לפי ההלכה."
        : "Coordination Séfer Torah : écriture, vérification, réparations et haga’a selon la Halakha.",
    pathname: "/sefer-torah",
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
      <SeoJsonLd locale={locale} pathname="/sefer-torah" />

      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-4xl px-5 py-10 md:py-12">
          <p className="text-xs font-semibold text-emerald-700">
            {isHebrew ? "תיאום מסודר • שקיפות • אחריות" : "Coordination • Transparence • Suivi"}
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            {isHebrew ? "ספר תורה" : "Séfer Torah"}
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            {isHebrew
              ? "תיאום פרויקטים ושירותים לספר תורה: כתיבה, בדיקה, תיקון והגהה — בצורה מסודרת וברורה."
              : "Coordination de projets et services pour Séfer Torah : écriture, vérification, réparations et haga’a — de manière structurée et claire."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/commander`}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black"
            >
              {isHebrew ? "שליחת בקשה" : "Faire une demande"}
            </Link>

            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {isHebrew ? "לכל השירותים" : "Tous les services"}
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
              ? "אין תשלום בשלב זה. לאחר הבקשה תקבלו מענה מסודר עם שלבים."
              : "Aucun paiement à ce stade. Après la demande, vous recevez une réponse structurée avec les étapes."}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">
            {isHebrew ? "מה ניתן לתאם" : "Ce que nous pouvons coordonner"}
          </h2>

          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              •{" "}
              {isHebrew
                ? "תיקון והשלמות לפי צורך."
                : "Réparations et compléments selon le besoin."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "בדיקה/הגהה תקופתית."
                : "Vérification / haga’a périodique."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "פרויקטים לקהילה/בית כנסת."
                : "Projets pour communauté / synagogue."}
            </li>
          </ul>

          <div className="mt-6 rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold">{isHebrew ? "שקיפות:" : "Transparence :"}</span>{" "}
            {isHebrew
              ? "תקבלו שלבים וזמנים משוערים אחרי קבלת פרטי הבקשה."
              : "Vous recevez des étapes et des délais estimatifs après réception des détails."}
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
