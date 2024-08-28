import AnimatedRender from "@/core/components/AnimatedRender";
import styles from "./Hero.module.css";

export default function Hero() {
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
        <h2 className={styles.text}>
          Y soy un <span className={styles.typing_text}>Desarrollador de software</span>
        </h2>
      </AnimatedRender>
    </div>
  );
}