import HeroPresentation from "../HeroPresentation";
import AnimatedRender from "@/core/components/AnimatedRender";
import ExpandMore from "@/core/components/ExpandMore";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.main}>
      <HeroPresentation />
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
