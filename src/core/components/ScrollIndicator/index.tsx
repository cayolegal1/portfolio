"use client";
import { useScrollProgress } from "@/core/hooks/useScrollProgress";
import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator() {
  const { scrollProgress } = useScrollProgress();
  return (
    <div
      className={styles.progress_bar}
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  );
}
