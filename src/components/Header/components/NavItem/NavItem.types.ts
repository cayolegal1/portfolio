import type { MessageKeys } from "next-intl";
import { HTMLAttributes } from "react";

type NavType =
  | "home"
  | "experience"
  | "proyects"
  | "about_me"
  | "contact"
  | "language"
  | "technologies";

export type NavItem = {
  title: MessageKeys<"Header", NavType>;
  href: string;
};

export type NavItemProps = HTMLAttributes<HTMLButtonElement> & {
  item: NavItem;
  active: boolean;
};
