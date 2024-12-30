import type { HTMLAttributes, ReactNode, ElementType } from "react";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  withSeparator?: boolean;
  as?: ElementType;
};
