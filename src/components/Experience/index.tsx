import Section from "@/core/components/Section";
import Text from "@/core/components/Text";
import Timeline from "@/core/components/Timeline";
import styles from "./Experience.module.css";

export default function Experience(): JSX.Element {
  return (
    <Section>
      <Text as="h3">Experiencia</Text>
      <div className={styles.timeline_container}>
        <Timeline>
          <></>
        </Timeline>
      </div>
    </Section>
  );
}
