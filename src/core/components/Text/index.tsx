import TextGradient from "../TextGradient";
import { TextProps } from "./Text.types";
import styles from "./Text.module.css";

export default function Text({
  as: Component = "span",
  centered = true,
  children,
  className = "",
  variant = "normal",
  ...props
}: TextProps): JSX.Element {
  if (variant === "gradient") {
    return (
      <TextGradient
        {...props}
        as={Component}
        className={`${styles.text} ${centered && styles.centered} ${className}`}
      >
        {children}
      </TextGradient>
    );
  }

  return (
    <Component
      {...props}
      className={`${styles.text} ${centered && styles.centered} ${className}`}
    >
      {children}
    </Component>
  );
}
