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
  as: Component = "div",
  ...props
}: AnimatedRenderProps): JSX.Element {
  const animations: Record<AnimationRenderType, string> = {
    fadeInLeft: styles.fadeInLeft,
    fadeInDown: styles.fadeInDown,
    bounceInDown: styles.bounceInDown,
  };

  return (
    <Component
      {...props}
      className={`${styles.animation_config} ${animations[animationType]} ${className}`}
      style={{ animationDelay: delay, ...props.style }}
    >
      {children}
    </Component>
  );
}
