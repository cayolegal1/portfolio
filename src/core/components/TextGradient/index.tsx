import type { TextGradientProps } from "./TextGradient.types";
import styles from "./TextGradient.module.css";

export default function TextGradient({
  children,
  className = "",
  inHover = false,
}: TextGradientProps): JSX.Element {
  return (
    <span
      className={`${styles.text_gradient_config} ${inHover ? styles.in_hover : styles.text_gradient} ${className}`}
    >
      {children}
    </span>
  );
}
