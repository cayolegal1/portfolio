import type { HTMLAttributes, ReactNode, ElementType } from "react";

export type AnimationRenderType =
  | "fadeInLeft"
  | "fadeInDown"
  | "bounceInDown"
  | "slideInLeft"
  | "pulse";

export type AnimatedRenderProps = HTMLAttributes<HTMLElement> & {
  animate?: boolean;
  children: ReactNode;
  delay?: string;
  animationType?: AnimationRenderType;
  as?: ElementType;
};
