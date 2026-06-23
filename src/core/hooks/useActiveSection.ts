import { useEffect, useState } from "react";

// Línea de referencia (desde el tope del viewport) que define qué sección
// se considera "activa": la última cuyo borde superior ya la cruzó.
const ACTIVE_LINE_RATIO = 0.3;

export const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const computeActive = () => {
      const elements = sectionIds
        .map(id => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      if (!elements.length) return;

      // Al llegar al fondo de la página la última sección puede no alcanzar la
      // línea de referencia; en ese caso es la activa.
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) {
        setActiveId(elements[elements.length - 1].id);
        return;
      }

      const line = window.innerHeight * ACTIVE_LINE_RATIO;
      const current = elements.reduce<string>((active, el) => {
        return el.getBoundingClientRect().top <= line ? el.id : active;
      }, elements[0].id);

      setActiveId(current);
    };

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);

    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
    };
    // Los ids de sección son estables; el efecto se engancha una sola vez al montar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeId;
};
