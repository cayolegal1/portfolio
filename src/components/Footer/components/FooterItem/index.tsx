import Text from "@/core/components/Text";
import ScalableItem from "@/core/components/Animated/ScalableItem";
import type { FooterItemProps } from "./FooterItem.types";
import styles from "./FooterItem.module.css";

export default function FooterItem({
  children,
  href,
  icon,
}: FooterItemProps): JSX.Element {
  return (
    <ScalableItem>
      <a target="_blank" href={href} rel="noopener noreferrer">
        <div className={styles.footer_item}>
          {icon}
          <Text size="caption" variant="gradient" inHover>
            {children}
          </Text>
        </div>
      </a>
    </ScalableItem>
  );
}
