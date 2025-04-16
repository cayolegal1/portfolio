import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 550;

export const useNavBarToggle = () => {
  const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);

  const toggleMobileNavbar = () => {
    const element = document.getElementById("header");
    if (element) {
      element.classList.toggle("navbar__hidden");
      setIsNavBarExpanded(prev => !prev);
    }
  };

  useEffect(() => {
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
