import { useTranslations } from "next-intl";
import Section from "@/core/components/Section";
import AnimatedTitle from "@/core/components/Animated/AnimatedTitle";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import Text from "@/core/components/Text";
import { SECTIONS } from "@/core/data/global";
import styles from "./Projects.module.css";
import Carousel from "@/core/components/Carousel";
import CarouselItem from "@/core/components/Carousel/components/CarouselItem";
import ProjectImage from "./components/ProjectImage";

export default function Projects() {
  const translate = useTranslations("Projects");
  return (
    <Section
      id={SECTIONS.PROJECTS}
      className={styles.container}
      improvePerformance={false}
    >
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
          {[1, 2].map((item, index) => (
            <CarouselItem className={styles.image} key={index}>
              <ProjectImage src={`/la_barra_assets/image_${index + 1}.webp`} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </Section>
  );
}
