// app/[locale]/confidentialite/page.tsx
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
    title: locale === "he" ? "מדיניות פרטיות" : "Politique de confidentialité",
    description:
      locale === "he"
        ? "מדיניות פרטיות עבור Merkaz HaSTaM."
        : "Politique de confidentialité de Merkaz HaSTaM.",
    pathname: "/confidentialite",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  const isHe = locale === "he";

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight">
        {isHe ? "מדיניות פרטיות" : "Politique de confidentialité"}
      </h1>

      <p className="mt-4 text-gray-700 leading-relaxed">
        {isHe
          ? "דף זה מסביר כיצד אנו אוספים, משתמשים ושומרים מידע שנשלח אלינו דרך האתר או דרך WhatsApp."
          : "Cette page explique comment nous collectons, utilisons et protégeons les informations envoyées via le site ou via WhatsApp."}
      </p>

      <section className="mt-8 space-y-4 text-gray-800 leading-relaxed">
        <h2 className="text-xl font-semibold">
          {isHe ? "1) מידע שנאסף" : "1) Données collectées"}
        </h2>
        <p>
          {isHe
            ? "אנו עשויים לקבל: שם, עיר, פרטי קשר, ותיאור הבקשה (למשל: בדיקה/תיקון, דחיפות, הערות)."
            : "Nous pouvons recevoir : nom, ville, coordonnées, et description de la demande (ex. vérification/réparation, urgence, notes)."}
        </p>

        <h2 className="text-xl font-semibold">
          {isHe ? "2) שימוש במידע" : "2) Utilisation des données"}
        </h2>
        <p>
          {isHe
            ? "המידע משמש אך ורק לטיפול בבקשה: יצירת קשר, תיאום, העברת פרטים לסופר המתאים, ומעקב."
            : "Les données servent uniquement au traitement de votre demande : prise de contact, coordination, transmission au sofer concerné, et suivi."}
        </p>

        <h2 className="text-xl font-semibold">
          {isHe ? "3) שיתוף עם צדדים שלישיים" : "3) Partage avec des tiers"}
        </h2>
        <p>
          {isHe
            ? "אנו משתפים פרטים רק עם הסופר/נותן השירות הרלוונטי לצורך טיפול בבקשה. איננו מוכרים מידע."
            : "Nous partageons les informations uniquement avec le sofer / prestataire concerné afin de traiter la demande. Nous ne vendons pas vos données."}
        </p>

        <h2 className="text-xl font-semibold">
          {isHe ? "4) שמירה ואבטחה" : "4) Conservation et sécurité"}
        </h2>
        <p>
          {isHe
            ? "אנו שומרים מידע למשך הזמן הנדרש לטיפול ובקרה. אנו נוקטים באמצעים סבירים להגנה על המידע."
            : "Nous conservons les informations le temps nécessaire au traitement et au suivi. Nous appliquons des mesures raisonnables de protection."}
        </p>

        <h2 className="text-xl font-semibold">
          {isHe ? "5) זכויות" : "5) Vos droits"}
        </h2>
        <p>
          {isHe
            ? "ניתן לבקש גישה/תיקון/מחיקה של מידע על ידי פנייה דרך ערוץ הקשר הרגיל."
            : "Vous pouvez demander l’accès, la correction ou la suppression de vos informations en nous contactant via le canal habituel."}
        </p>

        <h2 className="text-xl font-semibold">
          {isHe ? "6) יצירת קשר" : "6) Contact"}
        </h2>
        <p>
          {isHe
            ? "לכל שאלה בנוגע למדיניות זו, פנו אלינו דרך WhatsApp או דרך דף יצירת קשר."
            : "Pour toute question relative à cette politique, contactez-nous via WhatsApp ou via la page Contact."}
        </p>

        <p className="text-sm text-gray-500">
          {isHe
            ? "עדכון אחרון: דצמבר 2025."
            : "Dernière mise à jour : décembre 2025."}
        </p>
      </section>
    </main>
  );
}
