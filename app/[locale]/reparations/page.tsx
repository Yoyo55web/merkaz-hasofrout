// app/[locale]/reparations/page.tsx
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
    title: locale === "he" ? "תיקונים" : "Réparations",
    description:
      locale === "he"
        ? "תיאום תיקונים לתפילין/מזוזות/מגילות לפי ההלכה, אחרי אבחון מסודר."
        : "Coordination de réparations (téfilines/mezouzot/méguilot) selon la Halakha, après diagnostic clair.",
    pathname: "/reparations",
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
      <SeoJsonLd locale={locale} pathname="/reparations" />

      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 py-12">
          <h1 className="text-3xl font-semibold tracking-tight">
            {isHebrew ? "תיקונים" : "Réparations"}
          </h1>
          <p className="mt-3 text-slate-600">
            {isHebrew
              ? "לפני כל תיקון עושים בדיקה/אבחון כדי לדעת מה אפשר לתקן ומה נכון לעשות לפי ההלכה."
              : "Avant toute réparation, on fait une vérification/diagnostic pour savoir ce qui est réparable et quoi faire correctement selon la Halakha."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/commander`}
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900"
            >
              {isHebrew ? "שליחת בקשה" : "Faire une demande"}
            </Link>

            <Link
              href={`/${locale}/verifications`}
              className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {isHebrew ? "בדיקות" : "Vérification"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">
            {isHebrew ? "דוגמאות לתיקונים" : "Exemples de réparations"}
          </h2>

          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              •{" "}
              {isHebrew
                ? "תיקוני כתב (כאשר מותר/אפשר לפי הכללים)."
                : "Réparations d’écriture (quand c’est permis/possible selon les règles)."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "תיקון/החלפה של רצועות/בתים לפי צורך."
                : "Ajustement/remplacement de retzouot / batim si nécessaire."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "סיכום ברור אחרי בדיקה: מה נמצא, ומה מומלץ."
                : "Retour clair après vérification : ce qui a été trouvé et la recommandation."}
            </li>
          </ul>

          <div className="mt-6 rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold">
              {isHebrew ? "חשוב:" : "Important :"}
            </span>{" "}
            {isHebrew
              ? "לא כל דבר מתקן — הכל נקבע אחרי בדיקה לפי ההלכה."
              : "Tout n’est pas réparable — tout se décide après diagnostic, selon la Halakha."}
          </div>
        </div>
      </section>
    </main>
  );
}
