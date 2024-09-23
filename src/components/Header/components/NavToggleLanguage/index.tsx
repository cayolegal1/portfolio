import Dropdown from "@/core/components/Dropdown";
import { useTranslations } from "next-intl";
import { toggleLanguage } from "@/app/actions";
import { LOCALES } from "../../../../../i18n/request";
import type { NavToggleLanguageProps } from "./NavToggleLanguage.types";
import styles from "./NavToggleLanguage.module.css";

const languages = [
  {label: "🇺🇸 English", locale: LOCALES.ENGLISH},
  {label: "🇪🇸 Español", locale: LOCALES.SPANISH},
  {label: "🇧🇷 Portugues", locale: LOCALES.PORTUGUES},
];

export default function NavToggleLanguage({
  title,
}: NavToggleLanguageProps): JSX.Element {
  const translate = useTranslations("Header");
  return (
    <Dropdown title={translate(title)}>
      {languages.map(language => (
        <form
          action={toggleLanguage}
          key={language.locale}
        >
          <input type="hidden" name="locale" value={language.locale} />
          <button className={styles.language_item} id={language.locale}>
            {language.label}
          </button>
        </form>
      ))}
    </Dropdown>
  );
}
