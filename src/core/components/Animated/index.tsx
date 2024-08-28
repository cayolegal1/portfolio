import type { AnimatedProps, AnimationType } from "./Animated.types";
import styles from "./Animated.module.css";

export default function Animated({
  children,
  delay = "0s",
  animationType = "fadeInLeft",
  ...props
}: AnimatedProps): JSX.Element {
    
  const animations: Record<AnimationType, string> = {
    fadeInLeft: styles.fadeInLeft,
  };

  return (
    <div
      {...props}
      className={`${styles.animation_config} ${animations[animationType]} ${props.className}`}
      style={{ animationDelay: delay, ...props.style }}
    >
      {children}
    </div>
  );
}