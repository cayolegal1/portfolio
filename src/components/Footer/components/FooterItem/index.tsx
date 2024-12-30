import Text from "@/core/components/Text";
import type { FooterItemProps } from "./FooterItem.types";
import styles from "./FooterItem.module.css";

export default function FooterItem({
  children,
  href,
  icon,
}: FooterItemProps): JSX.Element {
  return (
    <a target="_blank" href={href}>
      <div className={styles.footer_item}>
        {icon}
        <Text size="caption">{children}</Text>
      </div>
    </a>
  );
}
