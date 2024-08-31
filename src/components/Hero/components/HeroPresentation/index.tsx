import AnimatedRender from "@/core/components/AnimatedRender";
import AnimatedTyping from "@/core/components/AnimatedTyping";
import SingleTyping from "@/core/components/SingleTyping";
import TextGradient from "@/core/components/TextGradient";
import styles from "./HeroPresentation.module.css";

const skills = ["Software a medida", "Aplicaciones Web", "Aplicaciones Móviles"];

export default function HeroPresentation(): JSX.Element {
  return (
    <>
      <AnimatedRender>
        <h1 className={styles.text}>Hola,</h1>
      </AnimatedRender>

      <AnimatedRender delay="400ms">
        <h1 className={styles.text}>
          Mi nombre es <TextGradient>Cayo Legal</TextGradient>
        </h1>
      </AnimatedRender>

      <AnimatedRender
        delay="800ms"
        className={styles.animated_typing_container}
      >
        <h2 className={styles.text}>
          Y soy <SingleTyping>Desarrollador de </SingleTyping>
        </h2>
        <ul className={styles.list}>
          {skills.map(skill => (
            <li key={skill} className={styles.list_item}>
              <h2 className={styles.text}>
                <AnimatedTyping>
                  <TextGradient>{skill}</TextGradient>
                </AnimatedTyping>
              </h2>
            </li>
          ))}
        </ul>
      </AnimatedRender>
    </>
  );
}
