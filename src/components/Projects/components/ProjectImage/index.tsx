"use client";
import { useEffect, useRef, useState, type JSX } from "react";
import styles from "./ProjectImage.module.css";
import type { ProjectImageProps } from "./ProjectImage.types";

export default function ProjectImage({
  ...props
}: ProjectImageProps): JSX.Element {
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
        alt="project_image"
        loading="lazy"
        onClick={() => setIsBigPictureMode(prev => !prev)}
        ref={imgRef}
        className={`${isBigPictureMode ? styles.big_picture : styles.image}`.trim()}
      />

      <div className={isBigPictureMode ? styles.overlay : ""} />
    </>
  );
}
