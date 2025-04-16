import type { NavHamburguerProps } from "./NavHamburguer.types";
import styles from "./NavHamburguer.module.css";

export default function NavHamburguer({
  expanded,
}: NavHamburguerProps): JSX.Element {
  return (
    <div
      className={styles.hamburguer}
      aria-controls="primary-navigation"
      aria-expanded={expanded}
    >
      <svg fill="white" viewBox="0 0 100 100" width="27">
        <rect
          className={`${styles.line} ${styles.top}`}
          width="80"
          height="10"
          x="10"
          y="30"
          rx="5"
        ></rect>
        <rect
          className={`${styles.line} ${styles.middle}`}
          width="80"
          height="10"
          x="10"
          y="50"
          rx="5"
        ></rect>
        <rect
          className={`${styles.line} ${styles.bottom}`}
          width="80"
          height="10"
          x="10"
          y="70"
          rx="5"
        ></rect>
      </svg>
    </div>
  );
}
