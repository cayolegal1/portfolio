import type { ReactNode, HTMLAttributes } from "react";

export type CarouselItemProps = HTMLAttributes<HTMLLIElement> & {
  children: ReactNode;
};
