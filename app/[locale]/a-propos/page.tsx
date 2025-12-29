// app/[locale]/a-propos/page.tsx
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
    title: locale === "he" ? "אודות" : "À propos",
    description:
      locale === "he"
        ? "מי אנחנו ומה אנחנו עושים בתחום הסת״ם."
        : "Qui nous sommes et comment nous travaillons pour vos demandes de STaM.",
    pathname: "/a-propos",
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

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SeoJsonLd locale={locale} pathname="/a-propos" />

      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 py-12">
          <h1 className="text-3xl font-semibold tracking-tight">
            {isHebrew ? "אודות" : "À propos"}
          </h1>
          <p className="mt-3 text-slate-600">
            {isHebrew
              ? "אנחנו מתאמים בקשות בתחום הסת״ם בצורה רצינית, ברורה ודיסקרטית — כדי שתקבלו מענה מסודר בהתאם לצורך."
              : "Nous coordonnons des demandes de STaM de manière sérieuse, claire et discrète — afin que vous receviez une réponse structurée selon votre besoin."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/commander`}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              {tr.cta.commanderOnline}
            </Link>

            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {isHebrew ? "חזרה לדף הבית" : "Retour à l’accueil"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">
            {isHebrew ? "איך אנחנו עובדים" : "Notre méthode"}
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              •{" "}
              {isHebrew
                ? "אתם מתארים צורך (טופס קצר)."
                : "Vous décrivez votre besoin (formulaire court)."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "אנחנו מתאמים מול סופר מתאים (לפי זמינות)."
                : "Nous coordonnons avec un sofer adapté (selon disponibilité)."}
            </li>
            <li>
              •{" "}
              {isHebrew
                ? "אתם מקבלים מענה ברור: אפשרויות, הערכה, זמני טיפול."
                : "Vous recevez une réponse claire : options, estimation, délais."}
            </li>
          </ul>

          <div className="mt-6 rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold">
              {isHebrew ? "דיסקרטיות:" : "Discrétion :"}
            </span>{" "}
            {isHebrew
              ? "הפרטים שלכם נשארים פנימיים ונמסרים רק לצורך תיאום."
              : "Vos informations restent internes et ne sont partagées que si nécessaire pour la coordination."}
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
