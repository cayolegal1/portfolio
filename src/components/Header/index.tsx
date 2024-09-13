import Link from "next/link";
import AnimatedRender from "@/core/components/AnimatedRender";
import Text from "@/core/components/Text";
import styles from "./Header.module.css";

const headers = [
  { title: "Sobre mi", href: "/" },
  { title: "Experiencia", href: "#experience" },
  { title: "Proyectos", href: "#proyects" },
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
        {headers.map(header => (
          <Link
            key={header.title}
            className={styles.nav_link}
            href={header.href}
          >
            <Text variant="gradient" inHover>
              {header.title}
            </Text>
          </Link>
        ))}
      </nav>
    </AnimatedRender>
  );
}
