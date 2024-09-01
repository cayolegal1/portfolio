import AnimatedRender from "@/core/components/AnimatedRender";
import TextGradient from "@/core/components/TextGradient";
import styles from "./Header.module.css";

const headers = [
  "Sobre Mi",
  "Experiencia",
  "Proyectos"
];

export default function Header() {
  return (
    <AnimatedRender
      as="header"
      animationType="fadeInDown"
      delay="3.3s"
      className={styles.header}
    >
      <nav className={styles.nav}>
        {headers.map(header => (
          <a key={header} className={styles.nav_link}>
            <TextGradient inHover>{header}</TextGradient>
          </a>
        ))}
      </nav>
    </AnimatedRender>
  );
}
