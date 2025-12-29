import Link from "next/link";
import { isLocale, type Locale, t } from "../_i18n";
import { buildMetadata } from "../_seo/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  return buildMetadata({
    locale,
    title: locale === "he" ? "בדיקה" : "Vérification",
    description:
      locale === "he"
        ? "בדיקת מזוזות ותפילין – אבחון מצב והמלצות."
        : "Vérification mezouzot et téfilines : diagnostic de l’état et recommandations.",
    pathname: "/verifications",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold">{locale === "he" ? "בדיקה" : "Vérification"}</h1>
      <p className="mt-3 text-gray-600">
        {locale === "he"
          ? "בדיקה מסודרת לפני החלטה על תיקון או החלפה – כדי לדעת בדיוק מה המצב."
          : "Une vérification claire avant toute réparation ou remplacement, pour savoir exactement l’état."}
      </p>

      <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2">
        <li>{locale === "he" ? "אבחון בעיות נפוצות בכתב/קלף" : "Diagnostic des problèmes courants (écriture/klaf)"}</li>
        <li>{locale === "he" ? "סיכום והמלצה להמשך" : "Résumé + recommandation pour la suite"}</li>
        <li>{locale === "he" ? "אפשרות תיאום תיקון אם צריך" : "Option réparation si nécessaire"}</li>
      </ul>

      <div className="mt-8">
        <Link href={`/${locale}/commander`} className="rounded-xl bg-black px-5 py-3 text-white inline-block">
          {t(locale, "cta.commanderOnline")}
        </Link>
      </div>
    </main>
  );
}
