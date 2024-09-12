import { HTMLAttributes, ReactNode } from "react";

export type TimelineItemProps = HTMLAttributes<HTMLLIElement> & {
  children?: ReactNode;
}