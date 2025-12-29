import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import CommanderFormClient from "./_components/CommanderFormClient";

import { t, isLocale, type Locale } from "../_i18n";
import { buildMetadata } from "../_seo.utils";
import SeoJsonLd from "../_components/SeoJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  return buildMetadata({
    locale,
    title: locale === "he" ? "שליחת בקשה" : "Faire une demande",
    description:
      locale === "he"
        ? "טופס קצר (30 שנ׳) — ללא תשלום בשלב זה. לאחר מילוי: הודעה מוכנה לוואטסאפ."
        : "Formulaire court (30 sec) — aucun paiement pour l’instant. Après remplissage : message prêt pour WhatsApp.",
    pathname: "/commander",
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

  // 🎨 Harmonisation couleurs par langue (sans vert)
  const accent =
    locale === "he"
      ? "bg-indigo-600 hover:bg-indigo-700"
      : "bg-slate-900 hover:bg-black";

  const accentSoft =
    locale === "he"
      ? "bg-indigo-600 text-white"
      : "bg-slate-900 text-white";

  // ✅ Ton image (garde ce chemin si c’est le bon)
  const heroSrc = "/images/commander-hero.png";

  return (
    // ✅ pb pour éviter que le sticky CTA mobile masque le bas
    <main className="min-h-screen bg-white text-slate-900 pb-24 md:pb-0">
      <SeoJsonLd locale={locale} pathname="/commander" />

      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* LEFT: copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <span
                  className={`h-2 w-2 rounded-full ${
                    locale === "he" ? "bg-indigo-500" : "bg-slate-900"
                  }`}
                />
                {tr.commander.badge}
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                {tr.commander.title}
              </h1>

              <p className="mt-3 text-base text-slate-600">
                {tr.commander.subtitle}
              </p>

              {/* ✅ Micro-copy halakhique AU-DESSUS du CTA */}
              <div className="mt-6 rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <span className="font-semibold">
                  {isHebrew ? "מסגרת הלכתית:" : "Cadre halakhique :"}
                </span>{" "}
                {isHebrew
                  ? "בדיקה/כתיבה ע״י סופר, לפי כללי הסת״ם — בשקיפות ובדיסקרטיות."
                  : "vérification / écriture réalisées par un sofer, selon les règles du STaM — avec transparence et discrétion."}
              </div>

              {/* Progress bar */}
              <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-center">
                <div className={`rounded-lg py-2 ${accentSoft}`}>
                  1. {tr.commander.step1Short}
                </div>
                <div className="rounded-lg bg-slate-200 py-2">
                  2. {tr.commander.step2Short}
                </div>
                <div className="rounded-lg bg-slate-200 py-2">
                  3. {tr.commander.step3Short}
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-500">{tr.commander.micro}</p>

              {/* CTA */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#form"
                  className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition sm:w-auto ${accent}`}
                >
                  {locale === "he"
                    ? "לטופס (30 שנ׳)"
                    : "Aller au formulaire (30 sec)"}
                </a>

                <Link
                  href={`/${locale}/en-savoir-plus`}
                  className="inline-flex w-full items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 sm:w-auto"
                >
                  {isHebrew ? "מידע נוסף" : "En savoir plus"}
                </Link>
              </div>

              <div className="mt-3">
                <Link
                  href={`/${locale}`}
                  className="text-sm font-semibold text-slate-700 hover:underline"
                >
                  {locale === "he" ? "חזרה לדף הבית" : "Retour à l’accueil"}
                </Link>
              </div>

              {/* ✅ MOBILE: Image juste après les CTA (conversion first) */}
              <div className="mt-8 md:hidden">
                <HeroImageCard
                  src={heroSrc}
                  isHebrew={isHebrew}
                  mobile
                />
              </div>
            </div>

            {/* RIGHT: desktop image + trust */}
            <div className="space-y-4">
              {/* ✅ DESKTOP ONLY */}
              <div className="hidden md:block">
                <HeroImageCard
                  src={heroSrc}
                  isHebrew={isHebrew}
                />
              </div>

              {/* Trust box */}
              <div className="rounded-2xl border bg-slate-50 p-6">
                <h2 className="font-semibold">{tr.commander.halakhicTitle}</h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• {tr.commander.halakhic1}</li>
                  <li>• {tr.commander.halakhic4}</li>
                  <li>• {tr.commander.halakhic2}</li>
                  <li>• {tr.commander.halakhic3}</li>
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  {locale === "he"
                    ? "ללא תשלום בשלב זה"
                    : "Aucun paiement à ce stade"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">{tr.commander.formTitle}</h2>
            <p className="mt-2 text-sm text-slate-600">
              {tr.commander.formSubtitle}
            </p>

            <div id="form" className="scroll-mt-24 mt-6">
              {/* ✅ important: remount quand la locale change */}
              <CommanderFormClient key={locale} locale={locale} />
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">{tr.commander.faqTitle}</h3>

            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <div className="font-semibold">{tr.commander.faq1q}</div>
                <p className="mt-1 text-slate-600">{tr.commander.faq1a}</p>
              </div>
              <div>
                <div className="font-semibold">{tr.commander.faq2q}</div>
                <p className="mt-1 text-slate-600">{tr.commander.faq2a}</p>
              </div>
              <div>
                <div className="font-semibold">{tr.commander.faq3q}</div>
                <p className="mt-1 text-slate-600">{tr.commander.faq3a}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href="#form"
                className={`rounded-xl py-3 text-center text-sm font-semibold text-white transition ${accent}`}
              >
                {locale === "he"
                  ? "למלא טופס (30 שנ׳)"
                  : "Remplir le formulaire (30 sec)"}
              </a>

              <Link
                href={`/${locale}`}
                className="rounded-xl border bg-white py-3 text-center text-sm font-semibold hover:bg-slate-100"
              >
                {locale === "he" ? "חזרה לדף הבית" : "Retour à l’accueil"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white/95 backdrop-blur p-3 md:hidden">
        <a
          href="#form"
          className={`block w-full rounded-xl py-3 text-center text-sm font-semibold text-white transition ${accent}`}
        >
          {tr.commander.ctaSticky}
        </a>
      </div>
    </main>
  );
}

function HeroImageCard({
  src,
  isHebrew,
  mobile,
}: {
  src: string;
  isHebrew: boolean;
  mobile?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-slate-50 shadow-sm">
      {/* ✅ Aspect ratio optimisé mobile */}
      <div className={`relative w-full ${mobile ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
        <Image
          src={src}
          alt={isHebrew ? "סת״ם — כתיבה על קלף" : "STaM — écriture sur parchemin"}
          fill
          className={[
            "object-cover",
            // ✅ crop plus “pro” sur mobile
            mobile ? "object-[55%_65%]" : "object-center",
          ].join(" ")}
          // ✅ perf: pas priority (l’image est plus bas sur mobile)
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* ✅ micro-voile blanc (mobile plus fort) */}
        <div
          className={[
            "pointer-events-none absolute inset-0",
            mobile ? "bg-white/10" : "bg-white/5",
          ].join(" ")}
        />

        {/* ✅ baisse HL visuelle + contraste local doux */}
        <div
          className={[
            "pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b",
            mobile ? "from-white/25 to-transparent" : "from-white/15 to-transparent",
          ].join(" ")}
        />
      </div>

      {/* Caption premium */}
      <div className="px-5 py-4">
        <div className="text-xs font-semibold text-slate-700">
          {isHebrew ? "דיוק • בדיקה • אחריות" : "Précision • Contrôle • Suivi"}
        </div>
        <div className="mt-1 text-xs text-slate-500">
          {isHebrew
            ? "התיאום תלוי בצורך ובזמינות הסופר."
            : "La coordination dépend du besoin et de la disponibilité du sofer."}
        </div>
      </div>
    </div>
  );
}
