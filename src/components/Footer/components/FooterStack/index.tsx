import Image from "next/image";
import { useTranslations } from "next-intl";
import Text from "@/core/components/Text";
import { technologies } from "@/core/data/technologies";
import { TECH } from "@/core/data/tech-name";
import styles from "./FooterStack.module.css";

export default function FooterStack() {
  const translate = useTranslations("Footer");
  const tech = technologies[TECH.NEXT];
  return (
    <div className={styles.footer_stack}>
      <Text size="caption">{translate("footer_stack")}</Text>
      <Image
        alt={tech.name}
        height={30}
        loading="lazy"
        src={tech.logo_path}
        title={tech.name}
        unoptimized
        width={30}
      />
    </div>
  );
}
