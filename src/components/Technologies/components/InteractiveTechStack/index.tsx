"use client";
import { useMemo, useState, type JSX } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { technologiesList } from "@/core/data/technologies";
import { useExperienceTranslation } from "@/core/hooks/useExperienceTranslation";
import { useProjectsTranslation } from "@/core/hooks/useProjectsTranslation";
import styles from "./InteractiveTechStack.module.css";

type Usage = { experiences: string[]; projects: string[] };

export default function InteractiveTechStack(): JSX.Element {
  const translate = useTranslations("Technologies");
  const experiences = useExperienceTranslation();
  const projects = useProjectsTranslation();
  const [selected, setSelected] = useState<string | null>(null);

  const usageByName = useMemo(() => {
    const map = new Map<string, Usage>();
    const ensure = (name: string) => {
      if (!map.has(name)) map.set(name, { experiences: [], projects: [] });
      return map.get(name) as Usage;
    };
    experiences.forEach(exp =>
      exp.technologies.forEach(tech => {
        if (tech.name) ensure(tech.name).experiences.push(exp.company);
      }),
    );
    projects.forEach(project =>
      project.technologies.forEach(tech => {
        if (tech.name) ensure(tech.name).projects.push(project.title);
      }),
    );
    return map;
  }, [experiences, projects]);

  const active = selected
    ? technologiesList.find(tech => tech.name === selected)
    : null;
  const usage = selected ? usageByName.get(selected) : undefined;
  const totalUses = usage
    ? usage.experiences.length + usage.projects.length
    : 0;

  return (
    <div className={styles.wrap}>
      <div className={`${styles.grid} ${selected ? styles.grid_active : ""}`}>
        {technologiesList.map(tech => {
          const techUsage = usageByName.get(tech.name);
          const isUsed = Boolean(
            techUsage &&
              techUsage.experiences.length + techUsage.projects.length > 0,
          );
          return (
            <button
              aria-label={tech.name}
              aria-pressed={selected === tech.name}
              className={`${styles.tech} ${selected === tech.name ? styles.tech_selected : ""} ${isUsed ? styles.tech_used : ""}`}
              key={tech.name}
              onClick={() => setSelected(tech.name)}
              onFocusCapture={() => setSelected(tech.name)}
              onMouseEnter={() => setSelected(tech.name)}
              type="button"
            >
              <Image
                alt={`${tech.name} logo`}
                className={styles.logo}
                height={45}
                loading="lazy"
                src={tech.logo_path}
                width={45}
              />
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className={styles.panel}>
        {active ? (
          <>
            <div className={styles.panel_head}>
              <Image
                alt=""
                aria-hidden="true"
                className={styles.panel_logo}
                height={26}
                loading="lazy"
                src={active.logo_path}
                width={26}
              />
              <span className={styles.panel_name}>{active.name}</span>
              {totalUses > 0 && (
                <span className={styles.count}>{totalUses}</span>
              )}
            </div>
            {totalUses > 0 && usage ? (
              <div className={styles.tags}>
                {usage.experiences.map((company, index) => (
                  <span className={styles.tag} key={`exp-${index}-${company}`}>
                    {company}
                  </span>
                ))}
                {usage.projects.map((project, index) => (
                  <span
                    className={`${styles.tag} ${styles.tag_project}`}
                    key={`proj-${index}-${project}`}
                  >
                    {project}
                  </span>
                ))}
              </div>
            ) : (
              <span className={styles.muted}>{translate("not_used")}</span>
            )}
          </>
        ) : (
          <span className={styles.hint}>{translate("hint")}</span>
        )}
      </div>
    </div>
  );
}
