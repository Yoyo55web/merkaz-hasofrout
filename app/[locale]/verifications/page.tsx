// app/[locale]/verifications/page.tsx
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
    title: locale === "he" ? "בדיקה" : "Vérification",
    description:
      locale === "he"
        ? "בדיקת מזוזות ותפילין: אבחון מצב והמלצות להמשך."
        : "Vérification mezouzot et téfilines : diagnostic et recommandations.",
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

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SeoJsonLd locale={locale} pathname="/verifications" />

      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 py-12">
          <h1 className="text-3xl font-semibold tracking-tight">
            {isHebrew ? "בדיקה" : "Vérification"}
          </h1>
          <p className="mt-3 text-slate-600">
            {isHebrew
              ? "בדיקה מסודרת לפני החלטה על תיקון או החלפה — כדי לדעת בדיוק מה המצב."
              : "Une vérification structurée avant toute réparation ou remplacement — pour savoir précisément l’état."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/commander`}
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900"
            >
              {isHebrew ? "שליחת בקשה" : "Faire une demande"}
            </Link>

            <Link
              href={`/${locale}/reparations`}
              className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {isHebrew ? "תיקונים" : "Réparations"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">
            {isHebrew ? "מה תקבלו" : "Ce que tu reçois"}
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
        </div>
      </section>
    </main>
  );
}
