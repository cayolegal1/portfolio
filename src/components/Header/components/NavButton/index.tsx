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
        aria-controls="header"
        aria-expanded={isNavBarExpanded}
        aria-label={isNavBarExpanded ? "Cerrar menú" : "Abrir menú"}
        as="button"
        className={styles.button}
        delay="0.2s"
        onClick={toggleMobileNavbar}
        style={{ animationDuration: "0.6s" }}
      >
        <NavHamburguer expanded={isNavBarExpanded} />
      </AnimatedRender>
      <div
        aria-hidden="true"
        className={`
          ${styles.overlay}
          ${isNavBarExpanded && styles.overlay__active}
        `}
        onClick={toggleMobileNavbar}
      />
    </>
  );
}
