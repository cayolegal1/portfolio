import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

const LOCALES = {
  ENGLISH: "en",
  SPANISH: "es",
  PORTUGUES: "pt",
};

const supportedLocales = [LOCALES.ENGLISH, LOCALES.SPANISH];

export default getRequestConfig(async () => {
  const locale = cookies().get("locale")?.value || LOCALES.SPANISH;
  if (!supportedLocales.includes(locale)) return {};
  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
