import AnimatedRender from "@/core/components/AnimatedRender";
import NavItem from "./components/NavItem";
import { SECTIONS } from "@/core/data/global";
import styles from "./Header.module.css";

const headers = [
  { title: "Experiencia", href: SECTIONS.EXPERIENCE },
  { title: "Proyectos", href: SECTIONS.PROYECTS },
  { title: "Sobre mi", href: SECTIONS.ABOUT },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <AnimatedRender
        animationType="fadeInDown"
        className={styles.nav_container}
        delay="2.8s"
      >
        <nav className={styles.nav}>
          {headers.map(item => (
            <NavItem key={item.href} item={item} />
          ))}
        </nav>
      </AnimatedRender>
    </header>
  );
}
