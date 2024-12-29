import type { HTMLAttributes } from "react";
import type { Experience } from "../TimelineContent/TimelineContent.types";

export type TimelineItemProps = HTMLAttributes<HTMLDivElement> & {
  active: boolean;
  experience: Experience;
};
