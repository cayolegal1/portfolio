import ArrowIcon from "@/core/components/Icons/ArrowIcon";
import styles from "./CarouselButton.module.css";
import type { CarouselButtonProps } from "./CarouselButton.types";

export default function CarouselButton({
  side,
  ...props
}: CarouselButtonProps) {
  return (
    <button
      {...props}
      className={`
        ${styles.carousel_button} 
        ${side === "left" ? styles.carousel_button_left : styles.carousel_button_right}
      `}
    >
      <ArrowIcon
        className={
          side === "left"
            ? styles.carousel_icon_left
            : styles.carousel_icon_right
        }
      />
    </button>
  );
}
