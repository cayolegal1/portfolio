import { useEffect } from "react";

export const useDropdownClick = (inputId: string, containerId: string) => {
  useEffect(() => {
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    const container = document.getElementById(containerId);

    if (input && container) {
      const listener = (event: MouseEvent) => {
        const isClickedInside = container.contains(event.target as Node);
        if (input.checked && !isClickedInside) {
          input.checked = false;
        } else if (isClickedInside) {
          input.checked = !input.checked;
        }
      };

      document.addEventListener("click", listener);

      return () => {
        document.removeEventListener("click", listener);
      };
    }
  }, []);
};
