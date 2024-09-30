import type { HTMLAttributes, ReactNode, ElementType } from "react";

export type AnimationRenderType =
  | "fadeIn"
  | "fadeInLeft"
  | "fadeInDown"
  | "bounceInDown"
  | "pulse"
  | "slideInUp";

export type AnimatedRenderProps = HTMLAttributes<HTMLElement> & {
  animate?: boolean;
  children: ReactNode;
  delay?: string;
  animationType?: AnimationRenderType;
  as?: ElementType;
};
