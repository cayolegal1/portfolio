"use client";
import AnimatedRender from "../AnimatedRender";
import { useInView } from "@/core/hooks/useInView";
import type { AnimatedInViewProps } from "./AnimatedInView.types";

export default function AnimatedInView({
  children,
  id = "",
  once = true,
  delay = "0",
  ...props
}: AnimatedInViewProps): JSX.Element {
  const isInView = useInView(id, once);
  return (
    <AnimatedRender {...props} animate={isInView} delay={delay} id={id}>
      {children}
    </AnimatedRender>
  );
}
