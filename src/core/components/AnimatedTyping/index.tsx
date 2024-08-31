import type { AnimatedTypingProps } from "./AnimatedTyping.types";
import styles from "./AnimatedTyping.module.css";

export default function AnimatedTyping({ children }: AnimatedTypingProps): JSX.Element {
  return (
    <span className={styles.typing}>{children}</span>
  );
}