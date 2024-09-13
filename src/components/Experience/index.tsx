import Section from "@/core/components/Section";
import Text from "@/core/components/Text";
import Timeline from "@/core/components/Timeline";
import TimelineItem from "@/core/components/TimelineItem";
import TimelineContent from "@/core/components/TimelineContent";
import styles from "./Experience.module.css";
import data from "@/core/data/experience.json";

export default function Experience(): JSX.Element {
  const { experience } = data;
  return (
    <Section>
      <Text as="h3" size="title">Experiencia laboral</Text>
      <div className={styles.timeline_container}>
        <Timeline>
          {experience.map(item => (
            <TimelineItem key={item.id}>
              <TimelineContent content={item} />
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Section>
  );
}
