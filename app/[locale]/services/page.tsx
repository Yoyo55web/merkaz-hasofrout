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
        : "Tous les services : mezouzot, vérifications, réparations, Séfer Torah.",
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
      title: isHebrew ? "מזוזות" : "Mezouzot",
      desc: isHebrew
        ? "הזמנה ותיאום מזוזות כשרות."
        : "Commande et coordination de mezouzot cachères.",
    },
    {
      href: `/${locale}/verifications`,
      title: isHebrew ? "בדיקות" : "Vérification",
      desc: isHebrew
        ? "אבחון מצב לפני תיקון/החלפה."
        : "Diagnostic avant réparation / remplacement.",
    },
    {
      href: `/${locale}/reparations`,
      title: isHebrew ? "תיקונים" : "Réparations",
      desc: isHebrew
        ? "תיקונים לפי ההלכה אחרי בדיקה."
        : "Réparations selon la Halakha après diagnostic.",
    },
    {
      href: `/${locale}/sefer-torah`,
      title: isHebrew ? "ספר תורה" : "Séfer Torah",
      desc: isHebrew
        ? "תיאום שירותי ספר תורה."
        : "Coordination de services Séfer Torah.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SeoJsonLd locale={locale} pathname="/services" />

      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <h1 className="text-3xl font-semibold tracking-tight">
            {isHebrew ? "שירותים" : "Services"}
          </h1>
          <p className="mt-3 text-slate-600">
            {isHebrew
              ? "בחרו שירות ושלחו בקשה קצרה — תקבלו מענה מסודר."
              : "Choisis un service et envoie une demande courte — tu recevras une réponse structurée."}
          </p>

          <div className="mt-6">
            <Link
              href={`/${locale}/commander`}
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900"
            >
              {isHebrew ? "שליחת בקשה" : "Faire une demande"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-2xl border bg-white p-6 hover:shadow-sm"
            >
              <div className="text-lg font-semibold">{it.title}</div>
              <div className="mt-1 text-sm text-slate-600">{it.desc}</div>
              <div className="mt-4 text-sm font-semibold">
                {isHebrew ? "פתיחה →" : "Ouvrir →"}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
