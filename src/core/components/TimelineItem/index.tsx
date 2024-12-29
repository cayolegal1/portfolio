import TimelineContent from "../TimelineContent";
import type { TimelineItemProps } from "./TimelineItem.types";
import styles from "./TimelineItem.module.css";

export default function TimelineItem({
  active,
  experience,
  ...props
}: TimelineItemProps): JSX.Element {
  return (
    <div {...props} className={styles.timeline_item_container}>
      <div className={styles.timeline_item}>
        <span className={active ? styles.active : ""} />
        <TimelineContent content={experience} />
      </div>
    </div>
  );
}
