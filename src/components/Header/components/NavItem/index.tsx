"use client";
import Text from "@/core/components/Text";
import type { NavItemProps } from "./NavItem.types";
import styles from "./NavItem.module.css";

export default function NavItem({ item }: NavItemProps): JSX.Element {
  const scrollToSection = () => {
    const section = document.getElementById(item.href);
    if (section) {
      section.scrollIntoView(true);
    }
  };

  return (
    <button className={styles.nav_link} onClick={scrollToSection}>
      <Text variant="gradient" inHover>
        {item.title}
      </Text>
    </button>
  );
}
