"use client";
import { TypeAnimation } from "react-type-animation";
import AnimatedRender from "@/core/components/AnimatedRender";
import textStyles from "../HeroPresentation/HeroPresentation.module.css";
import gradient from "../../../../core/components/TextGradient/TextGradient.module.css";
import styles from "./HeroSkills.module.css";

export default function HeroSkills() {
  return (
    <AnimatedRender delay="1.2s" className={styles.container}>
      <h1 className={textStyles.text} style={{width: "101%"}}>
        Soy {" "}
        <TypeAnimation
          className={`${gradient.text_gradient_config} ${gradient.text_gradient} ${styles.cursor}`}
          cursor={false}
          sequence={["", 2000, "Desarrollador de Software"]}
          speed={50}
          style={{ whiteSpace: "normal" }}
          wrapper="span"
        />
      </h1>
    </AnimatedRender>
  );
}
