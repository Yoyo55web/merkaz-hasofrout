"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LocaleSwitch from "./LocaleSwitch";
import { t, type Locale } from "../_i18n";

export default function SiteHeader({ locale }: { locale: Locale }) {
  const tr = t(locale);
  const isHebrew = locale === "he";

  const accent =
    locale === "he"
      ? "bg-indigo-600 hover:bg-indigo-700"
      : "bg-slate-900 hover:bg-black";

  const ctaColor =
    locale === "he"
      ? "bg-indigo-600 hover:bg-indigo-700"
      : "bg-emerald-600 hover:bg-emerald-700";

  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Fermer au changement de route (au clic sur un lien)
  function close() {
    setOpen(false);
  }

  // ESC pour fermer
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Empêcher le scroll du body quand le drawer est ouvert
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Focus dans le drawer (simple, propre)
  useEffect(() => {
    if (!open) return;
    setTimeout(() => drawerRef.current?.focus(), 0);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        {/* Brand */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-semibold text-slate-900"
          onClick={close}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            ס
          </span>
          <span>{tr.brand.name}</span>
        </Link>

        {/* ================= Desktop ================= */}
        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-2">
            <Link
              href={`/${locale}`}
              className={`rounded-xl px-4 py-2 text-sm font-semibold text-white ${accent}`}
            >
              {tr.nav.home}
            </Link>

            <Link
              href={`/${locale}/en-savoir-plus`}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {tr.nav.learnMore}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {tr.nav.contact}
            </Link>

            <Link
              href={`/${locale}/commander`}
              className={`rounded-xl px-4 py-2 text-sm font-semibold text-white ${ctaColor}`}
            >
              {tr.cta.commanderOnline}
            </Link>
          </nav>

          <LocaleSwitch />
        </div>

        {/* ================= Mobile (clean) ================= */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Switch langue (Mobile) */}
          <LocaleSwitch />

          {/* Hamburger */}
          <button
            type="button"
            aria-label={isHebrew ? "פתח תפריט" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="rounded-xl border bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            {/* simple icon */}
            <span className="block h-0.5 w-5 bg-slate-900" />
            <span className="mt-1.5 block h-0.5 w-5 bg-slate-900" />
            <span className="mt-1.5 block h-0.5 w-5 bg-slate-900" />
          </button>
        </div>
      </div>

      {/* ================= Drawer overlay + panel ================= */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          {/* Overlay */}
          <button
            aria-label={isHebrew ? "סגור תפריט" : "Fermer le menu"}
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer panel */}
          <div
            ref={drawerRef}
            tabIndex={-1}
            className={[
              "absolute top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl outline-none",
              isHebrew ? "left-0" : "right-0",
            ].join(" ")}
          >
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
                  ס
                </span>
                <span>{tr.brand.name}</span>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                {isHebrew ? "סגור" : "Fermer"}
              </button>
            </div>

            {/* Micro trust (dans le drawer) */}
            <div className="px-5 py-4">
              <div className="rounded-2xl border bg-slate-50 p-4 text-xs text-slate-600">
                {isHebrew ? (
                  <>
                    <div className="font-semibold text-slate-900">
                      מסגרת הלכתית • דיסקרטיות
                    </div>
                    <div className="mt-1">
                      בדיקה/כתיבה ע״י סופר מקצועי (בהתאם לזמינות)
                    </div>
                  </>
                ) : (
                  <>
                    <div className="font-semibold text-slate-900">
                      Cadre halakhique • discrétion
                    </div>
                    <div className="mt-1">
                      Vérification/écriture par un sofer compétent (selon disponibilité)
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Links */}
            <nav className="px-5 pb-6">
              <DrawerLink href={`/${locale}`} onClick={close}>
                {tr.nav.home}
              </DrawerLink>

              <DrawerLink href={`/${locale}/en-savoir-plus`} onClick={close}>
                {tr.nav.learnMore}
              </DrawerLink>

              <DrawerLink href={`/${locale}/contact`} onClick={close}>
                {tr.nav.contact}
              </DrawerLink>

              {/* CTA */}
              <Link
                href={`/${locale}/commander`}
                onClick={close}
                className={`mt-4 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white ${ctaColor}`}
              >
                {tr.cta.commanderOnline}
              </Link>

              <div className="mt-3 text-center text-xs text-slate-500">
                {isHebrew ? "ללא תשלום בשלב זה" : "Aucun paiement à ce stade"}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function DrawerLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
    >
      {children}
    </Link>
  );
}
