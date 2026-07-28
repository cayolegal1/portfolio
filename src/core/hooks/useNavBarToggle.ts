import { useState, useEffect } from "react";
import { MOBILE_BREAKPOINT } from "../data/global";

export const useNavBarToggle = () => {
  const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);

  const toggleMobileNavbar = () => {
    const element = document.getElementById("header");
    if (element) {
      element.classList.toggle("navbar__hidden");
      document.body.classList.toggle("menu_open");
      setIsNavBarExpanded(prev => !prev);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined" || !document) return;

    const listener = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT && isNavBarExpanded) {
        toggleMobileNavbar();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isNavBarExpanded) {
        toggleMobileNavbar();
      }
    };

    window.addEventListener("resize", listener);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("resize", listener);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isNavBarExpanded]);

  return {
    toggleMobileNavbar,
    isNavBarExpanded,
    setIsNavBarExpanded,
  };
};
