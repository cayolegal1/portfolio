import AnimatedRender from "@/core/components/AnimatedRender";
import styles from "./Hero.module.css";

export default function Hero() {
  const skills = [
    "Desarrollador de Software",
    "Desarrollador Web",
    "Desarrollador de Apps",
  ];

  return (
    <div className={styles.main}>
      <AnimatedRender>
        <h1 className={styles.text}>Hola,</h1>
      </AnimatedRender>

      <AnimatedRender delay="1.2s">
        <h1 className={styles.text}>
          Mi nombre es <span className={styles.text_gradient}>Cayo Legal</span>
        </h1>
      </AnimatedRender>

      <AnimatedRender delay="2.2s" className={styles.typing_text_container}>
        <h2 className={styles.text}>Y soy un</h2>
        <ul className={styles.list}>
          {skills.map(skill => (
            <li key={skill} className={styles.list_item}>
              <h2 className={styles.text}>
                <span className={styles.typing_text}>{skill}</span>
              </h2>
            </li>
          ))}
        </ul>
      </AnimatedRender>
    </div>
  );
}