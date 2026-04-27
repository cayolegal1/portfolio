import Image from "next/image";
import { useTranslations } from "next-intl";
import Text from "@/core/components/Text";
import { technologies } from "@/core/data/technologies";
import { TECH } from "@/core/data/tech-name";
import styles from "./FooterStack.module.css";

export default function FooterStack() {
  const translate = useTranslations("Footer");
  const next = technologies[TECH.NEXT];
  const css = technologies[TECH.CSS]
  return (
    <div className={styles.footer_stack}>
      <Text size="caption">{translate("footer_stack")}</Text>
      <Image
        alt={next.name}
        height={30}
        loading="lazy"
        src={next.logo_path}
        title={next.name}
        unoptimized
        width={30}
      />
      <Image
        alt={css.name}
        height={30}
        loading="lazy"
        src={css.logo_path}
        title={css.name}
        unoptimized
        width={30}
      />
    </div>
  );
}
