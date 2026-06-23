"use client";
import { useEffect, useRef, useState, type JSX } from "react";
import Image from "next/image";
import styles from "./ProjectImage.module.css";
import type { ProjectImageProps } from "./ProjectImage.types";

export default function ProjectImage({ src }: ProjectImageProps): JSX.Element {
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
      <Image
        src={src as string}
        alt="project_image"
        width={1280}
        height={720}
        sizes="(max-width: 550px) 100vw, 35rem"
        onClick={() => setIsBigPictureMode(prev => !prev)}
        ref={imgRef}
        className={`${isBigPictureMode ? styles.big_picture : styles.image}`.trim()}
      />

      <div className={isBigPictureMode ? styles.overlay : ""} />
    </>
  );
}
