import AnimatedRender from "@/core/components/AnimatedRender";
import TextGradient from "@/core/components/TextGradient";
import styles from "./Hero.module.css";

const skills = [
  "Software",
  "Apps Web",
  "Apps Móviles",
];

export default function Hero() {
  return (
    <section className={styles.main}>
      <AnimatedRender className={styles.xsalign_self_start}>
        <p className={styles.text}>Hola,</p>
      </AnimatedRender>

      <AnimatedRender className={styles.xsalign_self_start} delay="400ms">
        <h1 className={styles.text}>
          Mi nombre es <TextGradient>Cayo Legal</TextGradient>
        </h1>
      </AnimatedRender>

      <AnimatedRender className={styles.xsalign_self_start} delay="800ms">
        <p className={styles.text}>
          Y soy Desarrollador de
        </p>
      </AnimatedRender>

      <AnimatedRender delay="1.2s">
        <ul className={styles.list}>
          {skills.map(skill => (
            <li key={skill} className={styles.list_item}>
              <h1 className={`${styles.text} ${styles.text_ellipsis}`}>
                <TextGradient className={styles.skill}>{skill}</TextGradient>
              </h1>
            </li>
          ))}
        </ul>
      </AnimatedRender>
    </section>
  );
}