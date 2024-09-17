"use client";
import { useState } from "react";
import AnimatedRender from "@/core/components/AnimatedRender";
import MenuIcon from "@/core/components/Icons/MenuIcon";
import CloseIcon from "@/core/components/Icons/CloseIcon";
import styles from "./NavButton.module.css";

export default function NavButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(prev => !prev);
    const element = document.getElementById("header");
    if (element) {
      if (element.classList.contains("navbar__hidden")) {
        element.classList.remove("navbar__hidden");
      } else {
        element.classList.add("navbar__hidden");
      }
    }
  };

  return (
    <>
      <AnimatedRender
        animationType="fadeInDown"
        as="button"
        className={styles.button}
        delay="2.8s"
        id="header-btn"
        onClick={handleClick}
      >
        {isExpanded ? <CloseIcon /> : <MenuIcon />}
      </AnimatedRender>
      <div
        className={`
          ${styles.overlay} 
          ${isExpanded && styles.overlay__active}
        `}
        onClick={handleClick}
      />
    </>
  );
}
