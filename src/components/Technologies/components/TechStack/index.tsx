"use client";
import { useMemo, useState, type JSX } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  categorizedTech,
  techCategories,
  type TechCategory,
} from "@/core/data/tech-categories";
import styles from "./TechStack.module.css";

type Filter = TechCategory | "all";

export default function TechStack(): JSX.Element {
  const translate = useTranslations("Technologies");
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: categorizedTech.length };
    techCategories.forEach(category => {
      map[category] = categorizedTech.filter(
        tech => tech.category === category,
      ).length;
    });
    return map;
  }, []);

  const filters: Filter[] = ["all", ...techCategories];

  return (
    <div className={styles.wrap}>
      <div aria-label={translate("title")} className={styles.chips} role="tablist">
        {filters.map(option => (
          <button
            aria-selected={filter === option}
            className={`${styles.chip} ${filter === option ? styles.chip_active : ""}`}
            key={option}
            onClick={() => setFilter(option)}
            role="tab"
            type="button"
          >
            {translate(`categories.${option}`)}
            <span className={styles.chip_count}>{counts[option]}</span>
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {categorizedTech.map(tech => {
          const visible = filter === "all" || tech.category === filter;
          return (
            <div
              className={`${styles.tile} ${styles[`cat_${tech.category}`]} ${visible ? "" : styles.hidden}`}
              key={tech.name}
            >
              <span aria-hidden="true" className={styles.dot} />
              <Image
                alt={`${tech.name} logo`}
                className={styles.logo}
                height={28}
                loading="lazy"
                src={tech.logo_path}
                width={28}
              />
              <span className={styles.tile_name}>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
