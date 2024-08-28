import Animated from "@/core/components/Animated";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.main}>
      <Animated>
        <h1 className={styles.p}>Hola,</h1>
      </Animated>

      <Animated delay="1.5s">
        <h1 className={styles.p}>
          Mi nombre es <span className={styles.text_gradient}>Cayo Legal</span>
        </h1>
      </Animated>

      <Animated delay="2.5s">
        <h2 className={styles.p}>
          Y soy un Desarrollador de Software
        </h2>
      </Animated>
    </div>
  );
}