import type { Metadata } from "next";
import Link from "next/link";
import { t, isLocale, type Locale } from "../_i18n";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Merkaz HaSTaM",
  description:
    "Données personnelles, WhatsApp, formulaires, cookies, conservation, droits d’accès/suppression (FR/HE).",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const isHebrew = locale === "he";

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-slate-900">
      <h1 className="text-3xl font-semibold">
        {isHebrew ? "מדיניות פרטיות" : "Politique de confidentialité"}
      </h1>

      <div className="mt-8 space-y-8 text-sm leading-7 text-slate-800">
        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "1) איזה מידע נאסף" : "1) Quelles données"}</h2>
          <ul className="mt-2 list-disc space-y-2 ps-5">
            <li>{isHebrew ? "שם, טלפון, עיר, פרטי בקשה, תמונות שנשלחות בוואטסאפ." : "Nom, téléphone, ville, détails de demande, photos envoyées sur WhatsApp."}</li>
            <li>{isHebrew ? "מידע טכני בסיסי (סטטיסטיקה/מדידה) לצורך שיפור האתר." : "Données techniques minimales (mesure/statistiques) pour améliorer le site."}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "2) למה משתמשים בזה" : "2) Finalités"}</h2>
          <p className="mt-2">
            {isHebrew
              ? "לטיפול בפנייה, תיאום מול סופר, מתן הצעת מחיר, ושיפור השירות."
              : "Traiter la demande, coordonner avec un sofer, établir un devis, et améliorer le service."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "3) למי זה מועבר" : "3) Partage"}</h2>
          <p className="mt-2">
            {isHebrew
              ? "רק לסופר הרלוונטי/ספקים נחוצים, ורק במידה הנדרשת לטיפול."
              : "Uniquement au sofer concerné / prestataires nécessaires, et seulement ce qui est utile au traitement."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "4) שמירה ומחיקה" : "4) Conservation & suppression"}</h2>
          <p className="mt-2">
            {isHebrew
              ? "נשמור נתונים לזמן סביר לצורך טיפול ומעקב. ניתן לבקש מחיקה."
              : "Conservation raisonnable pour le suivi. Vous pouvez demander la suppression."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "5) יצירת קשר" : "5) Contact"}</h2>
          <p className="mt-2">
            {isHebrew
              ? "לבקשות גישה/מחיקה: פנו דרך עמוד יצירת קשר."
              : "Pour accès/suppression : contactez-nous via la page Contact."}
          </p>
          <Link className="mt-2 inline-block underline font-semibold" href={`/${locale}/contact`}>
            {isHebrew ? "לעמוד יצירת קשר" : "Page Contact"}
          </Link>
        </section>

        <div className="pt-2">
          <Link className="text-sm font-semibold underline" href={`/${locale}/cgv`}>
            {isHebrew ? "תקנון" : "CGV"}
          </Link>
          <span className="mx-2 text-slate-400">•</span>
          <Link className="text-sm font-semibold underline" href={`/${locale}/halakha`}>
            {isHebrew ? "מסגרת הלכתית" : "Cadre halakhique"}
          </Link>
        </div>
      </div>
    </main>
  );
}
