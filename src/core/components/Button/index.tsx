import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";;

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
}
