import Section from "@/core/components/Section";
import FooterItem from "./components/FooterItem";
import data from "@/core/data/user-info.json";
import LocationIcon from "@/core/components/Icons/LocationIcon";
import EmailIcon from "@/core/components/Icons/EmailIcon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Section withSeparator={false}>
      <div className={styles.footer_section}>
        <FooterItem href={data.location_url} icon={<LocationIcon />}>
          {data.location}
        </FooterItem>
        <FooterItem href={`mailto:${data.email}`} icon={<EmailIcon />}>
          {data.email}
        </FooterItem>
      </div>
    </Section>
  );
}
