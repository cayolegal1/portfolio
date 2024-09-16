import { useState, useEffect } from "react";

export const useInView = (href: string) => {
  const [isInView, setIsInView] = useState(false);

  const observe = (section: HTMLElement) => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      setIsInView(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: [0.5, 1.0],
    });

    observer.observe(section);

    return observer;
  };

  const onDocVisibilityChange = (
    observer: IntersectionObserver,
    section: HTMLElement,
  ) => {
    if (document.visibilityState === "hidden") {
      observer.disconnect();
    } else {
      observe(section);
    }
  };

  useEffect(() => {
    if (!document) return;
    const section = document.getElementById(href);
    if (section) {
      const observer = observe(section);
      document.onvisibilitychange = () => {
        onDocVisibilityChange(observer, section);
      };

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return isInView;
};
