"use client";
import { useState } from "react";
import AnimatedRender from "@/core/components/AnimatedRender";
import styles from "./HeroExpand.module.css";

export default function HeroExpand(): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <AnimatedRender
      animationType="bounceInDown"
      delay="3.8s"
      className={styles.expand_container}
    >
      <svg
        className={styles.expand}
        height="6.0rem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        viewBox="0 -960 960 960"
        width="6.0rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className={`${styles.stop} ${isHovered ? styles.first_stop : styles.white_stop} `} />
            <stop offset="100%" className={`${styles.stop} ${isHovered ? styles.second_stop : styles.white_stop} `} />
          </linearGradient>
        </defs>
        <path
          d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
          fill="url(#grad1)"
        />
      </svg>
    </AnimatedRender>
  );
}