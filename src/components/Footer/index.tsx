import Section from "@/core/components/Section";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import FooterItem from "./components/FooterItem";
import data from "@/core/data/user-info.json";
import LocationIcon from "@/core/components/Icons/LocationIcon";
import EmailIcon from "@/core/components/Icons/EmailIcon";
import styles from "./Footer.module.css";
import { SECTIONS } from "@/core/data/global";

export default function Footer() {
  return (
    <Section withSeparator={false} id={SECTIONS.FOOTER}>
      <AnimatedInView
        animationType="slideInUp"
        className={styles.footer_section}
        id={SECTIONS.FOOTER}
      >
        <FooterItem href={data.location_url} icon={<LocationIcon />}>
          {data.location}
        </FooterItem>
        <FooterItem href={`mailto:${data.email}`} icon={<EmailIcon />}>
          {data.email}
        </FooterItem>
      </AnimatedInView>
    </Section>
  );
}
