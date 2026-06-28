"use client";
import { useEffect, useRef, type JSX } from "react";
import styles from "./CursorSpotlight.module.css";

export default function CursorSpotlight(): JSX.Element | null {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Solo en dispositivos con puntero fino (desktop). En touch no aplica.
    if (!window.matchMedia("(hover: hover)").matches) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--spot-x", `${e.clientX}px`);
      el.style.setProperty("--spot-y", `${e.clientY}px`);
      el.style.setProperty("--spot-opacity", "1");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className={styles.spotlight} aria-hidden="true" />;
}
