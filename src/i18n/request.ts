import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, supportedLocales } from "./settings";
// import { getBrowserLocale } from "./utils";

export default getRequestConfig(async () => {
  // const browserLocale = getBrowserLocale();
  const cookieLocale = cookies().get("locale")?.value;
  const locale = cookieLocale || defaultLocale;
  const responseLocale = !supportedLocales.includes(locale)
    ? defaultLocale
    : locale;

  return {
    locale,
    messages: (await import(`./locales/${responseLocale}.json`)).default,
    timeZone: "America/Asuncion",
  };
});
