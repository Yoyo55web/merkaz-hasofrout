import Link from "next/link";
import { isLocale, type Locale, t } from "../_i18n";
import { buildMetadata } from "../_seo/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  return buildMetadata({
    locale,
    title: locale === "he" ? "ספר תורה" : "Séfer Torah",
    description:
      locale === "he"
        ? "כתיבה, הגהה ותיאום שירותי ספר תורה לפי ההלכה."
        : "Écriture, vérification et coordination de services Séfer Torah selon la Halakha.",
    pathname: "/sefer-torah",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold">{locale === "he" ? "ספר תורה" : "Séfer Torah"}</h1>
      <p className="mt-3 text-gray-600">
        {locale === "he"
          ? "תיאום מול סופרי סת״ם מקצועיים עבור כתיבה, תיקון, הגהה והשלמות."
          : "Coordination avec des sofrim expérimentés : écriture, תיקון, vérification (haga’a) et compléments."}
      </p>

      <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2">
        <li>{locale === "he" ? "תיאום פרויקטים (קהילה/בית כנסת)" : "Projets (communauté / synagogue)"}</li>
        <li>{locale === "he" ? "בדיקות תקופתיות והגהה" : "Vérifications périodiques et haga’a"}</li>
        <li>{locale === "he" ? "שקיפות על שלבים וזמנים" : "Clarté sur les étapes et les délais"}</li>
      </ul>

      <div className="mt-8">
        <Link href={`/${locale}/commander`} className="rounded-xl bg-black px-5 py-3 text-white inline-block">
          {t(locale, "cta.commanderOnline")}
        </Link>
      </div>
    </main>
  );
}
