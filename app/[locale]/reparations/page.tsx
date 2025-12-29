import Link from "next/link";
import { isLocale, type Locale, t } from "../_i18n";
import { buildMetadata } from "../_seo/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  return buildMetadata({
    locale,
    title: locale === "he" ? "תיקונים" : "Réparations",
    description:
      locale === "he"
        ? "תיקונים לתפילין/מזוזות/מגילות לפי ההלכה – לאחר בדיקה."
        : "Réparations téfilines/mezouzot/méguilot selon la Halakha, après diagnostic.",
    pathname: "/reparations",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold">{locale === "he" ? "תיקונים" : "Réparations"}</h1>
      <p className="mt-3 text-gray-600">
        {locale === "he"
          ? "לפני תיקון עושים בדיקה כדי לדעת מה אפשר/צריך לתקן, ומה העלות והזמן."
          : "On commence par une vérification pour déterminer ce qui est réparable, le coût et les délais."}
      </p>

      <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2">
        <li>{locale === "he" ? "תיקוני כתב (בהתאם לכללים)" : "Réparations d’écriture (selon les règles halakhiques)"}</li>
        <li>{locale === "he" ? "החלפת בתים/רצועות לפי צורך" : "Remplacement boîtiers / retzouot si nécessaire"}</li>
        <li>{locale === "he" ? "דוח קצר לאחר בדיקה" : "Retour clair après diagnostic"}</li>
      </ul>

      <div className="mt-8">
        <Link href={`/${locale}/commander`} className="rounded-xl bg-black px-5 py-3 text-white inline-block">
          {t(locale, "cta.commanderOnline")}
        </Link>
      </div>
    </main>
  );
}
