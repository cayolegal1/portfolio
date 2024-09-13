import TimelineContent from "../TimelineContent";
import type { TimelineItemProps } from "./TimelineItem.types";
import styles from "./TimelineItem.module.css";

export default function TimelineItem({
  experience,
  ...props
}: TimelineItemProps): JSX.Element {
  return (
    <li {...props} className={styles.timeline_item_container}>
      <div className={styles.timeline_item}>
        <span />
        <TimelineContent content={experience} />
      </div>
    </li>
  );
}