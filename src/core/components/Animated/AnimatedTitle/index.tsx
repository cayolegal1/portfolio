import AnimatedInView from "../AnimatedInView";
import Text from "@/core/components/Text";
import styles from "./AnimatedTitle.module.css";
import type { AnimatedTitleProps } from "./AnimatedTitle.types";

import type { JSX } from "react";

export default function AnimatedTitle({
  children,
  id,
}: AnimatedTitleProps): JSX.Element {
  return (
    <AnimatedInView id={id} animationType="pulse">
      <Text className={styles.animated_title} as="h3" size="title" uppercase>
        {children}
      </Text>
    </AnimatedInView>
  );
}
