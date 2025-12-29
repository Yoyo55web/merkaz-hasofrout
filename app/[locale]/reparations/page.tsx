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
        : "Coordination de réparations (téfilines / mézouzot / méguilot) selon la Halakha, après diagnostic clair.",
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

      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-4xl px-5 py-10 md:py-12">
          <p className="text-xs font-semibold text-emerald-700">
            {isHebrew ? "אבחון לפני תיקון" : "Diagnostic avant réparation"}
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            {isHebrew ? "תיקונים" : "Réparations"}
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            {isHebrew
              ? "לפני כל תיקון עושים בדיקה/אבחון כדי לדעת מה אפשר לתקן ומה נכון לעשות לפי ההלכה."
              : "Avant toute réparation, une vérification/diagnostic permet de savoir ce qui est réparable et quoi faire correctement selon la Halakha."}
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
              ? "אין תשלום בשלב זה. אחרי הבקשה תקבלו מענה מסודר."
              : "Aucun paiement à ce stade. Après la demande, vous recevez une réponse structurée."}
          </p>
        </div>
      </section>

      {/* CONTENT */}
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
            <span className="font-semibold">{isHebrew ? "חשוב:" : "Important :"}</span>{" "}
            {isHebrew
              ? "לא כל דבר ניתן לתיקון — הכול נקבע אחרי בדיקה לפי ההלכה."
              : "Tout n’est pas réparable — tout se décide après diagnostic, selon la Halakha."}
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
