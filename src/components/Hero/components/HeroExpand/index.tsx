"use client";
import type { JSX } from "react";
import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import ExpandGradientIcon from "@/core/components/Icons/Gradient/ExpandGradientIcon";
import { SECTIONS } from "@/core/data/global";
import styles from "./HeroExpand.module.css";

export default function HeroExpand(): JSX.Element {
  const scrollToNextSection = () => {
    const section = document.getElementById(SECTIONS.PROJECTS);
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
