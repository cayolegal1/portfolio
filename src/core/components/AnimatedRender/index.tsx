import type {
  AnimatedRenderProps,
  AnimationRenderType,
} from "./AnimatedRender.types";
import styles from "./AnimatedRender.module.css";

export default function AnimatedRender({
  children,
  className = "",
  delay = "0s",
  animationType = "fadeInLeft",
  ...props
}: AnimatedRenderProps): JSX.Element {
  const animations: Record<AnimationRenderType, string> = {
    fadeInLeft: styles.fadeInLeft,
    bounceInDown: styles.bounceInDown,
  };

  return (
    <div
      {...props}
      className={`${styles.animation_config} ${animations[animationType]} ${className}`}
      style={{ animationDelay: delay, ...props.style }}
    >
      {children}
    </div>
  );
}
