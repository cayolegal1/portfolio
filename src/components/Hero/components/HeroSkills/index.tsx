"use client";
import { useState, useEffect } from "react";
import AnimatedRender from "@/core/components/AnimatedRender";
import Text from "@/core/components/Text";
import AnimatedTyping from "@/core/components/AnimatedTyping";
import styles from "./HeroSkills.module.css";
import gradient from "../../../../core/components/TextGradient/TextGradient.module.css";

const delay = 3000;

export default function HeroSkills() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true);
    }, delay);
  }, []);

  return (
    <AnimatedRender delay="1.2s">
      <Text as="h2" className={styles.hero_skills_content}>
        Soy{" "}
        <AnimatedTyping
          className={`${gradient.text_gradient_config} ${gradient.text_gradient} ${isRendered && styles.no_border}`}
          startDelay={2200}
          strings={["Desarrollador"]}
        />{" "}
        <AnimatedTyping
          backSpeed={50}
          className={`${gradient.text_gradient_config} ${gradient.text_gradient}`}
          loop
          startDelay={isRendered ? 0 : delay}
          strings={["de Software", "de Apps", "Web"]}
        />
      </Text>
    </AnimatedRender>
  );
}
