import { useTranslations } from "next-intl";
import Section from "@/core/components/Section";
import Text from "@/core/components/Text";
import Timeline from "@/core/components/Timeline";
import TimelineItem from "@/core/components/TimelineItem";
import { useExperienceTranslation } from "@/core/hooks/useExperienceTranslation";
import { SECTIONS } from "@/core/data/global";
import styles from "./Experience.module.css";


export default function Experience(): JSX.Element {
  const translate = useTranslations("Experience");
  const experiences = useExperienceTranslation();
  return (
    <Section id={SECTIONS.EXPERIENCE} withSeparator>
      <Text as="h3" size="title">
        {translate("title")}
      </Text>
      <div className={styles.timeline_container}>
        <Timeline>
          {experiences.map(item => (
            <TimelineItem key={item.id} experience={item} />
          ))}
        </Timeline>
      </div>
    </Section>
  );
}
