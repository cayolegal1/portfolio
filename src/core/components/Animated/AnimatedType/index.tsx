"use client";
import  { type JSX } from "react";
import { ReactTyped, type ReactTypedProps } from "react-typed";
import styles from "./AnimatedType.module.css";

export default function AnimatedType({
  strings,
  className = "",
  typeSpeed = 45,
  ...props
}: ReactTypedProps): JSX.Element {
  return (
    <ReactTyped
      {...props}
      className={`${styles.cursor} ${className}`}
      showCursor={true}
      strings={strings}
      typeSpeed={typeSpeed}
    />
  );
}
