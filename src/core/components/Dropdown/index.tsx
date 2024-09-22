import Text from "../Text";
import type { DropdownProps } from "./Dropdown.types";
import styles from "./Dropdown.module.css";

const Dropdown = ({ children, title }: DropdownProps): JSX.Element => {
  return (
    <div className={styles.dropdown_container}>
      <input
        className={styles.dropdown_input}
        type="checkbox"
        id="dropdown"
        name="dropdown"
      />
      <label htmlFor="dropdown">
        <Text variant="gradient" inHover>{title}</Text>
      </label>
      <div className={styles.section_dropdown}>{children}</div>
    </div>
  );
};

export default Dropdown;
