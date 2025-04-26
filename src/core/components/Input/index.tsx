import type { InputProps } from "./Input.types";
import styles from "./Input.module.css";

import type { JSX } from "react";

export default function Input({
  label,
  variant,
  ...props
}: InputProps): JSX.Element {
  return (
    <div className={styles.input_container}>
      {variant === "normal" ? (
        <input id={props.name} placeholder="" required  {...props} />
      ) : (
        <textarea id={props.name} placeholder="" required  {...props} />
      )}
      <label htmlFor={props.name}>{label}</label>
    </div>
  );
}
