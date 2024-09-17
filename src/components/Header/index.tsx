import AnimatedRender from "@/core/components/AnimatedRender";
import NavItem from "./components/NavItem";
import NavDrawerButton from "./components/NavButton";
import { SECTIONS } from "@/core/data/global";
import styles from "./Header.module.css";

const headers = [
  { title: "Experiencia", href: SECTIONS.EXPERIENCE },
  { title: "Proyectos", href: SECTIONS.PROYECTS },
  { title: "Sobre mi", href: SECTIONS.ABOUT },
];

export default function Header() {
  return (
    <>
      <NavDrawerButton />
      <AnimatedRender
        animationType="fadeInDown"
        as="header"
        className={`navbar__hidden ${styles.header}`}
        delay="2.8s"
        id="header"
      >
        <nav className={styles.nav}>
          {headers.map(item => (
            <NavItem key={item.href} item={item} />
          ))}
        </nav>
      </AnimatedRender>
    </>
  );
}
