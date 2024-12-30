import React from "react";
import type { ScalableItemProps } from "./ScalableItem.types";
import styles from "./ScalableItem.module.css";

export const ScalableItem = ({ children }: ScalableItemProps): JSX.Element => {
  return <div className={styles.scalable_item}>{children}</div>;
};
