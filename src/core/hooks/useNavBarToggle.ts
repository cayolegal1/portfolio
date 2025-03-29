import { useState } from "react";

export const useNavBarToggle = () => {
  const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);
  const toggleMobileNavbar = () => {
    const element = document.getElementById("header");
    if (element) {
      element.classList.toggle("navbar__hidden");
      setIsNavBarExpanded(prev => !prev);
    }
  };

  return {
    toggleMobileNavbar,
    isNavBarExpanded,
    setIsNavBarExpanded,
  };
};
