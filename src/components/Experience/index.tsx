import { useTranslations } from "next-intl";
import Section from "@/core/components/Section";
import Text from "@/core/components/Text";
import Timeline from "@/core/components/Timeline";
import TimelineItem from "@/core/components/TimelineItem";
import { SECTIONS } from "@/core/data/global";
import styles from "./Experience.module.css";


export default function Experience(): JSX.Element {
  const t = useTranslations("Experience");
  const translatedExperiences = Array.from(Array(Number(t("length"))).keys()).map((_, index) => {
    return {
      id: index,
      company: t(`${index}.company`),
      position: t(`${index}.position`),
      from_date: t(`${index}.from_date`),
      description: t(`${index}.description`),
    };
  });
  ;
  return (
    <Section id={SECTIONS.EXPERIENCE} withSeparator>
      <Text as="h3" size="title">
        {t("title")}
      </Text>
      <div className={styles.timeline_container}>
        <Timeline>
          {translatedExperiences.map(item => (
            <TimelineItem key={item.id} experience={item} />
          ))}
        </Timeline>
      </div>
    </Section>
  );
}
