import { type JSX } from "react";
import Text from "@/core/components/Text";
import type { ProjectCardProps } from "./ProjectCard.types";
import AndroidGradientIcon from "@/core/components/Icons/Gradient/AndroidGradientIcon";
import IosGradientIcon from "@/core/components/Icons/Gradient/IosGradientIcon";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  project: { title, description, androidUrl, iosUrl },
}: ProjectCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Text as="h4" size="xl" centered={false}>
        {title}
      </Text>

      <Text as="p" size="caption" centered={false}>
        {description}
      </Text>

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
