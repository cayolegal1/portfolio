import type { JSX } from "react";
import Image from "next/image";
import Chip from "../Chip";
import Text from "../Text";
import AnimatedInView from "../Animated/AnimatedInView";
import { ANIMATION_LIST_DELAY } from "@/core/data/global";
import type { TimelineContentProps } from "./TimelineContent.types";
import styles from "./TimelineContent.module.css";

export default function TimelineContent({
  active = false,
  content,
}: TimelineContentProps): JSX.Element {
  const {
    company,
    company_logo,
    company_url,
    description,
    from_date,
    position,
    technologies,
  } = content;

  return (
    <article className={`${styles.card} ${active ? styles.card_active : ""}`}>
      <header className={styles.header}>
        <span className={styles.logo_wrap}>
          <Image
            alt={`${company} logo`}
            className={styles.logo}
            height={40}
            loading="lazy"
            src={company_logo}
            width={40}
          />
        </span>
        <div className={styles.heading}>
          <Text as="h3" centered={false} size="subtitle" variant="gradient">
            {position}
          </Text>
          <a
            className={styles.company_link}
            href={company_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Text
              as="h4"
              centered={false}
              inHover
              size="description"
              variant="gradient"
            >
              {company}
            </Text>
          </a>
          <Text as="time" centered={false} size="caption">
            {from_date}
          </Text>
        </div>
      </header>

      <Text as="p" centered={false} size="description">
        {description}
      </Text>

      {technologies.length > 0 && (
        <div className={styles.tech_container}>
          {technologies.map((tech, index) => (
            <AnimatedInView
              animationType="slideInUp"
              id={`${company}_${position}_${tech.name}`}
              key={`${company}_${position}_${tech.name}`}
              delay={`${index * ANIMATION_LIST_DELAY}ms`}
              observerConfig={{ threshold: [0.1] }}
            >
              <Chip
                icon={
                  <Image
                    alt={tech.name}
                    height={14}
                    src={tech.logo_path as string}
                    title={tech.name}
                    loading="lazy"
                    width={14}
                  />
                }
                label={tech.name}
              />
            </AnimatedInView>
          ))}
        </div>
      )}
    </article>
  );
}
