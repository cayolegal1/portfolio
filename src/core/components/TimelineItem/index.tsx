import type { TimelineItemProps } from "./TimelineItem.types";
import styles from "./TimelineItem.module.css";

export default function TimelineItem({
  ...props
}: TimelineItemProps): JSX.Element {
  return (
    <li {...props} className={styles.timeline_item_container}>
      <div className={styles.timeline_item}>
        
      </div>
    </li>
  );
}
