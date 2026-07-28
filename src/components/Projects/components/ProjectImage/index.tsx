"use client";
import { useCallback, useEffect, useRef, useState, type JSX } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./ProjectImage.module.css";
import type { ProjectImageProps } from "./ProjectImage.types";

const ANIMATION_MS = 300;

export default function ProjectImage({
  src,
  alt,
}: ProjectImageProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false); // montado en el DOM
  const [isShown, setIsShown] = useState(false); // estado visible (animación)
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const label = (alt as string) || "Imagen del proyecto";

  const open = () => {
    setIsOpen(true);
    // Pequeño delay para que pinte el estado inicial (opacity 0) antes de
    // animar. setTimeout (a diferencia de rAF) también dispara en pestañas
    // en segundo plano.
    window.setTimeout(() => setIsShown(true), 20);
  };

  const close = useCallback(() => {
    setIsShown(false);
    window.setTimeout(() => {
      setIsOpen(false);
      // Devolvemos el foco a la miniatura que abrió el visor.
      triggerRef.current?.focus();
    }, ANIMATION_MS);
  }, []);

  // Al abrir, enfocamos el botón de cerrar. Escape cierra el visor.
  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <>
      <button
        aria-label={`${label} (ampliar)`}
        className={styles.trigger}
        onClick={open}
        ref={triggerRef}
        type="button"
      >
        <Image
          alt={label}
          className={styles.image}
          height={720}
          sizes="(max-width: 550px) 100vw, 35rem"
          src={src as string}
          width={1280}
        />
      </button>

      {isOpen &&
        createPortal(
          <div
            aria-label={label}
            aria-modal="true"
            className={`${styles.overlay} ${isShown ? styles.overlay_visible : ""}`}
            onClick={close}
            role="dialog"
          >
            <button
              aria-label="Cerrar imagen"
              className={styles.close}
              onClick={close}
              ref={closeRef}
              type="button"
            >
              &times;
            </button>
            <Image
              alt={label}
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
