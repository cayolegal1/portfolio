import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { supportedLocales } from "./settings";

export function parseBrowserLocale(headerLang: string | null) {
  if (!headerLang) return null;
  try {
    const locales = headerLang.split(";")[0].split(",");
    return locales[1] || null;
  } catch (err) {
    return null;
  }
}

export function getBrowserLocale() {
  const headersList = headers();
  const browserLocaleHeader = headersList.get("accept-language");
  const browserLocale = parseBrowserLocale(browserLocaleHeader);
  return browserLocale;
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
    response.cookies.set("locale", browserLocale);
  }
}
