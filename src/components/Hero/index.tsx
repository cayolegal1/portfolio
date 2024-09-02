import Image from "next/image";
import HeroPresentation from "./components/HeroPresentation";
import HeroContact from "./components/HeroContact";
import HeroSkills from "./components/HeroSkills";
import HeroExpand from "./components/HeroExpand";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.bg_container}>
        <Image
          src="/images/bg.webp"
          alt="bg_image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.content}>
        <HeroPresentation />
      </div>

      <div className={styles.content}>
        <HeroSkills />
      </div>

      <HeroContact />

      <HeroExpand />
    </section>
  );
}
