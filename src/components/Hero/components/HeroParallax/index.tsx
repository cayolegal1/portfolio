"use client";
import { useEffect, useRef, type ReactNode, type JSX } from "react";
import styles from "./HeroParallax.module.css";

const MAX_TILT = 10; // grados

export default function HeroParallax({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const tilt = tiltRef.current;
    const hero = tilt?.closest("section");
    if (!tilt || !hero) return;

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      tilt.style.setProperty("--ry", `${px * MAX_TILT}deg`);
      tilt.style.setProperty("--rx", `${-py * MAX_TILT}deg`);
    };
    const onLeave = () => {
      tilt.style.setProperty("--rx", "0deg");
      tilt.style.setProperty("--ry", "0deg");
    };

    hero.addEventListener("mousemove", onMove, { passive: true });
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className={styles.scroll_out}>
      <div ref={tiltRef} className={styles.tilt}>
        {children}
      </div>
    </div>
  );
}
