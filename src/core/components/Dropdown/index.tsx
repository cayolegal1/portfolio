"use client";
import { useEffect, useId, useRef, useState, type JSX } from "react";
import Text from "../Text";
import ExpandGradientIcon from "../Icons/Gradient/ExpandGradientIcon";
import type { DropdownProps } from "./Dropdown.types";
import styles from "./Dropdown.module.css";

const Dropdown = ({ children, title, trigger }: DropdownProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      className={styles.dropdown_container}
      data-open={open}
      ref={containerRef}
    >
      <button
        aria-controls={panelId}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={title}
        className={styles.label_container}
        onClick={() => setOpen(prev => !prev)}
        type="button"
      >
        {trigger ? (
          <span className={styles.label}>{trigger}</span>
        ) : (
          <Text
            as="span"
            className={styles.label}
            inHover
            size="description"
            variant="gradient"
          >
            {title}
          </Text>
        )}
        <ExpandGradientIcon
          properties={{
            width: "23px",
            height: "23px",
            viewBox: "0 -960 960 960",
          }}
          gradientId="expand_contact"
          color="white"
        />
      </button>
      <div className={styles.section_dropdown} id={panelId} role="menu">
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
