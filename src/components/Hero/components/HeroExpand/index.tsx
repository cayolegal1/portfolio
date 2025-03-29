"use client";
import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import ExpandGradientIcon from "@/core/components/Icons/Gradient/ExpandGradientIcon";
import styles from "./HeroExpand.module.css";

export default function HeroExpand(): JSX.Element {
  const scrollToNextSection = () => {
    const section = document.getElementById("experience");
    if (section) {
      section.scrollIntoView(true);
    }
  };
  return (
    <AnimatedRender
      animationType="bounceInDown"
      delay="2.8s"
      className={styles.expand_container}
      onClick={scrollToNextSection}
    >
      <ExpandGradientIcon />
    </AnimatedRender>
  );
}
