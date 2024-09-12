import type { TimelineProps } from "./Timeline.types";

export default function Timeline({ children, ...props }: TimelineProps): JSX.Element {
  return (
    <ol {...props}>
      {children}
    </ol>
  );
}