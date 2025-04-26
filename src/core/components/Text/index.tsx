import type { ElementType, JSX } from "react";
import TextGradient from "../TextGradient";
import type { TextProps, TextSize } from "./Text.types";
import styles from "./Text.module.css";

export default function Text<T extends ElementType>({
  as: Component = "span",
  centered = true,
  children,
  className = "",
  size = "xl",
  uppercase = false,
  variant = "normal",
  ...props
}: TextProps<T>): JSX.Element {
  const sizeVariant: Record<TextSize, string> = {
    xl: styles.xl,
    title: styles.title,
    subtitle: styles.subtitle,
    text: styles.text_size,
    description: styles.description,
    caption: styles.caption,
  };

  if (variant === "gradient") {
    return (
      <TextGradient
        {...props}
        as={Component}
        className={`${styles.text} ${sizeVariant[size]} ${centered && styles.centered} ${uppercase && styles.uppercase} ${className}`}
      >
        {children}
      </TextGradient>
    );
  }

  return (
    <Component
      {...props}
      className={`${styles.text} ${sizeVariant[size]} ${centered && styles.centered} ${uppercase && styles.uppercase} ${className}`}
    >
      {children}
    </Component>
  );
}
