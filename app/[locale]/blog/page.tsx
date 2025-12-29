// app/[locale]/blog/page.tsx
import Link from "next/link";
import { t, isLocale, type Locale } from "../_i18n";
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
    title: locale === "he" ? "בלוג" : "Blog",
    description:
      locale === "he"
        ? "מאמרים קצרים, שאלות נפוצות וטיפים סביב סת״ם."
        : "Articles courts, FAQ et conseils autour du STaM : mezouzot, téfilines et sifré Torah.",
    pathname: "/blog",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const tr = t(locale);
  const isHebrew = locale === "he";

  const commanderHref = `/${locale}/commander`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SeoJsonLd locale={locale} pathname="/blog" />

      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 py-12">
          <h1 className="text-3xl font-semibold tracking-tight">
            {isHebrew ? "בלוג" : "Blog"}
          </h1>
          <p className="mt-3 text-slate-600">
            {isHebrew
              ? "כאן נעלה תכנים קצרים וברורים על סת״ם, בדיקות, ומה חשוב לדעת — בצורה מסודרת."
              : "Ici, nous publierons des contenus courts et clairs sur le STaM, les vérifications, et ce qu’il est important de savoir — de façon structurée."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={commanderHref}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              {tr.cta.commanderOnline}
            </Link>

            <Link
              href={`/${locale}/en-savoir-plus`}
              className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {isHebrew ? "מידע נוסף" : "En savoir plus"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">
            {isHebrew ? "בקרוב" : "Bientôt"}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {isHebrew
              ? "בינתיים, אפשר לשלוח בקשה ולקבל מענה ברור ומסודר."
              : "En attendant, vous pouvez faire une demande et recevoir une réponse claire et structurée."}
          </p>

          <div className="mt-6">
            <Link
              href={commanderHref}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {isHebrew ? "להתחיל עכשיו" : "Démarrer maintenant"}
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-4xl px-5 py-10 text-xs text-slate-500">
          {isHebrew
            ? "הערה: זמינות/זמנים/אופן ביצוע תלויים בצורך ובסופר. אנו מתאמים ומלווים."
            : "Note : disponibilités / délais / modalités dépendent du besoin et du sofer. Nous coordonnons et assurons le suivi."}
        </div>
      </footer>
    </main>
  );
}
