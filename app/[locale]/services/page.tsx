// app/[locale]/services/page.tsx
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
    title: locale === "he" ? "שירותים" : "Services",
    description:
      locale === "he"
        ? "כל השירותים: מזוזות, בדיקות, תיקונים, ספר תורה."
        : "Tous les services : mézouzot, vérifications, réparations, Séfer Torah.",
    pathname: "/services",
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

  const items = [
    {
      href: `/${locale}/mezouzot`,
      title: isHebrew ? "מזוזות" : "Mézouzot",
      desc: isHebrew
        ? "הזמנה ותיאום מזוזות כשרות לפי ההלכה."
        : "Commande et coordination de mézouzot cachères selon la Halakha.",
    },
    {
      href: `/${locale}/verifications`,
      title: isHebrew ? "בדיקות" : "Vérifications",
      desc: isHebrew
        ? "אבחון מצב לפני תיקון/החלפה."
        : "Diagnostic avant réparation ou remplacement.",
    },
    {
      href: `/${locale}/reparations`,
      title: isHebrew ? "תיקונים" : "Réparations",
      desc: isHebrew
        ? "תיקונים לפי ההלכה אחרי בדיקה מסודרת."
        : "Réparations selon la Halakha après diagnostic structuré.",
    },
    {
      href: `/${locale}/sefer-torah`,
      title: isHebrew ? "ספר תורה" : "Séfer Torah",
      desc: isHebrew
        ? "תיאום שירותי ספר תורה: בדיקה, תיקון והגהה."
        : "Coordination Séfer Torah : vérification, réparations et haga’a.",
    },
  ];

  return (
    <main
      className="min-h-screen bg-white text-slate-900"
      dir={isHebrew ? "rtl" : "ltr"}
    >
      <SeoJsonLd locale={locale} pathname="/services" />

      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-5 py-10 md:py-12">
          <p className="text-xs font-semibold text-emerald-700">
            {isHebrew ? "בחירה מהירה" : "Choix rapide"}
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            {isHebrew ? "שירותים" : "Services"}
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            {isHebrew
              ? "בחרו שירות, ואז שלחו בקשה קצרה (30 שנ׳). כך נקבל את הפרטים ונענה בצורה מדויקת."
              : "Choisissez un service, puis envoyez une demande courte (30 sec). Nous aurons les détails essentiels pour répondre précisément."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/commander`}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black"
            >
              {isHebrew ? "שליחת בקשה" : "Faire une demande"}
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

      {/* GRID */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group rounded-2xl border bg-white p-6 transition hover:bg-slate-50 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold">{it.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{it.desc}</div>
                </div>

                <div className="rounded-full border bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                  {isHebrew ? "פרטים" : "Détails"}
                </div>
              </div>

              <div className="mt-5 text-sm font-semibold text-slate-900">
                {isHebrew ? "פתיחה →" : "Ouvrir →"}
              </div>
            </Link>
          ))}
        </div>

        {/* FOOTNOTE */}
        <div className="mt-10 rounded-2xl border bg-slate-50 p-5 text-sm text-slate-700">
          <div className="font-semibold">{isHebrew ? "הערה חשובה" : "Note importante"}</div>
          <p className="mt-1 text-slate-600">
            {isHebrew
              ? "מרכזהסת״ם הוא מרכז תיאום. הבדיקה/כתיבה מתבצעת ע״י סופר מוסמך (בהתאם לזמינות)."
              : "Merkaz HaSTaM est un centre de coordination. La vérification/écriture est réalisée par un sofer qualifié (selon disponibilité)."}
          </p>
        </div>
      </section>
    </main>
  );
}
