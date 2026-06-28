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
    <div className={styles.stage}>
      <button
        aria-label="Ampliar captura del proyecto"
        className={styles.device}
        onClick={open}
        type="button"
      >
        <span aria-hidden="true" className={styles.notch} />
        <span className={styles.screen}>
          <Image
            alt="Captura del proyecto"
            className={styles.image}
            fill
            sizes="(max-width: 550px) 60vw, 200px"
            src={src as string}
          />
        </span>
      </button>

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
              alt="Captura del proyecto"
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
    </div>
  );
}
