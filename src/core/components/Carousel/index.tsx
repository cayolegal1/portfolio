"use client";
import { Children } from "react";
import CarouselButton from "./components/CarouselButton";
import { useCarousel } from "@/core/hooks/useCarousel";
import styles from "./Carousel.module.css";
import type { CarouselProps } from "./Carousel.types";

export default function Carousel({
  children,
  className = "",
  ...props
}: CarouselProps) {
  const count = Children.count(children);
  const {
    canScrollLeft,
    canScrollRight,
    carouselRef,
    index,
    scrollLeft,
    scrollRight,
    goTo,
  } = useCarousel(count);

  const hasMultiple = count > 1;

  return (
    <div className={styles.carousel_container}>
      <ul {...props} ref={carouselRef} className={`${styles.carousel} ${className}`}>
        {children}
      </ul>

      {hasMultiple && (
        <>
          <CarouselButton
            disabled={!canScrollLeft}
            onClick={scrollLeft}
            side="left"
            title="Scroll left"
          />
          <CarouselButton
            disabled={!canScrollRight}
            onClick={scrollRight}
            side="right"
            title="Scroll right"
          />

          <div className={styles.dots}>
            {Array.from({ length: count }).map((_, dotIndex) => (
              <button
                aria-label={`Ver imagen ${dotIndex + 1}`}
                className={`${styles.dot} ${dotIndex === index ? styles.dot_active : ""}`}
                key={dotIndex}
                onClick={() => goTo(dotIndex)}
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
