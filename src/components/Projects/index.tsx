import { useTranslations } from "next-intl";
import Section from "@/core/components/Section";
import AnimatedTitle from "@/core/components/Animated/AnimatedTitle";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import Text from "@/core/components/Text";
import { SECTIONS } from "@/core/data/global";
import styles from "./Projects.module.css";
import Carousel from "@/core/components/Carousel";
import CarouselItem from "@/core/components/Carousel/components/CarouselItem";

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
      <div className={styles.projects_section}>
        <Carousel>
          <CarouselItem className={styles.image}>
            <img
              src="/la_barra_assets/image_1.webp"
              loading="lazy"
              style={{
                maxWidth: "20rem",
                maxHeight: "20rem",
                borderRadius: "10px",
                width: "100%",
              }}
            />
          </CarouselItem>
          <CarouselItem className={styles.image}>
            <img
              src="/la_barra_assets/image_2.webp"
              loading="lazy"
              style={{
                maxWidth: "20rem",
                maxHeight: "20rem",
                borderRadius: "10px",
                width: "100%",
              }}
            />
          </CarouselItem>
        </Carousel>
      </div>
    </Section>
  );
}
