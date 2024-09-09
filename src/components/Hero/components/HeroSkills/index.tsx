import AnimatedRender from "@/core/components/AnimatedRender";
import AnimatedTyping from "@/core/components/AnimatedTyping";
import textStyles from "../HeroPresentation/HeroPresentation.module.css";
import gradient from "../../../../core/components/TextGradient/TextGradient.module.css";

export default function HeroSkills() {
  return (
    <AnimatedRender delay="1.2s">
      <h1 className={textStyles.text} style={{ width: "101%" }}>
        Soy{" "}
        <AnimatedTyping
          className={`${gradient.text_gradient_config} ${gradient.text_gradient}`}
          strings={["Desarrollador de Software"]}
          startDelay={2200}
        />
      </h1>
    </AnimatedRender>
  );
}
