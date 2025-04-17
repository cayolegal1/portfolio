import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    };

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => handleIntersect(entry),
        {
          root: null,
          rootMargin: "-20% 0px -75% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return activeId;
};
