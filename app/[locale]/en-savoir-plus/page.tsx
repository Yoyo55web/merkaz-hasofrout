// app/[locale]/en-savoir-plus/page.tsx
import Link from "next/link";
import { t, isLocale, type Locale } from "../_i18n";
import SeoJsonLd from "../_seo/SeoJsonLd";
import { buildMetadata } from "../_seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  return buildMetadata({
    locale,
    title: locale === "he" ? "מידע נוסף" : "En savoir plus",
    description:
      locale === "he"
        ? "שאלות נפוצות, איך זה עובד, ומה חשוב לדעת על סת״ם."
        : "FAQ, méthode et informations utiles sur le STaM : mezouzot, téfilines et sifré Torah.",
    pathname: "/en-savoir-plus",
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
      <SeoJsonLd locale={locale} pathname="/en-savoir-plus" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-slate-50">
        {/* ✅ Background image “matière” (top du top : discret + voile + blur léger) */}
        <HeroBg />

        <div className="relative mx-auto max-w-4xl px-5 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {isHebrew ? "מידע נוסף" : "En savoir plus"}
          </h1>

          <p className="mt-3 text-slate-600">
            {isHebrew
              ? "דף זה מרכז את ההסברים, השאלות הנפוצות והדרך שבה אנחנו עובדים — בצורה ברורה ומסודרת."
              : "Cette page rassemble les explications, les questions fréquentes et notre méthode — de manière claire et structurée."}
          </p>

          {/* ✅ Micro-copy halakhique (réassurance) */}
          <div className="mt-6 rounded-2xl border bg-white/80 p-4 text-sm text-slate-700 backdrop-blur">
            <span className="font-semibold">
              {isHebrew ? "מסגרת הלכתית:" : "Cadre halakhique :"}
            </span>{" "}
            {isHebrew
              ? "בדיקה/כתיבה ע״י סופר, לפי כללי הסת״ם — בשקיפות ובדיסקרטיות."
              : "vérification / écriture réalisées par un sofer, selon les règles du STaM — avec transparence et discrétion."}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={commanderHref}
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

      {/* Nos engagements */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          {isHebrew ? "מה אנחנו מתחייבים" : "Nos engagements"}
        </h2>

        <div className="mt-6 rounded-2xl border bg-white p-6">
          <h3 className="text-lg font-semibold">{tr.home.trustTitle}</h3>

          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• {tr.home.trust1}</li>
            <li>• {tr.home.trust2}</li>
            <li>• {tr.home.trust3}</li>
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-2 text-xs text-slate-600 sm:grid-cols-3">
            <div className="rounded-xl border bg-slate-50 px-3 py-2">
              {isHebrew ? "מסגרת הלכתית" : "Cadre halakhique"}
            </div>
            <div className="rounded-xl border bg-slate-50 px-3 py-2">
              {isHebrew ? "סופרים מוסמכים" : "Sofrim diplômés"}
            </div>
            <div className="rounded-xl border bg-slate-50 px-3 py-2">
              {isHebrew ? "דיסקרטיות" : "Discrétion"}
            </div>
          </div>
        </div>
      </section>

      {/* STaM explanation */}
      <section className="mx-auto max-w-4xl px-5 pb-12">
        <div className="rounded-2xl border bg-slate-50 p-6">
          <h2 className="text-xl font-semibold">
            {isHebrew ? "מה זה סת״ם?" : "Qu’est-ce que le STaM ?"}
          </h2>

          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
            {isHebrew ? (
              <>
                סת״ם = ספר תורה, תפילין, מזוזות. מדובר בכתיבה על קלף לפי כללים
                מדויקים. בדיקה וכתיבה נכונות נותנות שקט נפשי.
              </>
            ) : (
              <>
                <span className="font-semibold">STaM</span> signifie{" "}
                <span className="font-semibold">S</span>efer Torah,{" "}
                <span className="font-semibold">T</span>éfilines,{" "}
                <span className="font-semibold">M</span>ézouzot. Ce sont des
                écritures sur parchemin (klaf) régies par des règles précises :
                la qualité dépend de la rigueur de l’écriture et des contrôles.
              </>
            )}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-4xl px-5 pb-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          {tr.home.stepsTitle}
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <StepCard
            label={isHebrew ? "שלב 1" : "ÉTAPE 1"}
            title={tr.home.step1t}
            desc={tr.home.step1d}
          />
          <StepCard
            label={isHebrew ? "שלב 2" : "ÉTAPE 2"}
            title={tr.home.step2t}
            desc={tr.home.step2d}
          />
          <StepCard
            label={isHebrew ? "שלב 3" : "ÉTAPE 3"}
            title={tr.home.step3t}
            desc={tr.home.step3d}
          />
        </div>

        <div className="mt-8">
          <Link
            href={commanderHref}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {isHebrew ? "להתחיל עכשיו" : "Démarrer maintenant"}
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 pb-12">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            {tr.home.faqTitle}
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            {isHebrew
              ? "מתלבטים? תתארו את המצב בקצרה — נסביר בצורה ברורה, בלי לחץ."
              : "Vous hésitez ? Décrivez votre situation — on vous explique clairement, sans pression."}
          </p>

          <div className="mt-6 space-y-5 text-sm text-slate-700">
            <div>
              <div className="font-semibold">{tr.home.faq1q}</div>
              <p className="mt-1 text-slate-600">{tr.home.faq1a}</p>
            </div>
            <div>
              <div className="font-semibold">{tr.home.faq2q}</div>
              <p className="mt-1 text-slate-600">{tr.home.faq2a}</p>
            </div>
            <div>
              <div className="font-semibold">{tr.home.faq3q}</div>
              <p className="mt-1 text-slate-600">{tr.home.faq3a}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={commanderHref}
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

      {/* Footer note */}
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

function HeroBg() {
  // ✅ Fond “matière” discret + voile + blur léger (top du top)
  // Place ton image ici : public/images/klaf-bg.jpg
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/klaf-bg.jpg)` }}
      />

      {/* voile + blur : on “sent” l’image sans la lire */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* voile blanc principal (léger) */}
      <div className="absolute inset-0 bg-white/80" />

      {/* gradient pour garder la lecture ultra clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-slate-50" />
    </div>
  );
}

function StepCard({
  label,
  title,
  desc,
}: {
  label: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="text-xs font-semibold text-slate-500">{label}</div>
      <div className="mt-2 text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}
