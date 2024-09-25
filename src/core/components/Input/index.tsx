import type { InputProps } from "./Input.types";
import styles from "./Input.module.css";

export default function Input({ label, ...props }: InputProps): JSX.Element {
  return (
    <div className={styles.input_container}>
      <input required {...props} />
      <label>{label}</label>
    </div>
  );
}
