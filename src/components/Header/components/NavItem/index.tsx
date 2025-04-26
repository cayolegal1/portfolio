"use client";;
import { useTranslations } from "next-intl";
import Text from "@/core/components/Text";
import type { NavItemProps } from "./NavItem.types";
import styles from "./NavItem.module.css";

import type { JSX } from "react";

export default function NavItem({
  item,
  active,
  ...props
}: NavItemProps): JSX.Element {
  const translate = useTranslations("Header");
  const title = translate(item.title);

  const scrollToSection = () => {
    const section = document.getElementById(item.href);
    if (section) {
      section.scrollIntoView(true);
    }
  };

  return (
    <button
      {...props}
      className={`${styles.nav_link} nav_item`}
      onClick={scrollToSection}
    >
      <Text variant="gradient" inHover={!active}>
        {title}
      </Text>
    </button>
  );
}
