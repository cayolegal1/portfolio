import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type TextGradientProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  inHover?: boolean;
}