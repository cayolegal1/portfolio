"use server";
import { cookies } from "next/headers";
import { supportedLocales } from "../i18n/settings";

export const toggleLanguage = async (formData: FormData) => {
  const locale = formData.get("locale") as string;
  const cookieStore = cookies();
  if (
    cookieStore.get("locale")?.value !== locale &&
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