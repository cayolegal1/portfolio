import type { NavHamburguerProps } from "./NavHamburguer.types";
import styles from "./NavHamburguer.module.css";

export default function NavHamburguer({
  expanded,
}: NavHamburguerProps): JSX.Element {
  return (
    <div
      className={`${styles.hamburguer}`}
      aria-expanded={expanded}
      aria-label={expanded ? "Cerrar menú" : "Abrir menú"}
      aria-roledescription="Botón para abrir o cerrar menú de navegación"
    >
      <span className={`${styles.bar} ${styles.top}`}></span>
      <span className={`${styles.bar} ${styles.middle}`}></span>
      <span className={`${styles.bar} ${styles.bottom}`}></span>
    </div>
  );
}
