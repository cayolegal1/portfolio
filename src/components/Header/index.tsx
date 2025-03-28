import React from "react";
import { getLocale } from "next-intl/server";
import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import NavItem from "./components/NavItem";
import NavToggleLanguage from "./components/NavToggleLanguage";
import NavButton from "./components/NavButton";
import { SECTIONS } from "@/core/data/global";
import styles from "./Header.module.css";

const headers = [
  { title: "home", href: SECTIONS.HOME },
  { title: "experience", href: SECTIONS.EXPERIENCE },
  // { title: "proyects", href: SECTIONS.PROYECTS },
  { title: "technologies", href: SECTIONS.TECHNOLOGIES },
  // { title: "about_me", href: SECTIONS.ABOUT },
  { title: "contact", href: SECTIONS.CONTACT },
  { title: "language", href: SECTIONS.LANGUAGE },
] as const;

export default async function Header() {
  const currentLocale = await getLocale();
  return (
    <>
      <NavButton />
      <AnimatedRender
        animationType="fadeInDown"
        as="header"
        className={`navbar__hidden ${styles.header}`}
        delay="2.8s"
        id="header"
      >
        <nav className={styles.nav}>
          {headers.map(item =>
            item.href !== SECTIONS.LANGUAGE ? (
              <NavItem key={item.href} item={item} />
            ) : (
              <NavToggleLanguage
                key={item.href}
                locale={currentLocale}
                title={item.title}
              />
            ),
          )}
        </nav>
      </AnimatedRender>
    </>
  );
}
