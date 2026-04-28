import { type JSX } from "react";
import Text from "@/core/components/Text";
import ProjectChip from "../ProjectChip";
import AndroidGradientIcon from "@/core/components/Icons/Gradient/AndroidGradientIcon";
import IosGradientIcon from "@/core/components/Icons/Gradient/IosGradientIcon";
import type { ProjectCardProps } from "./ProjectCard.types";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  project: { title, description, androidUrl, iosUrl, technologies },
}: ProjectCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Text as="h4" size="xl" centered={false}>
        {title}
      </Text>

      <Text as="p" size="small" centered={false}>
        {description}
      </Text>

      {Array.isArray(technologies) && technologies.length > 0 && (
        <div className={styles.technologies_container}>
          {technologies.map(techName => (
            <ProjectChip key={techName}>{techName}</ProjectChip>
          ))}
        </div>
      )}

      <div className={styles.links_container}>
        <div className={styles.links}>
          {androidUrl && (
            <a
              href={androidUrl}
              rel="noopener noreferrer"
              target="_blank"
              title="Android URL"
            >
              <AndroidGradientIcon />
            </a>
          )}

          {iosUrl && (
            <a
              href={iosUrl}
              rel="noopener noreferrer"
              target="_blank"
              title="iOS URL"
            >
              <IosGradientIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
