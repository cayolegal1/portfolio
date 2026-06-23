"use client";
import { useCallback, useEffect, useState, type JSX } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./ProjectImage.module.css";
import type { ProjectImageProps } from "./ProjectImage.types";

const ANIMATION_MS = 300;

export default function ProjectImage({ src }: ProjectImageProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false); // montado en el DOM
  const [isShown, setIsShown] = useState(false); // estado visible (animación)

  const open = () => {
    setIsOpen(true);
    // Pequeño delay para que pinte el estado inicial (opacity 0) antes de
    // animar. setTimeout (a diferencia de rAF) también dispara en pestañas
    // en segundo plano.
    window.setTimeout(() => setIsShown(true), 20);
  };

  const close = useCallback(() => {
    setIsShown(false);
    window.setTimeout(() => setIsOpen(false), ANIMATION_MS);
  }, []);

  // Cerrar el fullscreen con Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <>
      <Image
        alt="project_image"
        className={styles.image}
        height={720}
        onClick={open}
        sizes="(max-width: 550px) 100vw, 35rem"
        src={src as string}
        width={1280}
      />

      {isOpen &&
        createPortal(
          <div
            aria-label="Cerrar imagen"
            className={`${styles.overlay} ${isShown ? styles.overlay_visible : ""}`}
            onClick={close}
            role="button"
            tabIndex={-1}
          >
            <Image
              alt="project_image"
              className={`${styles.big_picture} ${isShown ? styles.big_picture_visible : ""}`}
              height={720}
              loading="eager"
              sizes="(min-width: 640px) 600px, 95vw"
              src={src as string}
              width={1280}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
