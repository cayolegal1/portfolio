"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ProjectImage.module.css";
import type { ProjectImageProps } from "./ProjectImage.types";

export default function ProjectImage({ ...props }: ProjectImageProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!imgRef.current) return;

      if (!imgRef.current.contains(e.target as Node)) {
        setIsFullScreen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <img
        {...props}
        ref={imgRef}
        loading="lazy"
        onClick={() => setIsFullScreen(prev => !prev)}
        className={`${styles.image} ${
          isFullScreen ? styles["full-screen"] : ""
        }`}
      />

      <div className={isFullScreen ? styles.overlay : ""} />
    </>
  );
}
