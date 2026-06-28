"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";
import { SECTIONS } from "@/core/data/global";
import styles from "./HeroActions.module.css";
import heroStyles from "../../Hero.module.css";

export default function HeroActions(): JSX.Element {
  const t = useTranslations("Hero");

  const scrollTo = (id: string) => () =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className={`${styles.actions} ${heroStyles.enter}`}
      style={{ animationDelay: "0.3s" }}
    >
      <button
        className={styles.primary}
        onClick={scrollTo(SECTIONS.PROJECTS)}
        type="button"
      >
        {t("cta_projects")}
      </button>
      <button
        className={styles.secondary}
        onClick={scrollTo(SECTIONS.CONTACT)}
        type="button"
      >
        {t("cta_contact")}
      </button>
    </div>
  );
}
