import type { Locale } from "../_i18n";

const PHONE_TEL = "972585360510";
const WHATSAPP = `https://wa.me/${PHONE_TEL}`;
const BASE_URL = "https://merkaz-hasofrout.com";

export default function SeoJsonLd({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string; // "/commander" etc (without locale)
}) {
  const isHebrew = locale === "he";
  const url = `${BASE_URL}/${locale}${pathname === "/" ? "" : pathname}`;

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: isHebrew ? "מרכז הסת״ם" : "Merkaz HaSTaM",
    url: `${BASE_URL}/${locale}`,
    inLanguage: isHebrew ? "he" : "fr",
  };

  const business = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: isHebrew ? "מרכז הסת״ם" : "Merkaz HaSTaM",
    url,
    telephone: `+${PHONE_TEL}`,
    sameAs: [WHATSAPP],
    areaServed: "IL",
    inLanguage: isHebrew ? "he" : "fr",
    description: isHebrew
      ? "תיאום סת״ם וכתיבה על קלף: מזוזות, תפילין, ספר תורה, מגילת אסתר ועוד."
      : "Coordination STaM & écritures sur klaf : Mézouzot, Téfilines, Séfer Torah, Meguilat Esther, etc.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
    </>
  );
}
