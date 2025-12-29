import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["fr", "he"] as const;
const DEFAULT_LOCALE = "fr";

function hasLocale(pathname: string) {
  return SUPPORTED_LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore Next internals & API
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Ignore common static files
  if (
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/\.(png|jpg|jpeg|webp|svg|ico|css|js|map)$/)
  ) {
    return NextResponse.next();
  }

  // Already localized
  if (hasLocale(pathname)) return NextResponse.next();

  // ✅ "/" -> "/fr" (pas "/fr/")
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${DEFAULT_LOCALE}` : `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
