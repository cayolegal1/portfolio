import { useTranslations } from "next-intl";
import Section from "@/core/components/Section";
import AnimatedTitle from "@/core/components/Animated/AnimatedTitle";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import Timeline from "@/core/components/Timeline";
import TimelineItem from "@/core/components/TimelineItem";
import { useExperienceTranslation } from "@/core/hooks/useExperienceTranslation";
import { SECTIONS } from "@/core/data/global";
import styles from "./Experience.module.css";

import type { JSX } from "react";

export default function Experience(): JSX.Element {
  const translate = useTranslations("Experience");
  const experiences = useExperienceTranslation();
  return (
    <Section id={SECTIONS.EXPERIENCE}>
      <AnimatedTitle id="experience_title">{translate("title")}</AnimatedTitle>
      <div className={styles.timeline_container}>
        <Timeline>
          {experiences.map((experience, index) => (
            <AnimatedInView
              animationType="slideInUp"
              as="li"
              id={experience.id}
              key={experience.id}
              observerConfig={{
                threshold: [0.2],
              }}
            >
              <TimelineItem active={index === 0} experience={experience} />
            </AnimatedInView>
          ))}
        </Timeline>
      </div>
    </Section>
  );
}
