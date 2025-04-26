import Image from "next/image";
import Chip from "../Chip";
import Text from "../Text";
import AnimatedInView from "../Animated/AnimatedInView";
import { ANIMATION_LIST_DELAY } from "@/core/data/global";
import type { TimelineContentProps } from "./TimelineContent.types";
import styles from "./TimelineContent.module.css";

export default function TimelineContent({
  content,
}: TimelineContentProps): JSX.Element {
  const {
    company,
    company_logo,
    company_url,
    description,
    from_date,
    position,
    technologies,
  } = content;

  return (
    <div className={styles.content_container}>
      <div>
        <Text as="h3" size="subtitle" variant="gradient" centered={false}>
          {position}
        </Text>
        <a href={company_url} target="_blank" rel="noopener noreferrer">
          <Image
            src={company_logo}
            alt={`${company}_logo`}
            width={20}
            height={20}
            unoptimized
          />
          <Text
            as="h4"
            centered={false}
            inHover
            size="description"
            variant="gradient"
          >
            {company}
          </Text>
        </a>
        <Text as="time" size="caption" centered={false}>
          {from_date}
        </Text>
      </div>
      <div>
        <Text as="p" size="description" centered={false}>
          {description}
        </Text>
        {technologies.length > 0 && (
          <div className={styles.tech_container}>
            {technologies.map((tech, index) => (
              <AnimatedInView
                animationType="slideInUp"
                id={`${company}_${position}_${tech.name}`}
                key={`${company}_${position}_${tech.name}`}
                delay={`${index * ANIMATION_LIST_DELAY}ms`}
                observerConfig={{ threshold: [0.1] }}
              >
                <Chip
                  icon={
                    <Image
                      alt={tech.name}
                      height={14}
                      src={tech.logo_path as string}
                      title={tech.name}
                      unoptimized
                      width={14}
                    />
                  }
                  label={tech.name}
                />
              </AnimatedInView>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
