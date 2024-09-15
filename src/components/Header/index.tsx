import AnimatedRender from "@/core/components/AnimatedRender";
import NavItem from "./components/NavItem";
import styles from "./Header.module.css";

const headers = [
  { title: "Sobre mi", href: "hero" },
  { title: "Experiencia", href: "experience" },
  { title: "Proyectos", href: "proyects" },
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
