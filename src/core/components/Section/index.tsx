import type { SectionProps } from "./Section.types";
import styles from "./Section.module.css";

export default function Section({
  children,
  className = "",
  ...props
}: SectionProps): JSX.Element {
  return (
    <section {...props} className={`${styles.container} ${className}`}>
      {children}
    </section>
  );
}
