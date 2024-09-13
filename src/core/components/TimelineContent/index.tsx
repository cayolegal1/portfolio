import Text from "../Text";
import type { TimelineContentProps } from "./TimelineContent.types";
import styles from "./TimelineContent.module.css";

export default function TimelineContent({
  content,
}: TimelineContentProps): JSX.Element {
  return (
    <div className={styles.content_container}>
      <div>
        <Text as="h3" size="subtitle" variant="gradient" centered={false}>
          {content.position}
        </Text>
        <Text as="h4" size="description" centered={false}>
          {content.company}
        </Text>
        <Text as="p" size="caption" centered={false}>
          {content.from_date}
        </Text>
      </div>
        <Text as="p" size="description" centered={false}>
          {content.description}
        </Text>
    </div>
  );
}
