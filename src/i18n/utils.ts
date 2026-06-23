import { NextRequest, NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { defaultLocale, supportedLocales } from "./settings";

export function parseBrowserLocale(headerLang: string | null) {
  if (!headerLang) return null;
  // Accept-Language: "es-ES,es;q=0.9,en;q=0.8" -> idioma preferido "es"
  const preferred = headerLang.split(",")[0]?.trim();
  if (!preferred) return null;
  const language = preferred.split("-")[0].toLowerCase();
  return language || null;
}

export async function getBrowserLocale() {
  const headersList = await headers();
  const browserLocaleHeader = headersList.get("accept-language");
  return parseBrowserLocale(browserLocaleHeader);
}

export async function getLocale() {
  const browserLocale = await getBrowserLocale();
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("locale")?.value;
  // Prioridad cookie -> navegador -> default, quedándose con el primero válido.
  const candidates = [cookieLocale, browserLocale, defaultLocale];
  return candidates.find(
    (locale): locale is string => !!locale && supportedLocales.includes(locale),
  )!;
}

export function setCookieLocaleFromBrowser(
  request: NextRequest,
  response: NextResponse,
) {
  const browserLocaleHeader = request.headers.get("accept-language");
  const browserLocale = parseBrowserLocale(browserLocaleHeader);
  const isLocaleValid =
    browserLocale && supportedLocales.includes(browserLocale);
  if (isLocaleValid) {
    response.cookies.set("locale", browserLocale, {
      httpOnly: true,
      path: "/",
      priority: "high",
      sameSite: "strict",
      secure: true,
    });
  }
}
