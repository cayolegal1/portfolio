import { HTMLAttributes, ReactNode } from "react";

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}