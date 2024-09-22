import Text from "../Text";
import type { DropdownProps } from "./Dropdown.types";
import styles from "./Dropdown.module.css";
import ExpandIcon from "../Icons/ExpandIcon";

const Dropdown = ({ children, title }: DropdownProps): JSX.Element => {
  return (
    <div className={styles.dropdown_container}>
      <input
        className={styles.dropdown_input}
        type="checkbox"
        id="dropdown"
        name="dropdown"
      />
      <label htmlFor="dropdown" className={styles.label}>
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
      <div className={styles.section_dropdown}>{children}</div>
    </div>
  );
};

export default Dropdown;
