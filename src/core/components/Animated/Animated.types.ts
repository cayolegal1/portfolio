import type { HTMLAttributes, ReactNode } from "react";

export type AnimationType = "fadeInLeft";

export type AnimatedProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: string;
  animationType?: AnimationType;
};