import TextGradient from "@/core/components/TextGradient";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.nav_link} href="#home" aria-label="Home">
          <TextGradient inHover>Sobre Mi</TextGradient>
        </a>
        <a className={styles.nav_link} href="#services" aria-label="Services">
          <TextGradient inHover>Experiencia</TextGradient>
        </a>
        <a className={styles.nav_link} href="#contact" aria-label="Contact">
          <TextGradient inHover>Contacto</TextGradient>
        </a>
      </nav>
    </header>
  );
}
