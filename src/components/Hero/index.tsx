import AnimatedRender from "@/core/components/AnimatedRender";
import SingleTyping from "@/core/components/SingleTyping";
import styles from "./Hero.module.css";

const skills = [
  "Software",
  "Apps Web",
  "Apps Móviles",
];

export default function Hero() {
  return (
    <div className={styles.main}>
      <AnimatedRender>
        <h1 className={styles.text}>Hola,</h1>
      </AnimatedRender>

      <AnimatedRender delay="400ms">
        <h1 className={styles.text}>
          Mi nombre es <span className={styles.text_gradient}>Cayo Legal</span>
        </h1>
      </AnimatedRender>

      <AnimatedRender delay="800ms" className={styles.typing_text_container}>
        <h2 className={styles.text}>
          Y soy {" "}
         <SingleTyping>
           Desarrollador de
         </SingleTyping>
        </h2>
        <ul className={styles.list}>
          {skills.map(skill => (
            <li key={skill} className={styles.list_item}>
              <h2 className={styles.text}>
                <span className={styles.infinite_typing}>{skill}</span>
              </h2>
            </li>
          ))}
        </ul>
      </AnimatedRender>
    </div>
  );
}