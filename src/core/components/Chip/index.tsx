import Text from "../Text";
import type { ChipProps } from "./Chip.types";
import styles from "./Chip.module.css";

import type { JSX } from "react";

export default function Chip({ icon, label }: ChipProps): JSX.Element {
  return (
    <div className={styles.chip_container}>
      {icon}
      <Text size="caption" as="p" variant="gradient" inHover>
        {label}
      </Text>
    </div>
  );
}
