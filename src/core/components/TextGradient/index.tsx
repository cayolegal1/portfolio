import type { TextGradientProps } from "./TextGradient.types";
import styles from "./TextGradient.module.css";

export default function TextGradient({children, className = ""}: TextGradientProps): JSX.Element {
  return (
    <span className={`${styles.text_gradient} ${className}`}>{children}</span>
  );
}