"use client";
import type { JSX } from "react";
import ExpandGradientIcon from "@/core/components/Icons/Gradient/ExpandGradientIcon";
import { SECTIONS } from "@/core/data/global";
import styles from "./HeroExpand.module.css";
import heroStyles from "../../Hero.module.css";

export default function HeroExpand(): JSX.Element {
  const scrollToNextSection = () => {
    document
      .getElementById(SECTIONS.PROJECTS)
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      aria-label="Ir a proyectos"
      className={`${styles.expand_container} ${heroStyles.enter}`}
      onClick={scrollToNextSection}
      type="button"
    >
      <span className={styles.hint}>
        <ExpandGradientIcon />
      </span>
    </button>
  );
}
