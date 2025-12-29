"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "fr" | "he";

export default function LocaleSwitch() {
  const pathname = usePathname() || "/";

  // détecte locale depuis l'URL
  const current: Locale = pathname.startsWith("/he") ? "he" : "fr";
  const target: Locale = current === "fr" ? "he" : "fr";

  // remplace exactement le préfixe /fr ou /he
  const href = pathname.replace(/^\/(fr|he)(?=\/|$)/, `/${target}`);

  // si jamais pathname n'avait pas de locale (cas rare), on préfixe
  const finalHref = href === pathname ? `/${target}${pathname === "/" ? "" : pathname}` : href;

  // bouton unique : texte = langue cible
  const label = target === "he" ? "עברית" : "FR";

  // couleurs (pas vert)
  const base =
    target === "he"
      ? "bg-indigo-600 text-white"
      : "bg-slate-900 text-white";

  const hover =
    target === "he"
      ? "hover:bg-indigo-700 hover:ring-indigo-200"
      : "hover:bg-black hover:ring-slate-200";

  return (
    <Link
      href={finalHref}
      className={[
        "inline-flex items-center justify-center",
        "rounded-xl px-3 py-2 text-sm font-semibold",
        "transition-all duration-150",
        "ring-0 hover:ring-4",
        "hover:-translate-y-[1px] active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-4",
        base,
        hover,
      ].join(" ")}
      aria-label={target === "he" ? "עברית" : "Français"}
      title={target === "he" ? "עברית" : "Français"}
    >
      {label}
    </Link>
  );
}
