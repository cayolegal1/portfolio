import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, supportedLocales } from "./settings";

export default getRequestConfig(async () => {
  const cookieLocale = cookies().get("locale")?.value || defaultLocale;
  const responseLocale = !supportedLocales.includes(cookieLocale) ? defaultLocale : cookieLocale;
  return {
    locale: cookieLocale,
    messages: (await import(`./locales/${responseLocale}.json`)).default,
  };
});
