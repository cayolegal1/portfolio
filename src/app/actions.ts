"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { supportedLocales } from "../../i18n/request";

export const toggleLanguage = (formData: FormData) => {
  const locale = formData.get("locale") as string;
  const cookieStore = cookies();
  if (
    cookieStore.get("locale")?.value !== locale &&
    supportedLocales.includes(locale)
  ) {
    cookieStore.set("locale", locale);
    redirect("/");
  }
};
