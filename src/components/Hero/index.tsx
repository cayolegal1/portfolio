import AnimatedRender from "@/core/components/AnimatedRender";
import styles from "./Hero.module.css";

const skills = [
  "Software",
  "Apps Web",
  "Apps Móviles",
];

export default function Hero() {
  return (
    <div className={styles.main}>
      <AnimatedRender className={styles.xsalign_self_start}>
        <p className={styles.text}>Hola,</p>
      </AnimatedRender>

      <AnimatedRender className={styles.xsalign_self_start} delay="400ms">
        <h1 className={styles.text}>
          Mi nombre es <span className={styles.text_gradient}>Cayo Legal</span>
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
                <span className={`${styles.skill} ${styles.text_gradient}`}>{skill}</span>
              </h1>
            </li>
          ))}
        </ul>
      </AnimatedRender>
    </div>
  );
}