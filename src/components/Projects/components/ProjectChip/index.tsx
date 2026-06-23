import Image from "next/image";
import Text from "@/core/components/Text";
import type { ProjectChipProps } from "./ProjectChip.types";
import styles from "./ProjectChip.module.css";

export default function ProjectChip({ name, logo }: ProjectChipProps) {
  return (
    <div className={styles.project_chip_container}>
      {logo && (
        <Image
          alt=""
          aria-hidden="true"
          className={styles.logo}
          height={16}
          src={logo}
          width={16}
        />
      )}
      <Text size="xs">{name}</Text>
    </div>
  );
}
