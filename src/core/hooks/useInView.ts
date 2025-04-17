import { useState, useEffect, useRef } from "react";

export const useInView = (
  href: string,
  once: boolean | undefined = false,
  observerConfig?: Partial<IntersectionObserverInit>,
) => {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = (section: HTMLElement) => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      setIsInView(entry.isIntersecting);
      if (observerRef.current && entry.isIntersecting && once) {
        observerRef.current.disconnect();
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      root: observerConfig?.root || null,
      rootMargin: observerConfig?.rootMargin || "0px",
      threshold: observerConfig?.threshold || [0.5, 1.0],
    });

    observerRef.current.observe(section);
  };

  const onDocVisibilityChange = (section: HTMLElement) => {
    if (document.visibilityState === "hidden") {
      observerRef.current?.disconnect();
    } else {
      observerRef.current?.observe(section);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined" || !document) return;

    const section = document.getElementById(href);
    if (section) {
      observe(section);
      const handleVisibilityChange = () => onDocVisibilityChange(section);
      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }

        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
      };
    }
  }, []);

  return isInView;
};
