import Link from "next/link";
import { t, type Locale } from "../_i18n";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const tr = t(locale);
  const isHebrew = locale === "he";
  const base = `/${locale}`;

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="text-base font-semibold text-slate-900">
              {tr.brand.name}
            </div>
            <div className="mt-1 text-sm text-slate-600">{tr.brand.tagline}</div>
          </div>

          {/* Liens utiles (safe: seulement pages existantes) */}
          <div>
            <div className="text-sm font-semibold text-slate-900">
              {isHebrew ? "קישורים" : "Liens"}
            </div>

            <ul className="mt-3 grid gap-2 text-sm text-slate-700">
              <li>
                <Link className="hover:underline" href={`${base}/commander`}>
                  {tr.nav.commander}
                </Link>
              </li>

              {/* Active uniquement si tu crées ces pages */}
              {/*
              <li>
                <Link className="hover:underline" href={`${base}/services`}>
                  {tr.nav.services}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={`${base}/faq`}>
                  {tr.nav.faq}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={`${base}/contact`}>
                  {tr.nav.contact}
                </Link>
              </li>
              */}
            </ul>
          </div>

          {/* Légal (selon tes routes réelles) */}
          <div>
            <div className="text-sm font-semibold text-slate-900">{tr.nav.legal}</div>

            <ul className="mt-3 grid gap-2 text-sm text-slate-700">
              <li>
                <Link className="hover:underline" href={`${base}/cgv`}>
                  {tr.nav.terms}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href={`${base}/confidentialite`}
                >
                  {tr.nav.privacy}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={`${base}/halakha`}>
                  {tr.nav.halakha}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          {isHebrew
            ? "הערה: זמינות/זמנים/אופן ביצוע תלויים בצורך ובסופר. אנו מתאמים ומלווים."
            : "Note : disponibilités / délais / modalités dépendent du besoin et du sofer. Nous coordonnons et assurons le suivi."}
        </p>

        <div className="mt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} {tr.brand.name}
        </div>
      </div>
    </footer>
  );
}
