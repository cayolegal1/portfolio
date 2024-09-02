import AnimatedRender from "@/core/components/AnimatedRender";
import TextGradient from "@/core/components/TextGradient";
import data from "@/core/data/info.json";
import styles from "./HeroPresentation.module.css";

export default function HeroPresentation(): JSX.Element {
  const { name } = data;
  return (
    <>
      <AnimatedRender>
        <h1 className={styles.text}>Hola,</h1>
      </AnimatedRender>

      <AnimatedRender delay="400ms">
        <h1 className={styles.text}>
          Mi nombre es <TextGradient>{name}</TextGradient>
        </h1>
      </AnimatedRender>
    </>
  );
}
