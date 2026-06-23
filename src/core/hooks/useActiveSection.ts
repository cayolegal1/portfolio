import { useEffect, useRef, useState } from "react";

// Distancia fija (px) desde el tope del viewport que marca qué sección está
// activa: la última cuyo borde superior ya la cruzó. Se usa un valor fijo (no
// un % del viewport) para que funcione también en pantallas muy altas, donde
// las secciones cortas no llenarían una franja proporcional.
const ACTIVE_OFFSET = 120;

// Tiempo que el click tiene prioridad sobre el scroll-spy, para que el scroll
// suave hacia la sección no cambie el resaltado en el camino.
const CLICK_PRIORITY_MS = 800;

export const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState<string | null>(
    sectionIds[0] ?? null,
  );
  const lockUntil = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const computeActive = () => {
      if (Date.now() < lockUntil.current) return; // prioridad al click reciente

      const elements = sectionIds
        .map(id => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      if (!elements.length) return;

      // Si ya no se puede scrollear más hacia abajo, la última sección es la
      // activa sí o sí (puede no llegar al offset por falta de contenido debajo).
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveId(elements[elements.length - 1].id);
        return;
      }

      const current = elements.reduce<string>(
        (active, el) =>
          el.getBoundingClientRect().top <= ACTIVE_OFFSET ? el.id : active,
        elements[0].id,
      );
      setActiveId(current);
    };

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);
    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
    };
    // sectionIds es estable; el listener se engancha una vez al montar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Click: prioridad inmediata + lock para que el scroll-spy no interfiera
  // durante el scroll suave.
  const selectSection = (id: string) => {
    lockUntil.current = Date.now() + CLICK_PRIORITY_MS;
    setActiveId(id);
  };

  return { activeId, selectSection };
};
