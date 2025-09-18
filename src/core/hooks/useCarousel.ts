import { useEffect, useRef, useState } from "react";

export const useCarousel = () => {
  const carouselRef = useRef<HTMLUListElement | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkPosition = () => {
    const el = carouselRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft <= 0;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth;

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
  };

  const scrollAmount = 50;

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el || typeof window === "undefined") return;

    checkPosition();
    el.addEventListener("scroll", checkPosition);

    return () => {
      el.removeEventListener("scroll", checkPosition);
    };
  }, []);

  return {
    canScrollLeft,
    canScrollRight,
    carouselRef,
    scrollLeft,
    scrollRight,
  };
};
