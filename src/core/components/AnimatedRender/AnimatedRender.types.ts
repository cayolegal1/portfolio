import type { HTMLAttributes, ReactNode, ElementType } from "react";

export type AnimationRenderType = "fadeInLeft" | "fadeInDown" | "bounceInDown";

export type AnimatedRenderProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
  delay?: string;
  animationType?: AnimationRenderType;
  as?: ElementType;
};