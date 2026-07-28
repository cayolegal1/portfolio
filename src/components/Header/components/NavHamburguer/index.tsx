import type { NavHamburguerProps } from "./NavHamburguer.types";
import styles from "./NavHamburguer.module.css";

import type { JSX } from "react";

export default function NavHamburguer({
  expanded,
}: NavHamburguerProps): JSX.Element {
  return (
    <span
      aria-hidden="true"
      className={styles.hamburguer}
      data-expanded={expanded}
    >
      <span className={`${styles.bar} ${styles.top}`}></span>
      <span className={`${styles.bar} ${styles.middle}`}></span>
      <span className={`${styles.bar} ${styles.bottom}`}></span>
    </span>
  );
}
