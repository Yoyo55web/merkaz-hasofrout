// app/[locale]/page.tsx
import { isLocale, type Locale } from "./_i18n";
import SeoJsonLd from "./_seo/SeoJsonLd";
import { buildMetadata } from "./_seo/metadata";
import HomeSections from "./_components/HomeSections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  return buildMetadata({
    locale,
    title: locale === "he" ? "דף הבית" : "Accueil",
    description:
      locale === "he"
        ? "מרכז הסת״ם: הזמנה, בדיקה ותיאום סת״ם וכתיבה על קלף."
        : "Merkaz HaSTaM : demande, vérification et coordination STaM (Sefer Torah, Téfilines, Mézouzot) et écritures sur parchemin.",
    pathname: "/",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  return (
    <>
      <SeoJsonLd locale={locale} pathname="/" />
      <HomeSections locale={locale} />
    </>
  );
}
