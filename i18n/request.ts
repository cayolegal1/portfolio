import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { redirect } from "next/navigation";

export const LOCALES = {
  ENGLISH: "en",
  SPANISH: "es",
  PORTUGUES: "pt",
};

export const supportedLocales = [LOCALES.ENGLISH, LOCALES.SPANISH, LOCALES.PORTUGUES];
export const defaultLocale = LOCALES.SPANISH;

export const toggleLanguage = (formData: FormData) => {
  const locale = formData.get("locale") as string;
  cookies().set(
    "locale",
    supportedLocales.includes(locale) ? locale : defaultLocale,
  );
  redirect("/");
};

export default getRequestConfig(async () => {
  const locale = cookies().get("locale")?.value || defaultLocale;
  const responseLocale = !supportedLocales.includes(locale) ? defaultLocale : locale;
  return {
    locale,
    messages: (await import(`./locales/${responseLocale}.json`)).default,
  };
});
