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

  // Focus dans le drawer
  useEffect(() => {
    if (!open) return;
    setTimeout(() => drawerRef.current?.focus(), 0);
  }, [open]);

  // ✅ Ouvre le drawer du bon côté :
  // FR/LTR => droite | HE/RTL => gauche
  const drawerSide = isHebrew ? "left-0" : "right-0";

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
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
              href={`/${locale}/services`}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {tr.nav.services}
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

        {/* ================= Mobile ================= */}
        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitch />

          <button
            type="button"
            aria-label={isHebrew ? "פתח תפריט" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="rounded-xl border bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
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
            className="absolute inset-0 bg-black/55"
            onClick={() => setOpen(false)}
          />

          {/* Drawer panel */}
          <div
            ref={drawerRef}
            tabIndex={-1}
            className={[
              "absolute top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl outline-none",
              drawerSide,
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

            {/* Links (lisibles + “cards”) */}
            <nav className="px-5 py-5">
              <div className="grid gap-2">
                <DrawerLink href={`/${locale}`} onClick={close}>
                  {tr.nav.home}
                </DrawerLink>

                <DrawerLink href={`/${locale}/services`} onClick={close}>
                  {tr.nav.services}
                </DrawerLink>

                <DrawerLink href={`/${locale}/en-savoir-plus`} onClick={close}>
                  {tr.nav.learnMore}
                </DrawerLink>

                <DrawerLink href={`/${locale}/contact`} onClick={close}>
                  {tr.nav.contact}
                </DrawerLink>
              </div>

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

            {/* Bas du drawer (aide visuelle propre) */}
            <div className="mt-auto border-t px-5 py-4 text-xs text-slate-500">
              {isHebrew
                ? "שאלות? עברו לעמוד יצירת קשר."
                : "Une question ? Passez par la page Contact."}
            </div>
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
      className="block rounded-2xl border bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
    >
      {children}
    </Link>
  );
}
