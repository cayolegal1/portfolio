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
        side="left"
        onClick={scrollLeft}
        disabled={!canScrollLeft}
      />

      <ul
        {...props}
        ref={carouselRef}
        className={`${styles.carousel} ${className}`}
      >
        {children}
      </ul>

      <CarouselButton
        side="right"
        onClick={scrollRight}
        disabled={!canScrollRight}
      />
    </div>
  );
}
