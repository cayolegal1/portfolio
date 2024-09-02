"use client";
import { TypeAnimation } from "react-type-animation";
import AnimatedRender from "@/core/components/AnimatedRender";
import textStyles from "../HeroPresentation/HeroPresentation.module.css";
import gradient from "../../../../core/components/TextGradient/TextGradient.module.css";
import styles from "./HeroSkills.module.css";

export default function HeroSkills() {
  return (
    <AnimatedRender delay="1s">
      <h1 className={textStyles.text} style={{width: "101%"}}>
        Soy{" "}
        <TypeAnimation
          cursor={false}
          sequence={["", 1500, "Desarrollador de "]}
          speed={55}
          style={{ whiteSpace: "normal" }}
          wrapper="span"
        />
        <TypeAnimation
          cursor={false}
          className={`${gradient.text_gradient_config} ${gradient.text_gradient} ${styles.cursor}`}
          sequence={["", 2300, "Software"]}
          speed={55}
          style={{ whiteSpace: "normal" }}
          wrapper="span"
        />
      </h1>
    </AnimatedRender>
  );
}
