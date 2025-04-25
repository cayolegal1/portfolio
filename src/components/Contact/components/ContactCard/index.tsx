import Text from "@/core/components/Text";
import styles from "./ContactCard.module.css";
import { ContactCardProps } from "./ContactCard.types";

export default function ContactCard({
  icon,
  text,
  title,
  href,
}: ContactCardProps): JSX.Element {
  return (
    <a className={styles.card_container} href={href} target="_blank">
      <div className={styles.card_container_icon}>{icon}</div>
      <div>
        <Text size="description" as="p" uppercase centered={false}>
          {title}
        </Text>
        <Text size="caption" centered={false}>
          {text}
        </Text>
      </div>
    </a>
  );
}
