import type { HTMLAttributes, ReactNode } from "react";

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  withSeparator?: boolean;
}