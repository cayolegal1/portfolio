"use client";
import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import NavItem from "../NavItem";
import NavToggleLanguage from "../NavToggleLanguage";
import { useActiveSection } from "@/core/hooks/useActiveSection";
import { SECTIONS, ANIMATION_LIST_DELAY } from "@/core/data/global";
import type { HeaderContentProps } from "./HeaderContent.types";
import styles from "./HeaderContent.module.css";

export default function HeaderContent({
  currentLocale,
  sections,
}: HeaderContentProps) {
  const activeSection = useActiveSection(sections.map(section => section.href));
  return (
    <AnimatedRender
      animationType="fadeInDown"
      as="header"
      className={`navbar__hidden ${styles.header}`}
      delay="2.8s"
      id="header"
    >
      <nav className={styles.nav}>
        {sections.map((item, index) =>
          item.href !== SECTIONS.LANGUAGE ? (
            <NavItem
              style={{
                animationDelay: `${ANIMATION_LIST_DELAY + index * ANIMATION_LIST_DELAY}ms`,
              }}
              active={activeSection === item.href}
              key={item.href}
              item={item}
            />
          ) : (
            <div
              key={item.href}
              className="nav_item"
              style={{
                animationDelay: `${ANIMATION_LIST_DELAY + index * ANIMATION_LIST_DELAY}ms`,
              }}
            >
              <NavToggleLanguage
                key={item.href}
                locale={currentLocale}
                title={item.title}
              />
            </div>
          ),
        )}
      </nav>
    </AnimatedRender>
  );
}
