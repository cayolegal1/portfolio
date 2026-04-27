"use client";
import CarouselButton from "./components/CarouselButton";
import { useCarousel } from "@/core/hooks/useCarousel";
import styles from "./Carousel.module.css";
import type { CarouselProps } from "./Carousel.types";

export default function Carousel({
  children,
  className = "",
  ...props
}: CarouselProps) {
  const {
    canScrollLeft,
    canScrollRight,
    carouselRef,
    scrollLeft,
    scrollRight,
  } = useCarousel();
  return (
    <div className={styles.carousel_container}>
      <CarouselButton
        disabled={!canScrollLeft}
        onClick={scrollLeft}
        side="left"
        title="Scroll left"
      />

      <ul
        {...props}
        ref={carouselRef}
        className={`${styles.carousel} ${className}`}
      >
        {children}
      </ul>

      <CarouselButton
        disabled={!canScrollRight}
        onClick={scrollRight}
        side="right"
        title="Scroll right"
      />
    </div>
  );
}
