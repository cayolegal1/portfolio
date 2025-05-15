"use client";
import AnimatedRender from "../AnimatedRender";
import { useInView } from "@/core/hooks/useInView";
import type { AnimatedInViewProps } from "./AnimatedInView.types";
import type { JSX } from "react";

export default function AnimatedInView({
  children,
  delay = "0",
  className,
  id = "",
  once = true,
  useId = true,
  observerConfig = {},
  ...props
}: AnimatedInViewProps): JSX.Element {
  const isInView = useInView(id, once, observerConfig);
  return (
    <AnimatedRender
      {...props}
      animate={isInView}
      className={`${isInView && "visible"} ${className ? className : ""}`}
      delay={delay}
      id={useId ? id : undefined}
    >
      {children}
    </AnimatedRender>
  );
}
