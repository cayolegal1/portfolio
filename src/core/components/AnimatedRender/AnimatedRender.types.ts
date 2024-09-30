import type { HTMLAttributes, ReactNode, ElementType } from "react";

export type AnimationRenderType = "fadeInLeft" | "fadeInDown" | "bounceInDown" | "slideInLeft";

export type AnimatedRenderProps = HTMLAttributes<HTMLElement> & {
  animate?: boolean;
  children: ReactNode;
  className?: string;
  delay?: string;
  animationType?: AnimationRenderType;
  as?: ElementType;
};