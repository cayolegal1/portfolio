import HeroPresentation from "./components/HeroPresentation";
import HeroContact from "./components/HeroContact";
import HeroExpand from "./components/HeroExpand";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <HeroPresentation />
      <HeroContact />
      <HeroExpand />
    </section>
  );
}
