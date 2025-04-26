import type { ReactNode, JSX } from "react";

export type FooterItemProps = {
  icon: JSX.Element;
  children: ReactNode;
  href: string;
};
