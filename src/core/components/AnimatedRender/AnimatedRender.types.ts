import type { HTMLAttributes, ReactNode } from "react";

export type AnimationRenderType = "fadeInLeft";

export type AnimatedRenderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: string;
  animationType?: AnimationRenderType;
};