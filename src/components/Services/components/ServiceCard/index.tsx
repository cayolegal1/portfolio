import { type JSX, type ReactNode } from "react";
import Text from "@/core/components/Text";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps): JSX.Element {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <Text as="h3" centered={false} className={styles.title} size="subtitle">
        {title}
      </Text>

      <Text
        as="p"
        centered={false}
        className={styles.description}
        size="description"
        uppercase={false}
      >
        {description}
      </Text>
    </article>
  );
}
