// app/[locale]/mentions-legales/page.tsx
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
    title: locale === "he" ? "הצהרה משפטית" : "Mentions légales",
    description:
      locale === "he"
        ? "מידע משפטי, שימוש באתר ופרטיות — Merkaz HaSTaM."
        : "Informations légales, utilisation du site et confidentialité — Merkaz HaSTaM.",
    pathname: "/mentions-legales",
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

  const blocks = isHebrew
    ? [
        {
          h: "מפעיל האתר",
          p: "שם/חברה: [למלא]\nכתובת: [למלא]\nטלפון: [למלא]\nאימייל: [למלא]",
        },
        {
          h: "מהות השירות",
          p: "Merkaz HaSTaM מציג מידע ומאפשר ליצור קשר/בקשה לשירותי סת״ם (מזוזות, תפילין, בדיקות, תיקונים, ספר תורה) בהתאם להלכה.",
        },
        {
          h: "אחריות",
          p: "המידע באתר כללי בלבד. זמני טיפול/מחירים/ביצוע נקבעים לפי בדיקה ופרטי הבקשה. אין לראות בתוכן ייעוץ הלכתי מחייב.",
        },
        {
          h: "פרטיות",
          p: "נתוני פנייה (שם/טלפון/אימייל/פרטי בקשה) משמשים למענה וטיפול בבקשה בלבד.",
        },
        {
          h: "קניין רוחני",
          p: "כל התכנים באתר (טקסטים, עיצוב, לוגו) מוגנים. אין להעתיק ללא אישור מראש.",
        },
      ]
    : [
        {
          h: "Éditeur du site",
          p: "Nom / Structure : [À compléter]\nAdresse : [À compléter]\nTéléphone : [À compléter]\nEmail : [À compléter]",
        },
        {
          h: "Objet du site",
          p: "Merkaz HaSTaM présente des informations et permet d’effectuer des demandes liées au STaM (mezouzot, téfilines, vérifications, réparations, Séfer Torah) dans le respect de la Halakha.",
        },
        {
          h: "Responsabilité",
          p: "Les informations sont fournies à titre indicatif. Les délais, prix et modalités dépendent du cas et de la validation de la demande. Ceci ne remplace pas une décision halakhique personnalisée.",
        },
        {
          h: "Données & confidentialité",
          p: "Les données envoyées via les formulaires (nom, téléphone, email, détails) sont utilisées uniquement pour répondre et traiter la demande.",
        },
        {
          h: "Propriété intellectuelle",
          p: "Les contenus (textes, visuels, design, logo) sont protégés. Toute reproduction nécessite une autorisation.",
        },
      ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SeoJsonLd locale={locale} pathname="/mentions-legales" />

      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 py-12">
          <h1 className="text-3xl font-semibold tracking-tight">
            {isHebrew ? "הצהרה משפטית" : "Mentions légales"}
          </h1>
          <p className="mt-3 text-slate-600 whitespace-pre-line">
            {isHebrew
              ? "דף זה הוא תבנית. יש להשלים את הפרטים בהתאם למצב שלך."
              : "Cette page est un modèle. Pense à compléter les informations selon ta situation."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/commander`}
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900"
            >
              {isHebrew ? "שליחת בקשה" : "Faire une demande"}
            </Link>

            <Link
              href={`/${locale}/politique-confidentialite`}
              className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {isHebrew ? "מדיניות פרטיות" : "Confidentialité"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="space-y-4">
          {blocks.map((b) => (
            <section key={b.h} className="rounded-2xl border bg-white p-6">
              <h2 className="text-lg font-semibold">{b.h}</h2>
              <p className="mt-2 whitespace-pre-line text-sm text-slate-700">
                {b.p}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-8 text-xs text-slate-500">
          {isHebrew
            ? "המלצה: התאם את המסמך לדרישות החוק הרלוונטיות למדינה/עסק שלך."
            : "Recommandation : adapte ce document aux exigences légales correspondant à ta situation (pays/structure)."}
        </div>
      </section>
    </main>
  );
}
