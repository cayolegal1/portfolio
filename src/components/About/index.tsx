import { type JSX } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/core/components/Section";
import AnimatedTitle from "@/core/components/Animated/AnimatedTitle";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import Text from "@/core/components/Text";
import CountUp from "@/core/components/CountUp";
import { useExperienceTranslation } from "@/core/hooks/useExperienceTranslation";
import { getYearsOfExperience } from "@/core/utils/experience";
import { SECTIONS } from "@/core/data/global";
import data from "@/core/data/user-info.json";
import styles from "./About.module.css";

type Language = { name: string; level: string };

export default function About(): JSX.Element {
  const translate = useTranslations("About");
  const paragraphs = translate.raw("paragraphs") as string[];
  const languages = translate.raw("languages") as Language[];

  const experiences = useExperienceTranslation();
  const yearsOfExperience = getYearsOfExperience(data.career_start_date);

  const stats = [
    { value: yearsOfExperience, prefix: "+", label: translate("stats.experience") },
    { value: experiences.length, prefix: "", label: translate("stats.companies") },
  ];

  return (
    <Section id={SECTIONS.ABOUT}>
      <AnimatedTitle id="about_title">{translate("title")}</AnimatedTitle>

      <div className={styles.content}>
        <AnimatedInView
          animationType="fadeInLeft"
          className={styles.portrait}
          id="about_portrait"
        >
          <span className={styles.glow} aria-hidden="true" />
          <span className={styles.ring}>
            <Image
              alt={translate("image_alt")}
              className={styles.image}
              height={280}
              src="/about-me.jpg"
              width={280}
            />
          </span>
          <span className={styles.badge}>
            <span className={styles.badge_dot} aria-hidden="true" />
            {translate("badge")}
          </span>
        </AnimatedInView>

        <AnimatedInView
          animationType="slideInUp"
          className={styles.info}
          id="about_info"
        >
          {paragraphs.map((paragraph, index) => (
            <Text
              as="p"
              centered={false}
              className={styles.paragraph}
              key={index}
              size="text"
            >
              {paragraph}
            </Text>
          ))}

          <ul className={styles.stats}>
            {stats.map(stat => (
              <li className={styles.stat} key={stat.label}>
                <CountUp
                  className={styles.stat_value}
                  prefix={stat.prefix}
                  value={stat.value}
                />
                <Text
                  as="span"
                  centered={false}
                  className={styles.stat_label}
                  size="small"
                >
                  {stat.label}
                </Text>
              </li>
            ))}
          </ul>

          <div className={styles.languages}>
            <Text
              as="h4"
              centered={false}
              className={styles.languages_title}
              size="caption"
              uppercase
            >
              {translate("languages_title")}
            </Text>
            <ul className={styles.language_list}>
              {languages.map(language => (
                <li className={styles.language} key={language.name}>
                  <Text as="span" centered={false} size="small">
                    {language.name}
                  </Text>
                  <Text
                    as="span"
                    centered={false}
                    className={styles.language_level}
                    size="xs"
                  >
                    {language.level}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedInView>
      </div>
    </Section>
  );
}
