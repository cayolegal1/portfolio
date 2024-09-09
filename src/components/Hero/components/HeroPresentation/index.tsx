import AnimatedRender from "@/core/components/AnimatedRender";
import Text from "@/core/components/Text";
import HeroSkills from "../HeroSkills";
import styles from "./HeroPresentation.module.css";
import data from "@/core/data/info.json";

export default function HeroPresentation(): JSX.Element {
  const { name } = data;
  return (
    <>
      <div className={styles.content}>
        <AnimatedRender animationType="fadeInDown">
          <Text as="h1">Hola,</Text>
        </AnimatedRender>

        <AnimatedRender delay="400ms" animationType="fadeInDown">
          <Text as="h1">
            Mi nombre es <Text variant="gradient">{name}</Text>
          </Text>
        </AnimatedRender>
      </div>

      <div className={styles.content}>
        <HeroSkills />
      </div>
    </>
  );
}
