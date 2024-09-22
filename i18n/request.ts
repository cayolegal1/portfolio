import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export const LOCALES = {
  ENGLISH: "en",
  SPANISH: "es",
  PORTUGUES: "pt",
};

const supportedLocales = [LOCALES.ENGLISH, LOCALES.SPANISH, LOCALES.PORTUGUES];

export default getRequestConfig(async () => {
  const locale = cookies().get("locale")?.value || LOCALES.SPANISH;
  const responseLocale = !supportedLocales.includes(locale) ? LOCALES.SPANISH : locale;
  return {
    locale,
    messages: (await import(`./locales/${responseLocale}.json`)).default,
  };
});
