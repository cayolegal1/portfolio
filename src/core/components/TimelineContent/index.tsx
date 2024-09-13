import Text from "../Text";
import type { TimelineContentProps } from "./TimelineContent.types";
import styles from "./TimelineContent.module.css";

export default function TimelineContent({
  content,
}: TimelineContentProps): JSX.Element {
  return (
    <div className={styles.content_container}>
      <div>
        <Text as="h3" size="subtitle" variant="gradient">
          {content.position}
        </Text>
        <Text as="h4" size="text">
          {content.company}
        </Text>
        <Text as="p" size="caption">
          {content.from_date}
        </Text>
      </div>
        <Text as="p" size="text">
          {content.description}
        </Text>
    </div>
  );
}
