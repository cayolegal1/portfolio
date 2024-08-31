import TextGradient from "@/core/components/TextGradient";
import AnimatedRender from "@/core/components/AnimatedRender";
import AnimatedTyping from "@/core/components/AnimatedTyping";
import SingleTyping from "@/core/components/SingleTyping";
import ExpandMore from "@/core/components/ExpandMore";
import styles from "./Hero.module.css";

const skills = ["de Software", "Web", "Móvil"];

export default function Hero() {
  return (
    <div className={styles.main}>
      <AnimatedRender>
        <h1 className={styles.text}>Hola,</h1>
      </AnimatedRender>

      <AnimatedRender delay="400ms">
        <h1 className={styles.text}>
          Mi nombre es <TextGradient>Cayo Legal</TextGradient>
        </h1>
      </AnimatedRender>

      <AnimatedRender delay="800ms" className={styles.animated_typing_container}>
        <h2 className={styles.text}>
          Y soy <SingleTyping>Desarrollador</SingleTyping>
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
      <AnimatedRender
        animationType="bounceInDown"
        delay="3s"
        className={styles.centered}
      >
       <ExpandMore />
      </AnimatedRender>
    </div>
  );
}
