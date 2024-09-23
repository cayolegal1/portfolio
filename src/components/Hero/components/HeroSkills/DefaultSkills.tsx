"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import AnimatedType from "@/core/components/AnimatedType";
import styles from "./HeroSkills.module.css";
import gradient from "../../../../core/components/TextGradient/TextGradient.module.css";

const delay = 2600;

export default function DefaultSkills() {
  const translate = useTranslations("Hero");
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true);
    }, delay);
  }, []);

  return (
    <>
      <AnimatedType
        className={`${gradient.text_gradient_config} ${gradient.text_gradient} ${styles.no_border}`}
        startDelay={1800}
        strings={[translate("developer")]}
      />{" "}
      <AnimatedType
        backSpeed={50}
        className={`${gradient.text_gradient_config} ${gradient.text_gradient}`}
        loop
        startDelay={isRendered ? 0 : delay}
        strings={["de Software", "de Apps", "Web"]}
      />
    </>
  );
}