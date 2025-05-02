"use client";
import React from "react";
import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import NavHamburguer from "../NavHamburguer";
import { useNavBarToggle } from "@/core/hooks/useNavBarToggle";
import styles from "./NavButton.module.css";

export default function NavButton() {
  const { toggleMobileNavbar, isNavBarExpanded } = useNavBarToggle();

  return (
    <>
      <AnimatedRender
        animationType="fadeInDown"
        aria-label={isNavBarExpanded ? "Cerrar menú" : "Abrir menú"}
        aria-roledescription="Botón para abrir o cerrar menú de navegación"
        as="button"
        className={styles.button}
        delay="2.8s"
        onClick={toggleMobileNavbar}
      >
        <NavHamburguer expanded={isNavBarExpanded} />
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
