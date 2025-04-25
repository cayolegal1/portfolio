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

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [isNavBarExpanded]);

  return {
    toggleMobileNavbar,
    isNavBarExpanded,
    setIsNavBarExpanded,
  };
};
