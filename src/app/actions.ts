"use server";
import { cookies } from "next/headers";
import { supportedLocales, defaultLocale } from "../i18n/settings";

export const toggleLanguage = async (formData: FormData) => {
  const cookieStore = cookies();
  const cookieLocale = cookieStore.get("locale")?.value;
  const locale = formData.get("locale") as string;

  if (
    !(!cookieLocale && locale === defaultLocale) &&
    cookieLocale !== locale &&
    supportedLocales.includes(locale)
  ) {
    cookieStore.set("locale", locale);

    return {
      changed: true,
    };
  }

  return {
    changed: false,
  };
};
