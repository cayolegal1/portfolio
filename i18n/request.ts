import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export const LOCALES = {
  ENGLISH: "en",
  SPANISH: "es",
  PORTUGUES: "pt",
};

export const supportedLocales = [LOCALES.ENGLISH, LOCALES.SPANISH, LOCALES.PORTUGUES];
export const defaultLocale = LOCALES.SPANISH;

export default getRequestConfig(async () => {
  const locale = cookies().get("locale")?.value || defaultLocale;
  const responseLocale = !supportedLocales.includes(locale) ? defaultLocale : locale;
  return {
    locale,
    messages: (await import(`./locales/${responseLocale}.json`)).default,
  };
});
