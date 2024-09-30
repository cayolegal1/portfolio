"use client";
import Dropdown from "@/core/components/Dropdown";
import Text from "@/core/components/Text";
import { useTranslations } from "next-intl";
import { toggleLanguage } from "@/app/actions";
import { LOCALES } from "@/i18n/settings";
import type { NavToggleLanguageProps } from "./NavToggleLanguage.types";
import styles from "./NavToggleLanguage.module.css";

const languages = [
  { label: "english", locale: LOCALES.ENGLISH, flag: "🇺🇸" },
  { label: "spanish", locale: LOCALES.SPANISH, flag: "🇪🇸" },
  { label: "portuguese", locale: LOCALES.PORTUGUES, flag: "🇧🇷" },
] as const;

export default function NavToggleLanguage({
  locale,
  title,
}: NavToggleLanguageProps): JSX.Element {
  const translate = useTranslations("Header");
  const formAction = async (data: FormData) => {
    const action = await toggleLanguage(data);
    if (action.changed) {
      window.scrollTo({ behavior: "instant", top: 0 });
      location.reload();
    }
  };

  return (
    <Dropdown title={translate(title)}>
      {languages.map(language => (
        <form action={formAction} key={language.locale}>
          <input type="hidden" name="locale" value={language.locale} />
          <button type="submit" className={styles.language_item}>
            {language.flag}
            <Text
              size="caption"
              variant={locale === language.locale ? "gradient" : "normal"}
            >
              {translate(language.label)}
            </Text>
          </button>
        </form>
      ))}
    </Dropdown>
  );
}
