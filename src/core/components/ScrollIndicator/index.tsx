"use client";
import { type JSX } from "react";
import { useTranslations } from "next-intl";
import { useScrollProgress } from "@/core/hooks/useScrollProgress";
import { useActiveSection } from "@/core/hooks/useActiveSection";
import { SECTIONS } from "@/core/data/global";
import styles from "./ScrollIndicator.module.css";

const SECTION_NAV = [
  { id: SECTIONS.HOME, label: "home" },
  { id: SECTIONS.PROJECTS, label: "projects" },
  { id: SECTIONS.EXPERIENCE, label: "experience" },
  { id: SECTIONS.TECHNOLOGIES, label: "technologies" },
  { id: SECTIONS.ABOUT, label: "about_me" },
  { id: SECTIONS.CONTACT, label: "contact" },
] as const;

const SECTION_IDS = SECTION_NAV.map(section => section.id);

export default function ScrollIndicator(): JSX.Element {
  const translate = useTranslations("Header");
  const { scrollProgress } = useScrollProgress();
  const { activeId, selectSection } = useActiveSection(SECTION_IDS);

  const goTo = (id: string) => {
    selectSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={styles.progress_bar}
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <nav aria-label={translate("home")} className={styles.rail}>
        {SECTION_NAV.map(section => {
          const isActive = activeId === section.id;
          return (
            <button
              aria-current={isActive ? "true" : undefined}
              aria-label={translate(section.label as "home")}
              className={`${styles.node} ${isActive ? styles.node_active : ""}`}
              key={section.id}
              onClick={() => goTo(section.id)}
              type="button"
            >
              <span className={styles.node_label}>
                {translate(section.label as "home")}
              </span>
              <span aria-hidden="true" className={styles.node_dot} />
            </button>
          );
        })}
      </nav>
    </>
  );
}
