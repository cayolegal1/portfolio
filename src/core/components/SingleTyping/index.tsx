"use client";
import { useState, useEffect } from "react";
import { SingleTypingProps } from "./SingleTyping.types";
import styles from "./SingleTyping.module.css";

export default function SingleTyping({
  children,
}: SingleTypingProps): JSX.Element {

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
      const delay = 3000;
      setTimeout(() => {
        setHasAnimated(true);
      }, delay);
  }, []);

  return (
    <span className={!hasAnimated ? styles.single_typing : styles.no_border}>
      {children}
    </span>
  );
}
