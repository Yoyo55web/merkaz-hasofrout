import type { Metadata } from "next";
import type { Locale } from "./_i18n";

export const BASE_URL = "https://merkaz-hasofrout.com"; // ✅ change si besoin

const SITE = {
  fr: {
    name: "Merkaz HaSTaM",
    baseTitle: "Merkaz HaSTaM — Sofrout en Israël",
    description:
      "Commande, vérification et orientation STaM (סת״ם) : Mézouzot, Téfilines, Séfer Torah, Meguilat Esther et écritures sur klaf.",
  },
  he: {
    name: "מרכז הסת״ם",
    baseTitle: "מרכז הסת״ם — סופרות בישראל",
    description:
      "הזמנה, בדיקה ותיאום סת״ם: מזוזות, תפילין, ספר תורה וכתיבה על קלף.",
  },
} as const;

export function canonicalPath(locale: Locale, pathname: string) {
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `/${locale}${p === "/" ? "" : p}`;
}

export function absoluteUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${p}`;
}

export function buildMetadata(args: {
  locale: Locale;
  title: string;
  description?: string;
  pathname: string; // "/commander" etc (without locale)
}): Metadata {
  const { locale, title, pathname } = args;
  const site = SITE[locale];

  const canonical = canonicalPath(locale, pathname); // "/fr/commander"
  const canonicalAbs = absoluteUrl(canonical); // "https://.../fr/commander"

  const description = args.description ?? site.description;
  const fullTitle = `${title} — ${site.baseTitle}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical }, // ✅ canonical relatif OK ici

    openGraph: {
      title: fullTitle,
      description,
      locale: locale === "fr" ? "fr_FR" : "he_IL",
      type: "website",
      url: canonicalAbs, // ✅ ABSOLU (important)
      siteName: site.name,
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
