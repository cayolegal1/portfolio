import type { TimelineProps } from "./Timeline.types";

import type { JSX } from "react";

export default function Timeline({ children, ...props }: TimelineProps): JSX.Element {
  return (
    <ol {...props}>
      {children}
    </ol>
  );
}