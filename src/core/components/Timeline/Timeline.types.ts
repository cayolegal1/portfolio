import type { HTMLAttributes, ReactNode } from "react";

export type TimelineProps = HTMLAttributes<HTMLOListElement> & {
  children: ReactNode;
}