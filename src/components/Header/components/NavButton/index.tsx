"use client";
import React from "react";
import { useState, useCallback } from "react";
import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import MenuIcon from "@/core/components/Icons/MenuIcon";
import CloseIcon from "@/core/components/Icons/CloseIcon";
import styles from "./NavButton.module.css";

export default function NavButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = useCallback(() => {
    const element = document.getElementById("header");
    if (element) {
      if (element.classList.contains("navbar__hidden")) {
        element.classList.remove("navbar__hidden");
      } else {
        element.classList.add("navbar__hidden");
      }
    }
  }, []);

  return (
    <>
      <AnimatedRender
        animationType="fadeInDown"
        aria-label={isExpanded ? "Cerrar menú" : "Abrir menú"}
        as="button"
        className={styles.button}
        delay="2.8s"
        onClick={() => {
          setIsExpanded(prev => !prev);
          handleClick();
        }}
      >
        {isExpanded ? <CloseIcon /> : <MenuIcon />}
      </AnimatedRender>
      <div
        className={`
          ${styles.overlay} 
          ${isExpanded && styles.overlay__active}
        `}
        onClick={() => {
          setIsExpanded(prev => !prev);
          handleClick();
        }}
      />
    </>
  );
}
