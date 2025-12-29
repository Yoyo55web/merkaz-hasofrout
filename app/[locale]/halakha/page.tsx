import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale } from "../_i18n";

export const metadata: Metadata = {
  title: "Cadre halakhique — Merkaz HaSTaM",
  description:
    "Cadre de travail : ketiva conforme, sofer qualifié, responsabilité sur la ketiva, recommandations de Rav (FR/HE).",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const isHebrew = locale === "he";

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-slate-900">
      <h1 className="text-3xl font-semibold">
        {isHebrew ? "מסגרת הלכתית (סת״ם)" : "Cadre halakhique (STaM)"}
      </h1>

      <div className="mt-8 space-y-8 text-sm leading-7 text-slate-800">
        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "1) עיקרון" : "1) Principe"}</h2>
          <p className="mt-2">
            {isHebrew
              ? "כתיבת סת״ם וכתיבה על קלף מחייבות הקפדה הלכתית מלאה: סופר ירא שמים, בקיאות בדינים, וחומרי גלם כשרים."
              : "La ketiva de STaM et l’écriture sur klaf exigent une conformité halakhique stricte : sofer fiable, maîtrise des dinim, matériaux cachères."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">{isHebrew ? "2) מי אחראי על הכשרות" : "2) Qui porte la responsabilité de la ketiva"}</h2>
          <p className="mt-2">
            {isHebrew
              ? "האחריות ההלכתית והמקצועית על עצם הכתיבה/הגהה/כשרות היא של הסופר המבצע (ולפי הצורך מגיה)."
              : "La responsabilité halakhique et professionnelle sur la ketiva elle-même (haga’ha, conformité) incombe au sofer exécutant (et, si besoin, au magiah)."}
          </p>
        </section>

        <section className="rounded-xl border bg-slate-50 p-4">
          <p className="text-xs text-slate-600">
            {isHebrew
              ? "Merkaz HaSTaM מספק תיאום ושירות. לשאלות הלכתיות אישיות — יש לפנות לרב מוסמך."
              : "Merkaz HaSTaM fournit coordination & service. Pour une décision halakhique personnelle, consultez un Rav."}
          </p>
        </section>

        <div className="pt-2">
          <Link className="text-sm font-semibold underline" href={`/${locale}/cgv`}>
            {isHebrew ? "תקנון" : "CGV"}
          </Link>
          <span className="mx-2 text-slate-400">•</span>
          <Link className="text-sm font-semibold underline" href={`/${locale}/politique-confidentialite`}>
            {isHebrew ? "מדיניות פרטיות" : "Confidentialité"}
          </Link>
        </div>
      </div>
    </main>
  );
}
