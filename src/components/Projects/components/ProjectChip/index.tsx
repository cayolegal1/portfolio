import Text from "@/core/components/Text";
import type { ProjectChipProps } from "./ProjectChip.types";
import styles from "./ProjectChip.module.css";

export default function ProjectChip({ children }: ProjectChipProps) {
  return (
    <div className={styles.project_chip_container}>
      <Text size="xs">{children}</Text>
    </div>
  );
}
