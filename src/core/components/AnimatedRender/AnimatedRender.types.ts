import type { HTMLAttributes, ReactNode } from "react";

export type AnimationRenderType = "fadeInLeft" | "bounceInDown";

export type AnimatedRenderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  delay?: string;
  animationType?: AnimationRenderType;
};