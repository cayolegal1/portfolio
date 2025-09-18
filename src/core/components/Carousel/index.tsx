import CarouselButton from "./components/CarouselButton";
import styles from "./Carousel.module.css";
import type { CarouselProps } from "./Carousel.types";

export default function Carousel({
  children,
  className = "",
  ...props
}: CarouselProps) {
  return (
    <div className={styles.carousel_container}>
      <CarouselButton side="left" />

      <ul {...props} className={`${styles.carousel} ${className}`}>
        {children}
      </ul>

      <CarouselButton side="right" />
    </div>
  );
}
