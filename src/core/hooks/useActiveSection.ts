import { useState } from "react";

// La sección activa se maneja con estado interno (no se escribe en la URL) para
// evitar que el navegador haga scroll nativo al hash al cargar la página.
// Por defecto se resalta la primera sección (inicio).
export const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState<string | null>(
    sectionIds[0] ?? null,
  );

  return { activeId, selectSection: setActiveId };
};
