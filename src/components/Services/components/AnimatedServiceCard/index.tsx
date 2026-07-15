"use client";
import { useState, useEffect, type JSX, type ReactNode } from "react";
import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import { useInView } from "@/core/hooks/useInView";
import styles from "./AnimatedServiceCard.module.css";

type AnimatedServiceCardProps = {
  id: string;
  delay?: string;
  children: ReactNode;
};

// Espera base para dar por terminada la animación de entrada; le sumamos el
// delay de escalonado para no cortar el reveal de las últimas tarjetas.
const ANIMATION_COMPLETION_DELAY_MS = 900;

export default function AnimatedServiceCard({
  id,
  delay = "0s",
  children,
}: AnimatedServiceCardProps): JSX.Element {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const isInView = useInView(id, true, {});

  useEffect(() => {
    if (!isInView) return;
    const total = ANIMATION_COMPLETION_DELAY_MS + parseFloat(delay) * 1000;
    const timeout = setTimeout(() => setHasBeenInView(true), total);
    return () => clearTimeout(timeout);
  }, [isInView, delay]);

  // Tras completar el reveal lo pasamos a un div plano: quita el transform del
  // contenedor (que crearía un contexto de apilamiento) para que el hover de la
  // tarjeta funcione sin fricción.
  if (!hasBeenInView) {
    return (
      <AnimatedRender
        animate={isInView}
        animationType="slideInUp"
        className={styles.container}
        delay={delay}
        id={id}
      >
        {children}
      </AnimatedRender>
    );
  }

  return <div className={styles.container}>{children}</div>;
}
