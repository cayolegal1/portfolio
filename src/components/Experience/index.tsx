import Section from "@/core/components/Section";
import AnimatedTitle from "@/core/components/Animated/AnimatedTitle";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import Timeline from "@/core/components/Timeline";
import TimelineItem from "@/core/components/TimelineItem";
import { useTranslations } from "next-intl";
import { useExperienceTranslation } from "@/core/hooks/useExperienceTranslation";
import { SECTIONS } from "@/core/data/global";
import styles from "./Experience.module.css";

export default function Experience(): JSX.Element {
  const translate = useTranslations("Experience");
  const experiences = useExperienceTranslation();
  return (
    <Section id={SECTIONS.EXPERIENCE}>
      <AnimatedTitle id="experience_title">{translate("title")}</AnimatedTitle>
      <div className={styles.timeline_container}>
        <Timeline>
          {experiences.map(item => (
            <AnimatedInView
              key={item.id}
              animationType="fadeInDown"
              id={item.id}
            >
              <TimelineItem key={item.id} experience={item} />
            </AnimatedInView>
          ))}
        </Timeline>
      </div>
    </Section>
  );
}
