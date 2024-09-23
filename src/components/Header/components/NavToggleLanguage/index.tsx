"use client";
import Dropdown from "@/core/components/Dropdown";
import { useTranslations } from "next-intl";
import { toggleLanguage } from "@/app/actions";
import { LOCALES } from "@/i18n/settings";
import styles from "./NavToggleLanguage.module.css";

const languages = [
  { label: "🇺🇸 English", locale: LOCALES.ENGLISH },
  { label: "🇪🇸 Español", locale: LOCALES.SPANISH },
  { label: "🇧🇷 Portugues", locale: LOCALES.PORTUGUES },
];

type NavToggleLanguageProps = {
  title: string;
};

export default function NavToggleLanguage({
  title,
}: NavToggleLanguageProps): JSX.Element {
  const translate = useTranslations("Header");
  const formAction = async (data: FormData) => {
    const action = await toggleLanguage(data);
    if (action.changed) location.reload();
  };
  
  return (
    <Dropdown title={translate(title)}>
      {languages.map(language => (
        <form action={formAction} method="post" key={language.locale}>
          <input type="hidden" name="locale" value={language.locale} />
          <button type="submit" className={styles.language_item}>
            {language.label}
          </button>
        </form>
      ))}
    </Dropdown>
  );
}
