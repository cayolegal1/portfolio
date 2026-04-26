"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ProjectImage.module.css";
import type { ProjectImageProps } from "./ProjectImage.types";

export default function ProjectImage({ ...props }: ProjectImageProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const toggleFullScreen = () => {
    if (!imgRef.current) {
      return;
    }

    if (imgRef.current.classList.contains(styles["full-screen"])) {
      setIsFullScreen(false);
      imgRef.current.classList.remove(styles["full-screen"]);
    } else {
      imgRef.current.classList.add(styles["full-screen"]);
      setIsFullScreen(true);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!imgRef.current) return;

      const isWithFullScreenClass = imgRef.current.classList.contains(
        styles["full-screen"],
      );

      if (isFullScreen) {
        setIsFullScreen(false);
      }

      if (!isWithFullScreenClass) return;

      if (imgRef.current.contains(e.target as Node)) return;
      imgRef.current.classList.remove(styles["full-screen"]);
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isFullScreen]);

  return (
    <>
      <img
        {...props}
        ref={imgRef}
        loading="lazy"
        onClick={toggleFullScreen}
        className={styles.image}
      />

      <div className={isFullScreen ? styles.overlay : ""} />
    </>
  );
}
