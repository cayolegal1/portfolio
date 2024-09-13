"use client";
import AnimatedRender from "@/core/components/AnimatedRender";
import ExpandIcon from "@/core/components/Icons/ExpandIcon";
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
      delay="3.5s"
      className={styles.expand_container}
      onClick={scrollToNextSection}
    >
      <ExpandIcon />
    </AnimatedRender>
  );
}
