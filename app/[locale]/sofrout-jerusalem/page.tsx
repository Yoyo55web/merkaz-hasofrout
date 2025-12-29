import Link from "next/link";
import { isLocale, type Locale } from "../_i18n";
import SeoJsonLd from "../_seo/SeoJsonLd";
import { buildMetadata } from "../_seo/metadata";

const CITY_FR = "Jérusalem";
const CITY_HE = "ירושלים";
const SLUG = "sofrout-jerusalem";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  const title =
    locale === "he"
      ? `סופרות ב${CITY_HE} | מרכז הסת״ם`
      : `Sofrout à ${CITY_FR} | Merkaz HaSTaM`;

  const description =
    locale === "he"
      ? `מזוזות ותפילין: בדיקה/רכישה/תיקון, הכוונה לספר תורה וכתיבה על קלף — תיאום דיסקרטי ב${CITY_HE} (בהתאם לזמינות).`
      : `Mézouzot & téfilines : vérification/achat/restauration, orientation Séfer Torah et écritures sur parchemin — coordination discrète à ${CITY_FR} (selon disponibilité).`;

  return buildMetadata({
    locale,
    title,
    description,
    pathname: `/${SLUG}`,
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
  const city = isHebrew ? CITY_HE : CITY_FR;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SeoJsonLd locale={locale} pathname={`/${SLUG}`} />

      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {isHebrew
                  ? "בקשה אונליין (30 שנ׳) — ללא תשלום בשלב זה"
                  : "Demande en ligne (30 sec) — aucun paiement pour l’instant"}
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                {isHebrew
                  ? `סופרות ב${city} — תיאום דיסקרטי ומענה ברור`
                  : `Sofrout à ${city} — coordination discrète et réponse claire`}
              </h1>

              <p className="mt-3 text-base text-slate-600">
                {isHebrew ? (
                  <>
                    סת״ם = ספר תורה, תפילין, מזוזות • בדיקה/רכישה/תיקון • כתיבה על
                    קלף — בהתאם לזמינות.
                  </>
                ) : (
                  <>
                    STaM = Sefer Torah, Téfilines, Mézouzot • vérification / achat
                    / restauration • écritures sur parchemin — selon disponibilité.
                  </>
                )}
              </p>

              <p className="mt-4 text-sm text-slate-500">
                {isHebrew
                  ? "מתארים בקצרה → מקבלים מענה ברור → מתקדמים רק אם זה מתאים לכם."
                  : "Décrivez brièvement → recevez une réponse claire → avancez seulement si cela vous convient."}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${locale}/commander`}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  {isHebrew ? "שליחת בקשה (30 שנ׳)" : "Faire une demande (30 sec)"}
                </Link>

                <Link
                  href={`/${locale}`}
                  className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {isHebrew ? "דף הבית" : "Accueil"}
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 text-xs text-slate-600 sm:grid-cols-3">
                <div className="rounded-xl border bg-slate-50 px-3 py-2">
                  {isHebrew ? "מסגרת הלכתית" : "Cadre halakhique"}
                </div>
                <div className="rounded-xl border bg-slate-50 px-3 py-2">
                  {isHebrew ? "דיסקרטיות" : "Discrétion"}
                </div>
                <div className="rounded-xl border bg-slate-50 px-3 py-2">
                  {isHebrew ? "מענה ברור" : "Réponse claire"}
                </div>
              </div>
            </div>

            {/* TRUST BOX */}
            <div className="rounded-2xl border bg-slate-50 p-6">
              <h2 className="text-lg font-semibold">
                {isHebrew ? "מה תקבלו בפועל" : "Ce que vous obtenez"}
              </h2>

              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  •{" "}
                  {isHebrew
                    ? "סופרים מוסמכים ובעלי ניסיון (לא מתחילים)."
                    : "Sofrim diplômés et expérimentés (pas des débutants)."}
                </li>
                <li>
                  •{" "}
                  {isHebrew
                    ? "מענה מסודר: הערכה / זמנים / אפשרויות — לפני שמתקדמים."
                    : "Réponse structurée : estimation / délais / options — avant d’avancer."}
                </li>
                <li>
                  •{" "}
                  {isHebrew
                    ? "דיסקרטיות מלאה: אין פרסום שמות / רשימות."
                    : "Discrétion totale : pas de publication de noms / listes."}
                </li>
              </ul>

              <div className="mt-6 grid gap-2">
                <Link
                  href={`/${locale}/commander`}
                  className="rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  {isHebrew ? "להתחיל עכשיו" : "Démarrer maintenant"}
                </Link>

                <a
                  href="#faq"
                  className="rounded-xl border bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {isHebrew ? "שאלות נפוצות" : "FAQ"}
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                {isHebrew
                  ? `פעיל במיוחד ב${CITY_HE} (בהתאם לזמינות).`
                  : `Particulièrement actif à ${CITY_FR} (selon disponibilité).`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">
              {isHebrew ? `שירותי סת״ם ב${city}` : `Services STaM à ${city}`}
            </h2>

            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p>
                {isHebrew
                  ? "פניות לגבי מזוזות ותפילין (בדיקה/רכישה/תיקון), הכוונה לספר תורה, וכתיבה על קלף לפי הצורך."
                  : "Demandes pour mézouzot et téfilines (vérification/achat/restauration), orientation Séfer Torah, et écritures sur parchemin selon besoin."}
              </p>

              <div className="rounded-xl border bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">
                  {isHebrew ? "איך זה עובד?" : "Comment ça marche ?"}
                </div>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li>• {isHebrew ? "ממלאים בקשה קצרה." : "Vous remplissez une demande courte."}</li>
                  <li>• {isHebrew ? "מקבלים מענה ברור." : "Vous recevez une réponse claire."}</li>
                  <li>• {isHebrew ? "מתקדמים רק אם זה מתאים." : "Vous avancez seulement si cela vous convient."}</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href={`/${locale}/commander`}
                className="block rounded-xl bg-slate-900 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                {isHebrew ? "שליחת בקשה (30 שנ׳)" : "Faire une demande (30 sec)"}
              </Link>
            </div>
          </div>

          <div id="faq" className="rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">FAQ</h3>

            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <div className="font-semibold">
                  {isHebrew ? "משלמים עכשיו?" : "Est-ce que je paye maintenant ?"}
                </div>
                <p className="mt-1 text-slate-600">
                  {isHebrew
                    ? "לא. זו בקשה/הערכה. תשלום יתווסף בהמשך רק אם תחליטו להתקדם."
                    : "Non. C’est une demande/estimation. Le paiement viendra plus tard uniquement si vous décidez d’avancer."}
                </p>
              </div>

              <div>
                <div className="font-semibold">
                  {isHebrew ? "אני לא בטוח מה צריך…" : "Je ne sais pas quoi choisir…"}
                </div>
                <p className="mt-1 text-slate-600">
                  {isHebrew
                    ? "תארו בקצרה (ואפשר תמונה בהמשך). נסביר את האפשרויות בצורה ברורה."
                    : "Décrivez simplement (et vous pourrez envoyer une photo ensuite). On vous explique les options clairement."}
                </p>
              </div>

              <div>
                <div className="font-semibold">
                  {isHebrew ? "אני רוצה מהודר מאוד." : "Je veux du très mehadrin."}
                </div>
                <p className="mt-1 text-slate-600">
                  {isHebrew
                    ? "ציינו זאת בבקשה. נתייחס בהתאם במסגרת הלכתית רצינית (בהתאם לזמינות)."
                    : "Indiquez-le dans la demande. On traite en conséquence dans un cadre halakhique sérieux (selon disponibilité)."}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href={`/${locale}/commander`}
                className="block rounded-xl bg-emerald-600 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-700"
              >
                {isHebrew ? "להתחיל עכשיו" : "Démarrer maintenant"}
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          {isHebrew
            ? "הערה: זמינות/זמנים/אופן ביצוע תלויים בצורך ובסופר. אנו מתאמים ומלווים."
            : "Note : disponibilités / délais / modalités dépendent du besoin et du sofer. Nous coordonnons et assurons le suivi."}
        </p>
      </section>
    </main>
  );
}
