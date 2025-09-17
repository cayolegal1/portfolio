import styles from "./Carousel.module.css";
import type { CarouselProps } from "./Carousel.types";

export default function Carousel({ children }: CarouselProps) {
  return <ul className={styles.carousel}>{children}</ul>;
}
