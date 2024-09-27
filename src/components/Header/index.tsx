import AnimatedRender from "@/core/components/AnimatedRender";
import NavItem from "./components/NavItem";
import NavToggleLanguage from "./components/NavToggleLanguage";
import NavButton from "./components/NavButton";
import { SECTIONS } from "@/core/data/global";
import styles from "./Header.module.css";

const headers = [
  { title: "home", href: SECTIONS.HOME },
  { title: "experience", href: SECTIONS.EXPERIENCE },
  { title: "proyects", href: SECTIONS.PROYECTS },
  { title: "about_me", href: SECTIONS.ABOUT },
  { title: "contact", href: SECTIONS.CONTACT },
  { title: "language", href: SECTIONS.LANGUAGE },
] as const;

export default function Header() {
  return (
    <>
      <NavButton />
      <AnimatedRender
        animationType="fadeInDown"
        as="header"
        className={`navbar__hidden ${styles.header}`}
        delay="2.8s"
        id="header"
      >
        <nav className={styles.nav}>
          {headers.map(item => item.href !== SECTIONS.LANGUAGE ?(
            <NavItem key={item.href} item={item} />
          ): (
            <NavToggleLanguage key={item.href} title={item.title} />
          ))}
        </nav>
      </AnimatedRender>
    </>
  );
}
