import type { Metadata } from "next";
import Link from "next/link";
import { t, isLocale, type Locale } from "../_i18n";

export const metadata: Metadata = {
  title: "CGV — Merkaz HaSTaM",
  description:
    "Conditions Générales de Vente / Terms (FR/HE) : commande, devis, paiement, livraison, SAV, responsabilité liée à la ketiva (sofer).",
};

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
    <main className="mx-auto max-w-3xl px-6 py-12 text-slate-900">
      <h1 className="text-3xl font-semibold">{isHebrew ? "תנאי שימוש ומכירה (תקנון)" : "Conditions Générales (CGV)"}</h1>
      <p className="mt-3 text-sm text-slate-600">
        {isHebrew
          ? "מסמך זה מסדיר את תנאי השירות/מכירה של Merkaz HaSTaM."
          : "Ce document encadre les conditions de service/vente de Merkaz HaSTaM."}
      </p>

      <div className="mt-8 space-y-8 text-sm leading-7 text-slate-800">
        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "1) מה אנחנו עושים" : "1) Notre rôle"}</h2>
          <p className="mt-2">
            {isHebrew ? (
              <>
                Merkaz HaSTaM הוא גוף תיאום ומסירה: אנו מקבלים פנייה/הזמנה מהלקוח,
                מבצעים תיאום מול סופר מתאים, ומנהלים את התהליך. הכתיבה/בדיקה/תיקון
                מבוצעים ע״י סופר (צד ג׳).
              </>
            ) : (
              <>
                Merkaz HaSTaM agit comme coordinateur : nous recevons la demande/commande,
                nous orientons vers un sofer adapté et nous suivons le processus. La
                ketiva / bedika / tikoun est effectuée par un sofer (tiers).
              </>
            )}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "2) תהליך הזמנה" : "2) Processus de commande"}</h2>
          <ul className="mt-2 list-disc space-y-2 ps-5">
            <li>{isHebrew ? "הלקוח ממלא טופס/וואטסאפ ומקבל הערכה ראשונית." : "Le client remplit le formulaire / WhatsApp et reçoit une première estimation."}</li>
            <li>{isHebrew ? "אישור עבודה/מחיר יתבצע בכתב (וואטסאפ/אימייל)." : "La validation du prix / du travail se fait par écrit (WhatsApp/email)."}</li>
            <li>{isHebrew ? "זמני ביצוע תלויים בסוג העבודה ובזמינות הסופר." : "Les délais dépendent du type de travail et de la disponibilité du sofer."}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "3) תשלום" : "3) Paiement"}</h2>
          <p className="mt-2">
            {isHebrew ? (
              <>
                כאשר יופעל תשלום מקוון: הלקוח משלם ל-Merkaz HaSTaM, ואנו משלמים לסופר
                לאחר ניכוי עמלה. תשלום יכול להיות מלא/מקדמה לפי סוג השירות.
              </>
            ) : (
              <>
                Quand le paiement en ligne sera activé : le client paie Merkaz HaSTaM,
                puis nous payons le sofer après déduction de notre marge. Le paiement
                peut être total ou partiel (acompte) selon le service.
              </>
            )}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "4) אחריות מקצועית / הלכתית" : "4) Responsabilité halakhique & qualité"}</h2>
          <p className="mt-2">
            {isHebrew ? (
              <>
                האחריות על עצם הכתיבה/כשרות/הגהה שייכת לסופר המבצע (ובמידת הצורך
                למגיה/בית דין). Merkaz HaSTaM אחראי לתיאום, תקשורת, והעברת המוצר/נתונים.
              </>
            ) : (
              <>
                La responsabilité sur la ketiva elle-même (kashrout, hagaha, conformité)
                incombe au sofer exécutant (et, si besoin, à un magiah/Beit Din). Merkaz
                HaSTaM est responsable de la coordination, de la communication et de la
                transmission.
              </>
            )}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "5) ביטול/שינוי" : "5) Annulation / modification"}</h2>
          <p className="mt-2">
            {isHebrew ? (
              <>
                עבודות כתיבה בהתאמה אישית אינן ניתנות לביטול לאחר תחילת עבודה, למעט
                מקרה חריג ובהסכמה. בבדיקות/שירותים: ביטול אפשרי לפני ביצוע.
              </>
            ) : (
              <>
                Les écritures sur mesure ne sont pas annulables après démarrage de la
                ketiva, sauf cas exceptionnel accepté. Pour les vérifications/services :
                annulation possible avant exécution.
              </>
            )}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "6) סודיות" : "6) Confidentialité"}</h2>
          <p className="mt-2">
            {isHebrew
              ? "מידע אישי ותמונות נשמרים בסודיות ומועברים רק לצורך הטיפול בפנייה."
              : "Les données personnelles et photos restent confidentielles et ne sont transmises qu’aux fins de traitement."}
          </p>
        </section>

        <section className="rounded-xl border bg-slate-50 p-4">
          <p className="text-xs text-slate-600">
            {isHebrew
              ? "מסמך זה אינו ייעוץ הלכתי אישי. לשאלות הלכתיות ספציפיות יש לפנות לרב."
              : "Ce document n’est pas un avis halakhique personnel. Pour une question halakhique spécifique, consultez un Rav."}
          </p>
        </section>

        <div className="pt-2">
          <Link className="text-sm font-semibold underline" href={`/${locale}/politique-confidentialite`}>
            {isHebrew ? "מדיניות פרטיות" : "Politique de confidentialité"}
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
