"use client";
import { type JSX } from "react";
import { useScrollProgress } from "@/core/hooks/useScrollProgress";
import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator(): JSX.Element {
  const { scrollProgress } = useScrollProgress();
  return (
    <div
      className={styles.progress_bar}
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  );
}
