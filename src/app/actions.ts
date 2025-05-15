"use server";
import { cookies } from "next/headers";
import { supportedLocales } from "../i18n/settings";

export const toggleLanguage = async (formData: FormData) => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("locale")?.value;
  const locale = formData.get("locale") as string;
  if (cookieLocale !== locale && supportedLocales.includes(locale)) {
    cookieStore.set("locale", locale, {
      httpOnly: true,
      path: "/",
      priority: "high",
      sameSite: "strict",
      secure: true,
    });
  }
};
