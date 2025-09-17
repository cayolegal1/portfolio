import { useTranslations } from "next-intl";
import Section from "@/core/components/Section";
import AnimatedTitle from "@/core/components/Animated/AnimatedTitle";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import Text from "@/core/components/Text";
import { SECTIONS } from "@/core/data/global";
import styles from "./Projects.module.css";

export default function Projects() {
  const translate = useTranslations("Projects");
  return (
    <Section id={SECTIONS.PROYECTS}>
      <AnimatedTitle id="projects_title">{translate("title")}</AnimatedTitle>
      <AnimatedInView
        animationType="fadeInDown"
        id="projects_subtitle"
        useId={false}
      >
        <Text
          as="p"
          id="projects_subtitle"
          className={styles.subtitle}
          size="text"
          uppercase={false}
        >
          {translate("subtitle")}
        </Text>
      </AnimatedInView>
    </Section>
  );
}
