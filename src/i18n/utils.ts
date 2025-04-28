import { NextRequest, NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { defaultLocale, supportedLocales } from "./settings";

export function parseBrowserLocale(headerLang: string | null) {
  if (!headerLang) return null;
  try {
    const locales = headerLang.split(";")[0].split(",");
    return locales[1] || null;
  } catch (err) {
    return null;
  }
}

export async function getBrowserLocale() {
  const headersList = await headers();
  const browserLocaleHeader = headersList.get("accept-language");
  const browserLocale = parseBrowserLocale(browserLocaleHeader);
  return browserLocale;
}

export async function getLocale() {
  const browserLocale = await getBrowserLocale();
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("locale")?.value;
  const locale = cookieLocale || browserLocale || defaultLocale;
  const responseLocale = !supportedLocales.includes(locale)
    ? defaultLocale
    : locale;

  return responseLocale;
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
