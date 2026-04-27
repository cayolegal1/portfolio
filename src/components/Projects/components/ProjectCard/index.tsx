import { type JSX } from "react";
import Text from "@/core/components/Text";
import type { ProjectCardProps } from "./ProjectCard.types";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  title,
  description,
}: ProjectCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Text as="h4" size="subtitle" centered={false}>
        {title}
      </Text>

      <Text as="p" size="caption" centered={false}>
        {description}
      </Text>
    </div>
  );
}
