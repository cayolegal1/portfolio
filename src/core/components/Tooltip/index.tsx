import Text from "../Text";
import type { TooltipProps } from "./Tooltip.types";
import styles from "./Tooltip.module.css";

import type { JSX } from "react";

export default function Tooltip({
  children,
  tooltip,
}: TooltipProps): JSX.Element {
  return (
    <div className={styles.tooltip_container}>
      {children}
      <Text className={styles.tooltip_text} size="caption">
        {tooltip}
      </Text>
    </div>
  );
}
