import type { InputProps } from "./Input.types";
import styles from "./Input.module.css";

export default function Input({
  label,
  variant,
  ...props
}: InputProps): JSX.Element {
  return (
    <div className={styles.input_container}>
      {variant === "normal" ? (
        <input required placeholder="" {...props} />
      ) : (
        <textarea required placeholder="" {...props} />
      )}
      <label>{label}</label>
    </div>
  );
}
