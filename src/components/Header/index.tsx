import AnimatedRender from "@/core/components/AnimatedRender";
import NavItem from "./components/NavItem";
import { SECTIONS } from "@/core/data/global";
import styles from "./Header.module.css";

const headers = [
  { title: "Sobre mi", href: SECTIONS.HERO },
  { title: "Experiencia", href: SECTIONS.EXPERIENCE },
  { title: "Proyectos", href: SECTIONS.PROYECTS },
];

export default function Header() {
  return (
    <AnimatedRender
      as="header"
      animationType="fadeInDown"
      delay="2.8s"
      className={styles.header}
    >
      <nav className={styles.nav}>
        {headers.map(item => (
          <NavItem key={item.href} item={item} />
        ))}
      </nav>
    </AnimatedRender>
  );
}
