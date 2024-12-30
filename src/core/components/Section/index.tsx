import type { SectionProps } from "./Section.types";
import styles from "./Section.module.css";

export default function Section({
  as: Component = "section",
  children,
  className = "",
  withSeparator = true,
  ...props
}: SectionProps): JSX.Element {
  return (
    <Component
      {...props}
      className={`${styles.section_container} ${className}`}
    >
      {withSeparator && <div className={styles.separator} />}
      {children}
    </Component>
  );
}
