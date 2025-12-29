// app/[locale]/verifications/page.tsx
import Link from "next/link";
import { isLocale, t, type Locale } from "../_i18n";
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
    title: locale === "he" ? "בדיקות" : "Vérifications",
    description:
      locale === "he"
        ? "בדיקת מזוזות ותפילין: אבחון מצב והמלצות להמשך."
        : "Vérification de mézouzot et téfilines : diagnostic et recommandations.",
    pathname: "/verifications",
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
  const tr = t(locale);

  return (
    <main
      className="min-h-screen bg-white text-slate-900"
      dir={isHebrew ? "rtl" : "ltr"}
    >
      <SeoJsonLd locale={locale} pathname="/verifications" />

      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-4xl px-5 py-10 md:py-12">
          <p className="text-xs font-semibold text-emerald-700">
            {isHebrew ? "לפני החלטה" : "Avant décision"}
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            {isHebrew ? "בדיקות" : "Vérifications"}
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            {isHebrew
              ? "בדיקה מסודרת לפני החלטה על תיקון או החלפה — כדי לדעת בדיוק מה המצב."
              : "Une vérification structurée avant toute réparation ou remplacement — pour connaître précisément l’état."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/commander`}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black"
            >
              {isHebrew ? "שליחת בקשה" : "Faire une demande"}
            </Link>

            <Link
              href={`/${locale}/reparations`}
              className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {isHebrew ? "תיקונים" : "Réparations"}
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

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-5 py-12 space-y-6">
        {/* What you get */}
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">
            {isHebrew ? "מה תקבלו" : "Ce que vous recevez"}
          </h2>

          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              •{" "}
              {isHebrew
                ? "אבחון מצב הכתב/הקלף (לפי הצורך)."
                : "Diagnostic de l’état (écriture / klaf selon le besoin)."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "סיכום ברור והמלצה להמשך."
                : "Résumé clair et recommandation pour la suite."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "אם צריך — תיאום תיקון."
                : "Si nécessaire — coordination d’une réparation."}
            </li>
          </ul>

          <div className="mt-4 rounded-xl border bg-slate-50 px-4 py-3 text-xs text-slate-600">
            {tr.common.noteCoordination}
          </div>
        </div>

        {/* ✅ Quick Win #3: Method */}
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">
            {isHebrew ? "שיטת הבדיקה שלנו" : "Notre méthode de vérification"}
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            {isHebrew
              ? "בדיקה מסודרת לפי תהליך קבוע — כדי לתת מענה מדויק וברור."
              : "Une vérification structurée selon un processus stable — pour vous donner une réponse précise et claire."}
          </p>

          <ol className="mt-4 space-y-2 text-sm text-slate-700 list-decimal pl-5">
            <li>
              {isHebrew
                ? "בדיקה חזותית מדויקת של הכתב, הדיו והקלף."
                : "Examen visuel précis de l’écriture, de l’encre et du klaf."}
            </li>
            <li>
              {isHebrew
                ? "בקרה הלכתית על צורת האותיות (לפי הצורך)."
                : "Contrôle halakhique de la forme des lettres (selon le besoin)."}
            </li>
            <li>
              {isHebrew
                ? "בדיקת רווחים בין אותיות ומילים."
                : "Vérification des espacements entre lettres et mots."}
            </li>
            <li>
              {isHebrew
                ? "במידת הצורך — בדיקה נוספת/אימות."
                : "Si nécessaire — second contrôle / validation."}
            </li>
            <li>
              {isHebrew
                ? "סיכום ברור והמלצה: תיקון/החלפה/המשך."
                : "Conclusion claire et recommandation : réparation / remplacement / suite."}
            </li>
          </ol>
        </div>

        {/* ✅ Quick Win #4: Delays */}
        <div className="rounded-2xl border bg-slate-50 p-6">
          <div className="font-semibold">{tr.common.delaysTitle}</div>
          <p className="mt-2 text-sm text-slate-600">{tr.common.delaysText}</p>
        </div>

        {/* ✅ Quick Win #6: Examples */}
        <div className="rounded-2xl border bg-white p-6">
          <div className="font-semibold">{tr.common.examplesTitle}</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• {tr.common.examples1}</li>
            <li>• {tr.common.examples2}</li>
            <li>• {tr.common.examples3}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
