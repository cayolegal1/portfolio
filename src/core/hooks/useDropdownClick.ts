import { useEffect } from "react";

export const useDropdownClick = (inputId: string, contentId: string) => {
  useEffect(() => {
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    const dropdownContent = document.getElementById(contentId);

    if (input && dropdownContent) {
      const listener = (event: MouseEvent) => {
        if (
          input.checked &&
          !input.contains(event.target as Node) &&
          !dropdownContent.contains(event.target as Node)
        ) {
          input.checked = false;
        } else {
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
