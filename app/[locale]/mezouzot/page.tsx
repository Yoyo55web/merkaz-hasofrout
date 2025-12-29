// app/[locale]/mezouzot/page.tsx
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
    title: locale === "he" ? "מזוזות" : "Mezouzot",
    description:
      locale === "he"
        ? "הזמנה ותיאום מזוזות כשרות לפי ההלכה — רציני, ברור ודיסקרטי."
        : "Commande et coordination de mezouzot cachères selon la Halakha — sérieux, clair et discret.",
    pathname: "/mezouzot",
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
      <SeoJsonLd locale={locale} pathname="/mezouzot" />

      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 py-12">
          <h1 className="text-3xl font-semibold tracking-tight">
            {isHebrew ? "מזוזות" : "Mezouzot"}
          </h1>
          <p className="mt-3 text-slate-600">
            {isHebrew
              ? "תיאום בקשה למזוזות כשרות: בחירה, התאמה לצורך, והכוונה מקצועית לפי ההלכה."
              : "Coordination de demande pour des mezouzot cachères : choix, adaptation à ton besoin, et accompagnement sérieux selon la Halakha."}
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
            {isHebrew ? "מה כולל השירות" : "Ce que nous faisons"}
          </h2>

          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              •{" "}
              {isHebrew
                ? "הכוונה לבחירה נכונה לפי מיקום (דירה/עסק), רמת הידור, ותקציב."
                : "Orientation pour choisir correctement selon le lieu (maison/bureau), niveau de hidour et budget."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "אפשרות לתיאום בדיקה למזוזות קיימות."
                : "Possibilité de coordonner une vérification de mezouzot existantes."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "תיאום מול סופר סת״ם מתאים לפי זמינות."
                : "Coordination avec un sofer STaM adapté selon disponibilité."}
            </li>
          </ul>

          <div className="mt-6 rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold">
              {isHebrew ? "הערה:" : "Note :"}
            </span>{" "}
            {isHebrew
              ? "מחירים/זמנים תלויים בפרטים ובזמינות. תקבלו מענה מסודר לאחר הבקשה."
              : "Les prix/délais dépendent des détails et des disponibilités. Tu reçois une réponse structurée après la demande."}
          </div>
        </div>
      </section>
    </main>
  );
}
