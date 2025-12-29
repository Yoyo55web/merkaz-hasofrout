// app/[locale]/_components/HomeSections.tsx
import Image from "next/image";
import Link from "next/link";
import { t, type Locale } from "../_i18n";

export default function HomeSections({ locale }: { locale: Locale }) {
  const tr = t(locale);
  const isHebrew = locale === "he";

  const commanderHref = `/${locale}/commander`;
  const enSavoirPlusHref = `/${locale}/en-savoir-plus`;
  const servicesHref = `/${locale}/services`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* =========================
          HERO (visuel premium + CTA)
      ========================== */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-klaf-tefillin.jpg"
            alt={isHebrew ? "סת״ם – תפילין וקלף" : "STaM – Téfilines et klaf"}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {tr.home.badge}
              </div>

              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                {tr.home.h1}
              </h1>

              <p className="mt-4 text-lg text-slate-600 md:text-xl">
                {tr.home.subtitle}
              </p>

              <p className="mt-4 text-sm text-slate-500">{tr.home.micro}</p>

              {/* Micro-copy halakhique */}
              <div className="mt-5 text-xs text-slate-600">
                {isHebrew ? (
                  <span>
                    <span className="font-semibold text-slate-900">
                      מסגרת הלכתית:
                    </span>{" "}
                    בדיקה/כתיבה ע״י סופר מקצועי (בהתאם לזמינות) • דיסקרטיות מלאה
                  </span>
                ) : (
                  <span>
                    <span className="font-semibold text-slate-900">
                      Cadre halakhique :
                    </span>{" "}
                    vérification/écriture par un sofer compétent (selon
                    disponibilité) • discrétion totale
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={commanderHref}
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                >
                  {tr.cta.commanderOnline}
                </Link>

                <a
                  href="#categories"
                  className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {tr.cta.goToForm}
                </a>

                {/* ✅ NEW: Services visible depuis l’accueil */}
                <Link
                  href={servicesHref}
                  className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {isHebrew ? "שירותים" : "Services"}
                </Link>
              </div>

              {/* Micro trust badges */}
              <div className="mt-7 grid grid-cols-2 gap-2 text-xs text-slate-600 sm:grid-cols-3">
                <div className="rounded-xl border bg-white/80 px-3 py-2">
                  {isHebrew ? "מסגרת הלכתית" : "Cadre halakhique"}
                </div>
                <div className="rounded-xl border bg-white/80 px-3 py-2">
                  {isHebrew ? "סופרים מוסמכים" : "Sofrim diplômés"}
                </div>
                <div className="rounded-xl border bg-white/80 px-3 py-2">
                  {isHebrew ? "דיסקרטיות" : "Discrétion"}
                </div>
              </div>

              {/* Clarifier STaM */}
              <div className="mt-4 text-xs text-slate-500">
                {isHebrew ? (
                  <span>סת״ם = ספר תורה, תפילין, מזוזות</span>
                ) : (
                  <span>
                    <span className="font-semibold">STaM</span> ={" "}
                    <span className="font-semibold">S</span>efer Torah,{" "}
                    <span className="font-semibold">T</span>éfilines,{" "}
                    <span className="font-semibold">M</span>ézouzot
                  </span>
                )}
              </div>

              {/* En savoir plus */}
              <div className="mt-6">
                <Link
                  href={enSavoirPlusHref}
                  className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700"
                >
                  {isHebrew ? "לפרטים נוספים →" : "En savoir plus →"}
                </Link>
              </div>
            </div>

            {/* TRUST BOX */}
            <div className="rounded-2xl border bg-white/85 p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{tr.home.trustTitle}</h2>

              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• {tr.home.trust1}</li>
                <li>• {tr.home.trust2}</li>
                <li>• {tr.home.trust3}</li>
              </ul>

              <div className="mt-6 grid gap-2">
                <a
                  href="#steps"
                  className="group rounded-xl border bg-white px-4 py-3 text-left hover:bg-slate-50"
                >
                  <div className="text-xs font-semibold text-slate-500">
                    {isHebrew ? "איך זה עובד" : "Comment ça marche"}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {isHebrew ? "3 שלבים פשוטים" : "3 étapes simples"}{" "}
                    <span className="text-slate-500 group-hover:text-slate-700">
                      →
                    </span>
                  </div>
                </a>

                <Link
                  href={commanderHref}
                  className="rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
                >
                  {isHebrew ? "להתחיל עכשיו" : "Démarrer maintenant"}
                </Link>

                {/* ✅ NEW: Services depuis la Trust box */}
                <Link
                  href={servicesHref}
                  className="rounded-xl border bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {isHebrew ? "לכל השירותים" : "Voir tous les services"}
                </Link>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                {isHebrew ? "ללא תשלום בשלב זה" : "Aucun paiement à ce stade"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CATEGORIES (conversion)
      ========================== */}
      <section id="categories" className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {tr.home.categoriesTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {isHebrew
                ? "בחר קטגוריה והמשך לטופס קצר."
                : "Choisissez une catégorie puis passez au formulaire."}
            </p>
          </div>

          <Link
            href={commanderHref}
            className="hidden rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 md:inline-flex"
          >
            {tr.cta.start}
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <CategoryCard
            locale={locale}
            title={tr.home.cat1t}
            desc={tr.home.cat1d}
            href={commanderHref}
          />
          <CategoryCard
            locale={locale}
            title={tr.home.cat2t}
            desc={tr.home.cat2d}
            href={commanderHref}
          />
          <CategoryCard
            locale={locale}
            title={tr.home.cat3t}
            desc={tr.home.cat3d}
            href={commanderHref}
          />
          <CategoryCard
            locale={locale}
            title={tr.home.cat4t}
            desc={tr.home.cat4d}
            href={commanderHref}
          />
        </div>
      </section>

      {/* =========================
          ✅ SERVICES (NEW) — lien direct depuis l’accueil
      ========================== */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                {isHebrew ? "שירותים" : "Services"}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {isHebrew
                  ? "בחרו שירות — וקבלו מענה מסודר."
                  : "Choisissez un service — et recevez une réponse structurée."}
              </p>
            </div>

            <Link
              href={servicesHref}
              className="hidden rounded-xl border bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 md:inline-flex"
            >
              {isHebrew ? "לכל השירותים →" : "Tous les services →"}
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              locale={locale}
              href={`/${locale}/mezouzot`}
              title={isHebrew ? "מזוזות" : "Mézouzot"}
              desc={
                isHebrew
                  ? "הזמנה/תיאום מזוזות כשרות לפי ההלכה."
                  : "Commande & coordination de mézouzot cachères."
              }
            />
            <ServiceCard
              locale={locale}
              href={`/${locale}/verifications`}
              title={isHebrew ? "בדיקות" : "Vérifications"}
              desc={
                isHebrew
                  ? "אבחון מצב לפני תיקון/החלפה."
                  : "Diagnostic avant réparation ou remplacement."
              }
            />
            <ServiceCard
              locale={locale}
              href={`/${locale}/reparations`}
              title={isHebrew ? "תיקונים" : "Réparations"}
              desc={
                isHebrew
                  ? "תיקונים לפי ההלכה אחרי בדיקה."
                  : "Réparations selon la Halakha après vérification."
              }
            />
            <ServiceCard
              locale={locale}
              href={`/${locale}/sefer-torah`}
              title={isHebrew ? "ספר תורה" : "Séfer Torah"}
              desc={
                isHebrew
                  ? "כתיבה/בדיקה/תיקון/הגהה."
                  : "Écriture, vérification, réparations, haga’a."
              }
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={servicesHref}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {isHebrew ? "לכל השירותים" : "Voir tous les services"}
            </Link>

            <Link
              href={commanderHref}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              {isHebrew ? "שליחת בקשה (30 שנ׳)" : "Faire une demande (30 sec)"}
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          IMAGE SECTION — Exigence halakhique (batim)
      ========================== */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                {isHebrew
                  ? "דרישה הלכתית ללא פשרות"
                  : "Une exigence halakhique sans compromis"}
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {isHebrew
                  ? "תפילין נכתבים ונבדקים בקפדנות — צורת הבתים, כתיבה, תגים, יישור ובקרת איכות — כדי שתקבלו מענה ברור ושקט נפשי."
                  : "Chaque travail est suivi avec rigueur : forme des batim, écriture, taguim, alignement et contrôles — pour une réponse claire et une tranquillité d’esprit."}
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  href={commanderHref}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  {isHebrew ? "שליחת בקשה" : "Faire une demande"}
                </Link>
                <Link
                  href={enSavoirPlusHref}
                  className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {isHebrew ? "לפרטים" : "Voir les détails"}
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
              <Image
                src="/images/batim-angle.jpg"
                alt={isHebrew ? "תפילין — בתים" : "Téfilines — batim"}
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          HOW IT WORKS (conversion)
      ========================== */}
      <section id="steps" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {tr.home.stepsTitle}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={commanderHref}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              {tr.cta.commanderOnline}
            </Link>
            <Link
              href={enSavoirPlusHref}
              className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
            >
              {isHebrew ? "שאלות נפוצות" : "FAQ & détails"}
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          IMAGE SECTION — Méthode (klaf fan)
      ========================== */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm order-2 md:order-1">
              <Image
                src="/images/klaf-fan.jpg"
                alt={isHebrew ? "כתיבה על קלף" : "Écriture sur klaf"}
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                {isHebrew
                  ? "עבודה אומנותית — אות אחרי אות"
                  : "Un travail artisanal, lettre après lettre"}
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {isHebrew
                  ? "כל קלף נכתב ביד, בקדושה ובדיוק. אין קיצורי דרך — רק עבודה מסודרת, עקבית וברורה."
                  : "Chaque parchemin est écrit à la main, dans la rigueur et la constance. Pas de raccourcis : uniquement un travail propre, suivi, et clair."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          IMAGE SECTION — Preuve (ktav)
      ========================== */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                {isHebrew
                  ? "כתיבה ברורה ותואמת הלכה"
                  : "Une écriture claire et conforme à la Halakha"}
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {isHebrew
                  ? "כתיבה אחידה וקריאה, תגים מסודרים וצורת אותיות מדויקת — כדי שתדעו בדיוק מה אתם מקבלים."
                  : "Écriture régulière, lisible, taguim soignés et forme des lettres maîtrisée — pour savoir exactement ce que vous recevez."}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
              <Image
                src="/images/ktav-proof.jpg"
                alt={isHebrew ? "דוגמת כתיבה" : "Exemple d’écriture"}
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CITIES (SEO local)
      ========================== */}
      <section id="cities" className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {isHebrew ? "שירות פעיל בערים" : "Service actif dans ces villes"}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {isHebrew
              ? "עמודים ייעודיים לפי עיר כדי שתמצאו אותנו מהר יותר."
              : "Pages dédiées par ville pour vous aider à nous trouver rapidement."}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <CityCard
              locale={locale}
              href={`/${locale}/sofrout-netanya`}
              title={isHebrew ? "סופרות בנתניה" : "Sofrout à Netanya"}
              desc={
                isHebrew
                  ? "תיאום דיסקרטי • מענה ברור"
                  : "Coordination discrète • réponse claire"
              }
            />
            <CityCard
              locale={locale}
              href={`/${locale}/sofrout-jerusalem`}
              title={isHebrew ? "סופרות בירושלים" : "Sofrout à Jérusalem"}
              desc={
                isHebrew
                  ? "בדיקה • רכישה • תיקון"
                  : "Vérification • achat • restauration"
              }
            />
            <CityCard
              locale={locale}
              href={`/${locale}/sofrout-beit-shemesh`}
              title={isHebrew ? "סופרות בבית שמש" : "Sofrout à Beit Shemesh"}
              desc={
                isHebrew
                  ? "מסגרת הלכתית • דיסקרטיות"
                  : "Cadre halakhique • discrétion"
              }
            />
          </div>

          <div className="mt-6">
            <Link
              href={commanderHref}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              {isHebrew ? "שליחת בקשה (30 שנ׳)" : "Faire une demande (30 sec)"}
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-semibold">
              {isHebrew ? "רוצים תשובה ברורה?" : "Vous voulez une réponse claire ?"}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {isHebrew
                ? "שלחו בקשה קצרה — נחזור אליכם עם מענה מסודר."
                : "Envoyez une demande courte — on vous répond de manière structurée, sans pression."}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={commanderHref}
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {tr.cta.start}
              </Link>

              <Link
                href={servicesHref}
                className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                {isHebrew ? "לכל השירותים" : "Voir les services"}
              </Link>

              <Link
                href={enSavoirPlusHref}
                className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                {isHebrew ? "לפרטים נוספים" : "En savoir plus"}
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              {isHebrew ? "ללא תשלום בשלב זה" : "Aucun paiement à ce stade"}
            </p>
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-3 md:hidden">
        <Link
          href={commanderHref}
          className="block w-full rounded-xl bg-emerald-600 py-3 text-center text-sm font-semibold text-white"
        >
          {tr.home.sticky}
        </Link>
      </div>
    </main>
  );
}

/* -----------------------------
   Cards
------------------------------ */

function CategoryCard({
  locale,
  title,
  desc,
  href,
}: {
  locale: Locale;
  title: string;
  desc: string;
  href: string;
}) {
  const isHebrew = locale === "he";
  return (
    <Link
      href={href}
      className="group rounded-2xl border bg-white p-5 hover:bg-slate-50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-1 text-sm text-slate-600">{desc}</div>
        </div>
        <div className="rounded-xl border bg-white px-3 py-2 text-xs font-semibold text-slate-900 group-hover:bg-slate-100">
          {isHebrew ? "להזמנה" : "Commander"}
        </div>
      </div>
    </Link>
  );
}

function ServiceCard({
  locale,
  href,
  title,
  desc,
}: {
  locale: Locale;
  href: string;
  title: string;
  desc: string;
}) {
  const isHebrew = locale === "he";
  return (
    <Link
      href={href}
      className="group rounded-2xl border bg-white p-5 transition hover:bg-white hover:shadow-sm"
    >
      <div className="text-base font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
      <div className="mt-4 inline-flex rounded-xl border bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900 group-hover:bg-slate-100">
        {isHebrew ? "פתיחה →" : "Ouvrir →"}
      </div>
    </Link>
  );
}

function CityCard({
  locale,
  href,
  title,
  desc,
}: {
  locale: Locale;
  href: string;
  title: string;
  desc: string;
}) {
  const isHebrew = locale === "he";
  return (
    <Link
      href={href}
      className="group rounded-2xl border bg-white p-5 hover:bg-slate-50"
    >
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
      <div className="mt-4 inline-flex rounded-xl border bg-white px-3 py-2 text-xs font-semibold text-slate-900 group-hover:bg-slate-100">
        {isHebrew ? "לקרוא" : "Voir"}
      </div>
    </Link>
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
