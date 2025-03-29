"use client";
import React from "react";
import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import MenuIcon from "@/core/components/Icons/MenuIcon";
import CloseIcon from "@/core/components/Icons/CloseIcon";
import { useNavBarToggle } from "@/core/hooks/useNavBarToggle";
import styles from "./NavButton.module.css";

export default function NavButton() {
  const { toggleMobileNavbar, isNavBarExpanded } = useNavBarToggle();

  return (
    <>
      <AnimatedRender
        animationType="fadeInDown"
        aria-label={isNavBarExpanded ? "Cerrar menú" : "Abrir menú"}
        as="button"
        className={styles.button}
        delay="2.8s"
        onClick={toggleMobileNavbar}
      >
        {isNavBarExpanded ? <CloseIcon /> : <MenuIcon />}
      </AnimatedRender>
      <div
        className={`
          ${styles.overlay} 
          ${isNavBarExpanded && styles.overlay__active}
        `}
        onClick={toggleMobileNavbar}
      />
    </>
  );
}
