import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, supportedLocales } from "./settings";


export default getRequestConfig(async () => {
  const locale = cookies().get("locale")?.value || defaultLocale;
  const responseLocale = !supportedLocales.includes(locale) ? defaultLocale : locale;
  return {
    locale,
    messages: (await import(`./locales/${responseLocale}.json`)).default,
  };
});
