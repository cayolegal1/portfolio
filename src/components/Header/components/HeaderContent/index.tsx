"use client";
import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import NavItem from "../NavItem";
import NavToggleLanguage from "../NavToggleLanguage";
import { useActiveSection } from "@/core/hooks/useActiveSection";
import { SECTIONS } from "@/core/data/global";
import type { HeaderContentProps } from "./HeaderContent.types";
import styles from "./HeaderContent.module.css";

// Stagger corto y local para el despliegue del menú en mobile (no usamos el
// ANIMATION_LIST_DELAY global porque lo comparte el Timeline de Experiencia).
const ITEM_STAGGER = 60;

export default function HeaderContent({
  currentLocale,
  sections,
}: HeaderContentProps) {
  const { activeId, selectSection } = useActiveSection(
    sections.map(section => section.href),
  );
  return (
    <AnimatedRender
      animationType="fadeInDown"
      as="header"
      className={`navbar__hidden ${styles.header}`}
      delay="0.2s"
      id="header"
      style={{ animationDuration: "0.6s" }}
    >
      <nav className={styles.nav}>
        {sections.map((item, index) =>
          item.href !== SECTIONS.LANGUAGE ? (
            <NavItem
              style={{
                animationDelay: `${ITEM_STAGGER + index * ITEM_STAGGER}ms`,
              }}
              active={activeId === item.href}
              key={item.href}
              item={item}
              onSelect={() => selectSection(item.href)}
            />
          ) : (
            <div
              key={item.href}
              className="nav_item"
              style={{
                animationDelay: `${ITEM_STAGGER + index * ITEM_STAGGER}ms`,
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
