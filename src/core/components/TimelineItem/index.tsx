"use client";
import AnimatedRender from "../AnimatedRender";
import TimelineContent from "../TimelineContent";
import { useInView } from "@/core/hooks/useInView";
import type { TimelineItemProps } from "./TimelineItem.types";
import styles from "./TimelineItem.module.css";

export default function TimelineItem({
  experience,
  ...props
}: TimelineItemProps): JSX.Element {
  const isInView = useInView(experience.id, true);
  return (
    <AnimatedRender
      animate={isInView}
      animationType="slideInLeft"
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
    </AnimatedRender>
  );
}
