"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import Text from "@/core/components/Text";
import AnimatedType from "@/core/components/Animated/AnimatedType";
import styles from "./HeroSkills.module.css";
import gradient from "@/core/components/TextGradient/TextGradient.module.css";

const delay = 2000;
export default function HeroSkills() {
  const translate = useTranslations("Hero");
  const [isRendered, setIsRendered] = useState(false);
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
          loop
          backSpeed={55}
          className={`${gradient.text_gradient_config} ${gradient.text_gradient}`}
          startDelay={isRendered ? 0 : delay}
          strings={["Software Dev", "Web Dev", "App Dev"]}
        />
      </Text>
    </AnimatedRender>
  );
}
