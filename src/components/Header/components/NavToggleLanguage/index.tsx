"use client";
import Dropdown from "@/core/components/Dropdown";
import Text from "@/core/components/Text";
import { useTranslations } from "next-intl";
import { toggleLanguage } from "@/app/actions";
import { LOCALES } from "@/i18n/settings";
import type { NavToggleLanguageProps } from "./NavToggleLanguage.types";
import {
  PortugalFlag,
  SpainFlag,
  USAFlag,
} from "@/core/components/Icons/FlagsIcons";
import CheckIcon from "@/core/components/Icons/CheckIcon";
import styles from "./NavToggleLanguage.module.css";

import type { JSX } from "react";

const languages = [
  { label: "english", locale: LOCALES.ENGLISH, flag: <USAFlag /> },
  { label: "spanish", locale: LOCALES.SPANISH, flag: <SpainFlag /> },
  {
    label: "portuguese",
    locale: LOCALES.PORTUGUES,
    flag: <PortugalFlag />,
  },
] as const;

export default function NavToggleLanguage({
  locale,
  title,
}: NavToggleLanguageProps): JSX.Element {
  const translate = useTranslations("Header");
  const formAction = async (data: FormData) => {
    await toggleLanguage(data);
  };

  const current =
    languages.find(language => language.locale === locale) ?? languages[0];

  const trigger = (
    <span className={styles.trigger}>
      <span className={styles.flag_container}>{current.flag}</span>
      <span className={styles.trigger_code}>
        {current.locale.toUpperCase()}
      </span>
    </span>
  );

  return (
    <Dropdown title={translate(title as "language")} trigger={trigger}>
      {languages.map(language => {
        const isActive = locale === language.locale;
        return (
          <form action={formAction} key={language.locale}>
            <input type="hidden" name="locale" value={language.locale} />
            <button
              type="submit"
              className={styles.language_item}
              aria-current={isActive ? "true" : undefined}
            >
              <div className={styles.flag_container}>{language.flag}</div>
              <Text size="caption" variant={isActive ? "gradient" : "normal"}>
                {translate(language.label)}
              </Text>
              {isActive && <CheckIcon className={styles.check} />}
            </button>
          </form>
        );
      })}
    </Dropdown>
  );
}
