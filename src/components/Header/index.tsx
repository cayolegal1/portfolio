import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.nav_link} href="#home" aria-label="Home">
          Sobre Mi
        </a>
        <a className={styles.nav_link} href="#services" aria-label="Services">
          Experiencia
        </a>
        <a className={styles.nav_link} href="#contact" aria-label="Contact">
          Contacto
        </a>
      </nav>
    </header>
  );
}
