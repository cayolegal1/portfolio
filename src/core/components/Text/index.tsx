import TextGradient from "../TextGradient";
import { TextProps } from "./Text.types";
import styles from "./Text.module.css";

export default function Text({
  as: Component = "span",
  centered = true,
  children,
  variant = "normal",
}: TextProps): JSX.Element {
  if (variant === "gradient") {
    return (
      <TextGradient as={Component} className={`${styles.text} ${centered && styles.centered}`}>
        {children}
      </TextGradient>
    );
  }

  return (
    <Component className={`${styles.text} ${centered && styles.centered}`}>
      {children}
    </Component>
  );
}
