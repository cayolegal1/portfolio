import Section from "@/core/components/Section";
import HeroPresentation from "./components/HeroPresentation";
import HeroActions from "./components/HeroActions";
import HeroContact from "./components/HeroContact";
import HeroStack from "./components/HeroStack";
import HeroExpand from "./components/HeroExpand";
import { SECTIONS } from "@/core/data/global";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Section className={styles.hero_container} id={SECTIONS.HOME}>
      <div className={styles.aurora} aria-hidden="true" />
      <div className={styles.content}>
        <HeroPresentation />
        <HeroActions />
        <HeroContact />
        <HeroStack />
      </div>
      <HeroExpand />
    </Section>
  );
}
