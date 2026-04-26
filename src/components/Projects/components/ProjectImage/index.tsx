"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ProjectImage.module.css";
import type { ProjectImageProps } from "./ProjectImage.types";

export default function ProjectImage({ ...props }: ProjectImageProps) {
  const [isBigPictureMode, setIsBigPictureMode] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!imgRef.current) return;

      if (!imgRef.current.contains(e.target as Node)) {
        setIsBigPictureMode(false);
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
        onClick={() => setIsBigPictureMode(prev => !prev)}
        className={`${styles.image} ${
          isBigPictureMode ? styles.big_picture : ""
        }`.trim()}
      />

      <div className={isBigPictureMode ? styles.overlay : ""} />
    </>
  );
}
