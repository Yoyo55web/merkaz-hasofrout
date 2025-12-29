import Link from "next/link";
import { isLocale, type Locale, t } from "../_i18n";
import { buildMetadata } from "../_seo/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  return buildMetadata({
    locale,
    title: locale === "he" ? "שירותים" : "Services",
    description:
      locale === "he"
        ? "כל השירותים: מזוזות, תפילין, בדיקות, תיקונים, ספר תורה."
        : "Tous les services : mezouzot, téfilines, vérifications, réparations, Séfer Torah.",
    pathname: "/services",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  const items = [
    { href: `/${locale}/mezouzot`, label: locale === "he" ? "מזוזות" : "Mezouzot" },
    { href: `/${locale}/verifications`, label: locale === "he" ? "בדיקות" : "Vérification" },
    { href: `/${locale}/reparations`, label: locale === "he" ? "תיקונים" : "Réparations" },
    { href: `/${locale}/sefer-torah`, label: locale === "he" ? "ספר תורה" : "Séfer Torah" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold">{locale === "he" ? "שירותים" : "Services"}</h1>
      <p className="mt-3 text-gray-600">
        {locale === "he"
          ? "בחר שירות, ואפשר לשלוח בקשה תוך 30 שניות."
          : "Choisis un service et envoie ta demande en 30 secondes."}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="rounded-2xl border p-5 hover:shadow-sm">
            <div className="text-lg font-semibold">{it.label}</div>
            <div className="mt-1 text-sm text-gray-600">
              {locale === "he" ? "לפתיחה" : "Ouvrir"}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link href={`/${locale}/commander`} className="rounded-xl bg-black px-5 py-3 text-white inline-block">
          {t(locale, "cta.commanderOnline")}
        </Link>
      </div>
    </main>
  );
}
