"use client";
import { useTranslations } from "next-intl";
import Text from "@/core/components/Text";
import { useInView } from "@/core/hooks/useInView";
import type { NavItemProps } from "./NavItem.types";
import styles from "./NavItem.module.css";

export default function NavItem({ item }: NavItemProps): JSX.Element {
  const translate = useTranslations("Header");
  const isInView = useInView(item.href);
  const title = translate(item.title);

  const scrollToSection = () => {
    const section = document.getElementById(item.href);
    if (section) {
      section.scrollIntoView(true);
    }
  };

  return (
    <button className={styles.nav_link} onClick={scrollToSection}>
      <Text variant="gradient" inHover={!isInView}>
        {title}
      </Text>
    </button>
  );
}
