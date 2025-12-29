import type { Metadata } from "next";
import type { Locale } from "../_i18n";

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

const BASE_URL = "https://merkaz-hasofrout.com";

export function canonicalPath(locale: Locale, pathname: string) {
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  // "/" => "/fr" ou "/he"
  return `/${locale}${p === "/" ? "" : p}`;
}

export function buildMetadata(args: {
  locale: Locale;
  title: string;
  description?: string;
  pathname: string; // "/commander" etc (without locale)
}): Metadata {
  const { locale, title, pathname } = args;
  const site = SITE[locale];
  const canonical = canonicalPath(locale, pathname);
  const url = `${BASE_URL}${canonical}`;

  return {
    title: `${title} — ${site.baseTitle}`,
    description: args.description ?? site.description,
    alternates: { canonical },
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title: `${title} — ${site.baseTitle}`,
      description: args.description ?? site.description,
      locale: locale === "fr" ? "fr_FR" : "he_IL",
      type: "website",
      url,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.baseTitle}`,
      description: args.description ?? site.description,
    },
  };
}
