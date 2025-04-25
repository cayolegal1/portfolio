import { useEffect, useState } from "react";

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || !document) return;

    const updateScrollProgress = () => {
      window.requestAnimationFrame(() => {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;

        const height = scrollHeight - clientHeight;
        const scrolled = height > 0 ? (scrollTop / height) * 100 : 0;
        setScrollProgress(scrolled);
      });
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return {
    scrollProgress,
  };
};
