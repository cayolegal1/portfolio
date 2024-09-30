"use client";
import AnimatedInView from "../AnimatedInView";
import TimelineContent from "../TimelineContent";
import type { TimelineItemProps } from "./TimelineItem.types";
import styles from "./TimelineItem.module.css";

export default function TimelineItem({
  experience,
  ...props
}: TimelineItemProps): JSX.Element {
  return (
    <AnimatedInView
      animationType="fadeInDown"
      as="li"
      className={styles.timeline_item_container}
      delay="0"
      id={experience.id}
      {...props}
    >
      <div className={styles.timeline_item}>
        <span />
        <TimelineContent content={experience} />
      </div>
    </AnimatedInView>
  );
}
