import type { HTMLAttributes, ReactNode } from "react";

export type TextGradientProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  className?: string;
  inHover?: boolean;
}