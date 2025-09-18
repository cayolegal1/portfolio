import type { HTMLAttributes, ReactNode } from "react";

export type CarouselProps = HTMLAttributes<HTMLUListElement> & {
  children: ReactNode;
};
