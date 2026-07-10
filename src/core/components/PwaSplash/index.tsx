"use client";
import { useEffect, useState, type JSX } from "react";
import { useTranslations } from "next-intl";
import styles from "./PwaSplash.module.css";

/**
 * Pantalla de carga branded que aparece SOLO cuando la web se abre como PWA
 * instalada (modo standalone). Cubre el arranque de la app y hace fade-out
 * apenas el contenido está listo. En el navegador normal nunca se muestra
 * (la oculta el CSS con `@media (display-mode: standalone)`), por lo que no
 * agrega ningún retraso a la visita web habitual.
 */
export default function PwaSplash(): JSX.Element | null {
  const t = useTranslations("PwaSplash");
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone ===
        true;

    // Navegador normal: el CSS ya lo mantiene oculto (display:none), así que
    // no hace falta hacer nada más.
    if (!isStandalone) return;

    // Mostramos el loader al menos MIN_MS para que no "parpadee" en arranques
    // muy rápidos, y lo ocultamos cuando la página terminó de cargar.
    const MIN_MS = 500;
    const start = performance.now();
    let fadeTimer = 0;
    let removeTimer = 0;

    const startLeaving = () => {
      const wait = Math.max(0, MIN_MS - (performance.now() - start));
      fadeTimer = window.setTimeout(() => {
        setLeaving(true);
        removeTimer = window.setTimeout(() => setGone(true), 450);
      }, wait);
    };

    if (document.readyState === "complete") {
      startLeaving();
    } else {
      window.addEventListener("load", startLeaving, { once: true });
    }

    return () => {
      window.removeEventListener("load", startLeaving);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`${styles.splash} ${leaving ? styles.leaving : ""}`}
    >
      <span className={styles.mono}>CL</span>
      <div className={styles.bar}>
        <div className={styles.fill} />
      </div>
      <span className={styles.label}>{t("loading")}</span>
    </div>
  );
}
