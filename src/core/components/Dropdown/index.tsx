"use client";
import Text from "../Text";
import ExpandIcon from "../Icons/ExpandIcon";
import type { DropdownProps } from "./Dropdown.types";
import styles from "./Dropdown.module.css";
import { useDropdownClick } from "@/core/hooks/useDropdownClick";

const checkboxId = "checkbox_dropdown";
const containerId = "dropdown_container";

const Dropdown = ({ children, title }: DropdownProps): JSX.Element => {
  useDropdownClick(checkboxId, containerId);
  return (
    <div className={styles.dropdown_container} id={containerId}>
      <input
        className={styles.dropdown_input}
        name={checkboxId}
        id={checkboxId}
        type="checkbox"
      />
      <div className={styles.label_container}>
        <Text
          as="label"
          className={styles.label}
          htmlFor={checkboxId}
          inHover
          size="description"
          variant="gradient"
        >
          {title}
        </Text>
        <ExpandIcon
          properties={{
            width: "23px",
            height: "23px",
            viewBox: "0 -960 960 960",
          }}
          gradientId="expand_contact"
          color="white"
        />
      </div>
      <div className={styles.section_dropdown}>{children}</div>
    </div>
  );
};

export default Dropdown;
