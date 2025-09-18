import styles from "./CarouselItem.module.css";
import type { CarouselItemProps } from "./CarouselItem.types";

export default function CarouselItem({
  children,
  className = "",
  ...props
}: CarouselItemProps) {
  return (
    <li {...props} className={`${styles.carousel_item} ${className}`}>
      {children}
    </li>
  );
}
