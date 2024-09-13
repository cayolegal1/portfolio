import type { TextGradientProps } from "./TextGradient.types";
import styles from "./TextGradient.module.css";

export default function TextGradient({
  as: Component = "span",
  children,
  className = "",
  ellipsis = false,
  inHover = false,
  ...props
}: TextGradientProps): JSX.Element {
  return (
    <Component
      {...props}
      className={`
        ${styles.text_gradient_config} 
        ${ellipsis && styles.ellipsis} 
        ${inHover ? styles.in_hover : styles.text_gradient} 
        ${className}
      `}
    >
      {children}
    </Component>
  );
}
