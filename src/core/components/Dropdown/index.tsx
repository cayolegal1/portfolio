"use client";
import Text from "../Text";
import ExpandIcon from "../Icons/ExpandIcon";
import { useDropdownClick } from "@/core/hooks/useDropdownClick";
import type { DropdownProps } from "./Dropdown.types";
import styles from "./Dropdown.module.css";

const checkboxId = "checkbox_dropdown";
const contentId = "dropdown";

const Dropdown = ({ children, title }: DropdownProps): JSX.Element => {

  useDropdownClick(
    checkboxId,
    contentId,
    (checkbox: HTMLInputElement) => {
      checkbox.checked = !checkbox.checked;
    },
  );

  return (
    <div className={styles.dropdown_container}>
      <input
        className={styles.dropdown_input}
        id={checkboxId}
        name={checkboxId}
        type="checkbox"
      />

      <label htmlFor={checkboxId} className={styles.label}>
        <Text variant="gradient" inHover>
          {title}
        </Text>
        <ExpandIcon
          properties={{
            width: "23px",
            height: "23px",
            viewBox: "0 -960 960 960",
          }}
          color="white"
        />
      </label>
      <div className={styles.section_dropdown} id={contentId}>{children}</div>
    </div>
  );
};

export default Dropdown;
