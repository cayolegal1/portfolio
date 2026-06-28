import { useTranslations } from "next-intl";
import data from "@/core/data/user-info.json";
import gradient from "@/core/components/TextGradient/TextGradient.module.css";
import styles from "./HeroPresentation.module.css";
import heroStyles from "../../Hero.module.css";

import type { JSX } from "react";

export default function HeroPresentation(): JSX.Element {
  const t = useTranslations("Hero");
  const { name } = data;
  return (
    <>
      <span
        className={`${styles.badge} ${heroStyles.enter}`}
        style={{ animationDelay: "0s" }}
      >
        <span className={styles.badge_dot} aria-hidden="true" />
        {t("badge")}
      </span>

      <p
        className={`${styles.intro} ${heroStyles.enter}`}
        style={{ animationDelay: "0.06s" }}
      >
        {t("intro")}
      </p>

      <h1
        className={`${styles.name} ${gradient.text_gradient_config} ${gradient.text_gradient} ${heroStyles.enter}`}
        style={{ animationDelay: "0.12s" }}
      >
        {name}
      </h1>

      <h2
        className={`${styles.role} ${heroStyles.enter}`}
        style={{ animationDelay: "0.18s" }}
      >
        {t("developer")} {t("of_software")}
      </h2>

      <p
        className={`${styles.tagline} ${heroStyles.enter}`}
        style={{ animationDelay: "0.24s" }}
      >
        {t("tagline")}
      </p>
    </>
  );
}
