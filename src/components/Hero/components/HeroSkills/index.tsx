"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import AnimatedRender from "@/core/components/AnimatedRender";
import Text from "@/core/components/Text";
import AnimatedType from "@/core/components/AnimatedType";
import styles from "./HeroSkills.module.css";
import gradient from "@/core/components/TextGradient/TextGradient.module.css";

export default function HeroSkills() {
  const translate = useTranslations("Hero");
  const [isRendered, setIsRendered] = useState(false);
  const developer = translate("developer");
  const ofSoftware = translate("of_software");
  const ofApps = translate("of_apps");
  const delay = developer.length > 9 ? 3000 : 2700;

  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true);
    }, delay);
  }, []);

  return (
    <AnimatedRender delay="1.2s">
      <Text as="h2" className={styles.hero_skills_content}>
        {translate("i_am")}{" "}
        <AnimatedType
          className={`${gradient.text_gradient_config} ${gradient.text_gradient} ${styles.no_border}`}
          startDelay={2200}
          strings={[developer]}
        />{" "}
        <AnimatedType
          backSpeed={50}
          className={`${gradient.text_gradient_config} ${gradient.text_gradient}`}
          loop
          startDelay={isRendered ? 0 : delay}
          strings={[ofSoftware, ofApps, "Web"]}
        />
      </Text>
    </AnimatedRender>
  );
}
