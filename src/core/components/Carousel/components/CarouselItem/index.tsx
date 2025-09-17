import styles from "./CarouselItem.module.css";
import type { CarouselItemProps } from "./CarouselItem.types";

export default function CarouselItem({ children }: CarouselItemProps) {
  return <li className={styles.carousel_item}>{children}</li>;
}
