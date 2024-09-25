import { useEffect } from "react";

export const useDropdownClick = (
  inputId: string,
  contentId: string,
  callback: Function,
) => {
  useEffect(() => {
    const input = document.getElementById(inputId);
    const dropdownContent = document.getElementById(contentId);
    
    if (input && dropdownContent) {
      const listener = (event: MouseEvent) => {
        if (!dropdownContent.contains(event.target as Node)) {
          callback(input);
        }
      };

      document.addEventListener("click", listener);
      return () => {
        document.removeEventListener("click", listener);
      };
    }
  }, []);
};
