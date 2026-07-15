import { type JSX } from "react";
import { useTranslations } from "next-intl";
import AnimatedServiceCard from "../AnimatedServiceCard";
import ServiceCard from "../ServiceCard";
import { serviceIcons } from "../../data/serviceIcons";
import styles from "./ServiceList.module.css";

type ServiceItem = {
  title: string;
  description: string;
};

export default function ServiceList(): JSX.Element {
  const translate = useTranslations("Services");
  const items = translate.raw("items") as ServiceItem[];

  return (
    <div className={styles.grid}>
      {items.map((item, index) => {
        const id = `service_${index}`;
        // Escalonado por columna (3 columnas) para un reveal en cascada.
        const delay = `${(index % 3) * 0.12}s`;
        return (
          <AnimatedServiceCard delay={delay} id={id} key={id}>
            <ServiceCard
              description={item.description}
              icon={serviceIcons[index]}
              title={item.title}
            />
          </AnimatedServiceCard>
        );
      })}
    </div>
  );
}
