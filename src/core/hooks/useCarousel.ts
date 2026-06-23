import { useRef, useState } from "react";

export const useCarousel = (itemCount: number) => {
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const [index, setIndex] = useState(0);

  const goTo = (target: number) => {
    const next = Math.max(0, Math.min(target, itemCount - 1));
    setIndex(next);
    carouselRef.current?.children[next]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest", // no mover la página verticalmente
      inline: "start",
    });
  };

  return {
    carouselRef,
    index,
    count: itemCount,
    canScrollLeft: index > 0,
    canScrollRight: index < itemCount - 1,
    scrollLeft: () => goTo(index - 1),
    scrollRight: () => goTo(index + 1),
    goTo,
  };
};
