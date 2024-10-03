"use client";
import AnimatedRender from "../AnimatedRender";
import { useInView } from "@/core/hooks/useInView";
import type { AnimatedInViewProps } from "./AnimatedInView.types";

export default function AnimatedInView({
  children,
  delay = "0",
  id = "",
  once = true,
  useId = true,
  ...props
}: AnimatedInViewProps): JSX.Element {
  const isInView = useInView(id, once);
  return (
    <AnimatedRender {...props} animate={isInView} delay={delay} id={useId ? id : ""}>
      {children}
    </AnimatedRender>
  );
}
