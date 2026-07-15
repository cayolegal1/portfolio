import { type JSX } from "react";
import { useTranslations } from "next-intl";
import Section from "@/core/components/Section";
import AnimatedTitle from "@/core/components/Animated/AnimatedTitle";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import Text from "@/core/components/Text";
import ServiceList from "./components/ServiceList";
import { SECTIONS } from "@/core/data/global";
import styles from "./Services.module.css";

export default function Services(): JSX.Element {
  const translate = useTranslations("Services");
  return (
    <Section
      className={styles.container}
      id={SECTIONS.SERVICES}
      improvePerformance={false}
    >
      <AnimatedTitle id="services_title">{translate("title")}</AnimatedTitle>

      <AnimatedInView
        animationType="fadeInDown"
        id="services_subtitle"
        useId={false}
      >
        <Text
          as="p"
          className={styles.subtitle}
          id="services_subtitle"
          size="text"
          uppercase={false}
        >
          {translate("subtitle")}
        </Text>
      </AnimatedInView>

      <div className={styles.services_section}>
        <ServiceList />
      </div>
    </Section>
  );
}
