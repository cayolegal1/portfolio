"use client";
import { useState, useEffect, type JSX } from "react";
import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import { useInView } from "@/core/hooks/useInView";
import styles from "./AnimatedProjectImage.module.css";

type AnimatedProjectImageInViewProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

const ANIMATION_COMPLETION_DELAY_MS = 800;

export default function AnimatedProjectImageInView({
  children,
  id,
}: AnimatedProjectImageInViewProps): JSX.Element {
  const [hasBeenInView, setHasBeenInView] = useState(false);

  const isInView = useInView(id, true, {});

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      setHasBeenInView(true);
    }, ANIMATION_COMPLETION_DELAY_MS);

    return () => clearTimeout(timeout);
  }, [isInView]);

  if (!hasBeenInView) {
    return (
      <AnimatedRender
        animate={isInView}
        animationType="slideInUp"
        className={`${styles.container} ${isInView ? styles.visible : ""}`.trim()}
        id={id}
      >
        {children}
      </AnimatedRender>
    );
  }

  return (
    <div className={styles.container} style={{ pointerEvents: "auto" }}>
      {children}
    </div>
  );
}
