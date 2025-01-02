import type { MessageKeys } from "next-intl";

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

export type NavItemProps = {
  item: NavItem;
};
