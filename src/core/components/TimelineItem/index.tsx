import TimelineContent from "../TimelineContent";
import type { TimelineItemProps } from "./TimelineItem.types";
import styles from "./TimelineItem.module.css";

import type { JSX } from "react";

export default function TimelineItem({
  active,
  experience,
  ...props
}: TimelineItemProps): JSX.Element {
  return (
    <div {...props} className={styles.item}>
      <span
        aria-hidden="true"
        className={`${styles.dot} ${active ? styles.active : ""}`}
      />
      <TimelineContent active={active} content={experience} />
    </div>
  );
}
