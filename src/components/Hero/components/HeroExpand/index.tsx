import AnimatedRender from "@/core/components/AnimatedRender";
import ExpandIcon from "@/core/components/Icons/ExpandIcon";
import styles from "./HeroExpand.module.css";

export default function HeroExpand(): JSX.Element {
  return (
    <AnimatedRender
      animationType="bounceInDown"
      delay="3.8s"
      className={styles.expand_container}
    >
      <ExpandIcon />
    </AnimatedRender>
  );
}
