"use client";
import React from "react";

import { ReactTyped, ReactTypedProps } from "react-typed";
import styles from "./AnimatedTyping.module.css";

export default function AnimatedTyping({
  strings,
  className = "",
  typeSpeed = 40,
  ...props
}: ReactTypedProps): JSX.Element {
  return (
    <ReactTyped
      {...props}
      className={`${styles.cursor} ${className}`}
      showCursor={false}
      strings={strings}
      style={{ whiteSpace: "normal" }}
      typeSpeed={typeSpeed}
    />
  );
}
