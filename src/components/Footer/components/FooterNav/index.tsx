"use client";
import { useTranslations } from "next-intl";
import Text from "@/core/components/Text";
import { SECTIONS } from "@/core/data/global";
import type { FooterNavProps } from "./FooterNav.types";
import styles from "./FooterNav.module.css";

import type { JSX } from "react";

const links = [
  { title: "home", href: SECTIONS.HOME },
  { title: "projects", href: SECTIONS.PROJECTS },
  { title: "services", href: SECTIONS.SERVICES },
  { title: "experience", href: SECTIONS.EXPERIENCE },
  { title: "technologies", href: SECTIONS.TECHNOLOGIES },
  { title: "about_me", href: SECTIONS.ABOUT },
  { title: "contact", href: SECTIONS.CONTACT },
] as const;

export default function FooterNav({ title }: FooterNavProps): JSX.Element {
  const translate = useTranslations("Header");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav aria-label={title} className={styles.footer_nav}>
      <Text
        as="p"
        centered={false}
        className={styles.footer_nav_title}
        size="caption"
        uppercase
      >
        {title}
      </Text>
      <ul className={styles.footer_nav_list}>
        {links.map(link => (
          <li key={link.href}>
            <button
              className={styles.footer_nav_link}
              onClick={() => scrollToSection(link.href)}
              type="button"
            >
              <Text centered={false} inHover size="caption" variant="gradient">
                {translate(link.title)}
              </Text>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
