"use client";
import { useState } from "react";
import { SvgGradientProps } from "./SvgGradient.types";
import styles from "./SvgGradient.module.css";

export default function SvgGradient({ children, config }: SvgGradientProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <svg
      className={styles.icon}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...config}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            className={`${styles.stop} ${isHovered ? styles.first_stop : styles.white_stop} `}
          />
          <stop
            offset="100%"
            className={`${styles.stop} ${isHovered ? styles.second_stop : styles.white_stop} `}
          />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}
