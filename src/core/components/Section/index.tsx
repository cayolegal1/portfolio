import type { SectionProps } from "./Section.types";
import styles from "./Section.module.css";

export default function Section({
  children,
  className = "",
  withSeparator,
  ...props
}: SectionProps): JSX.Element {
  return (
    <section {...props} className={`${styles.section_container} ${className}`}>
      {withSeparator && <div className={styles.separator} />}
      {children}
    </section>
  );
}
