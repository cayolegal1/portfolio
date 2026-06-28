import { type JSX } from "react";
import { useTranslations } from "next-intl";
import Section from "@/core/components/Section";
import AnimatedTitle from "@/core/components/Animated/AnimatedTitle";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import TechStack from "./components/TechStack";
import { SECTIONS } from "@/core/data/global";

export default function Technologies(): JSX.Element {
  const translate = useTranslations("Technologies");
  return (
    <Section id={SECTIONS.TECHNOLOGIES}>
      <AnimatedTitle id="technologies_title">
        {translate("title")}
      </AnimatedTitle>

      <AnimatedInView
        animationType="slideInUp"
        id={SECTIONS.TECHNOLOGIES}
        useId={false}
      >
        <TechStack />
      </AnimatedInView>
    </Section>
  );
}
