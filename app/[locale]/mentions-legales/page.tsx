// app/[locale]/mentions-legales/page.tsx
import Link from "next/link";
import { isLocale, type Locale } from "../_i18n";
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
    title: locale === "he" ? "הצהרה משפטית" : "Mentions légales",
    description:
      locale === "he"
        ? "מידע משפטי ותנאי שימוש – Merkaz HaSTaM."
        : "Informations légales et conditions d’utilisation – Merkaz HaSTaM.",
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

  const title = locale === "he" ? "הצהרה משפטית" : "Mentions légales";
  const intro =
    locale === "he"
      ? "דף זה כולל מידע כללי. יש לעדכן את הפרטים (שם/כתובת/טלפון/אימייל/ח.פ. במידת הצורך) לפי המצב שלך."
      : "Cette page contient un modèle à compléter (nom/adresse/téléphone/email/numéro d’entreprise si applicable) selon ta situation.";

  const blocks =
    locale === "he"
      ? [
          {
            h: "מפעיל האתר",
            p: "שם/חברה: [למלא]\nכתובת: [למלא]\nטלפון: [למלא]\nאימייל: [למלא]",
          },
          {
            h: "מהות השירות",
            p: "Merkaz HaSTaM מציג מידע ומאפשר ליצור קשר/בקשה לשירותי סת״ם (מזוזות, תפילין, בדיקות, תיקונים, ספרי תורה) בהתאם להלכה.",
          },
          {
            h: "אחריות",
            p: "המידע באתר הוא כללי בלבד. ביצוע בפועל, זמני טיפול ומחירים נקבעים לפי בדיקה ופרטי ההזמנה. אין לראות במידע ייעוץ הלכתי מחייב.",
          },
          {
            h: "קניין רוחני",
            p: "כל התכנים באתר (טקסטים, עיצוב, לוגו) מוגנים. אין להעתיק ללא אישור מראש.",
          },
          {
            h: "פרטיות",
            p: "נתוני פנייה (שם/טלפון/אימייל/פרטי בקשה) משמשים למענה וטיפול בבקשה בלבד.",
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
            p: "Les informations sont données à titre indicatif. Les délais, prix et modalités dépendent du cas et de la validation de la demande. Ceci ne remplace pas une décision halakhique personnalisée.",
          },
          {
            h: "Propriété intellectuelle",
            p: "Les contenus (textes, visuels, design, logo) sont protégés. Toute reproduction nécessite une autorisation.",
          },
          {
            h: "Données & confidentialité",
            p: "Les données envoyées via les formulaires (nom, téléphone, email, détails) sont utilisées uniquement pour répondre et traiter la demande.",
          },
        ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mt-3 text-gray-600 whitespace-pre-line">{intro}</p>

      <div className="mt-8 space-y-6">
        {blocks.map((b) => (
          <section key={b.h} className="rounded-2xl border p-5">
            <h2 className="text-lg font-semibold">{b.h}</h2>
            <p className="mt-2 text-gray-700 whitespace-pre-line">{b.p}</p>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href={`/${locale}/commander`}
          className="rounded-xl bg-black px-5 py-3 text-white"
        >
          {locale === "he" ? "שליחת בקשה" : "Faire une demande"}

        </Link>
        <Link
          href={`/${locale}/services`}
          className="rounded-xl border px-5 py-3"
        >
          {locale === "he" ? "לשירותים" : "Voir les services"}
        </Link>
      </div>
    </main>
  );
}
