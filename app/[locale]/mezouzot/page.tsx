import Link from "next/link";
import { isLocale, type Locale, t } from "../_i18n";
import { buildMetadata } from "../_seo/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  return buildMetadata({
    locale,
    title: locale === "he" ? "מזוזות" : "Mezouzot",
    description:
      locale === "he"
        ? "הזמנה, בדיקה והכוונה למזוזות כשרות לפי ההלכה."
        : "Commande, vérification et accompagnement pour des mezouzot cachères selon la Halakha.",
    pathname: "/mezouzot",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold">{locale === "he" ? "מזוזות" : "Mezouzot"}</h1>
      <p className="mt-3 text-gray-600">
        {locale === "he"
          ? "ליווי מקצועי לבחירה/רכישה ובדיקה של מזוזות – בהתאם להלכה ולצרכים שלך."
          : "Accompagnement sérieux pour choisir/commander et faire vérifier des mezouzot, selon la Halakha et selon ton besoin."}
      </p>

      <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2">
        <li>{locale === "he" ? "ייעוץ לפי סוגי קלף/בית/כתב" : "Conseil sur le klaf, le boîtier et le style d’écriture"}</li>
        <li>{locale === "he" ? "אפשרות בדיקה והערכת מצב" : "Possibilité de vérification et diagnostic"}</li>
        <li>{locale === "he" ? "תיאום מול סופרי סת״ם מוסמכים" : "Coordination avec des sofrim qualifiés"}</li>
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={`/${locale}/commander`} className="rounded-xl bg-black px-5 py-3 text-white">
          {t(locale, "cta.commanderOnline")}
        </Link>
        <Link href={`/${locale}/verifications`} className="rounded-xl border px-5 py-3">
          {locale === "he" ? "בדיקות" : "Vérification"}
        </Link>
      </div>
    </main>
  );
}
