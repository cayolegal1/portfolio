import type { NavHamburguerProps } from "./NavHamburguer.types";
import styles from "./NavHamburguer.module.css";

import type { JSX } from "react";

export default function NavHamburguer({
  expanded,
}: NavHamburguerProps): JSX.Element {
  return (
    <div
      className={`${styles.hamburguer}`}
      role="button"
      aria-controls="main navigation"
      aria-expanded={expanded}
      aria-label={expanded ? "Cerrar menú" : "Abrir menú"}
    >
      <span className={`${styles.bar} ${styles.top}`}></span>
      <span className={`${styles.bar} ${styles.middle}`}></span>
      <span className={`${styles.bar} ${styles.bottom}`}></span>
    </div>
  );
}
