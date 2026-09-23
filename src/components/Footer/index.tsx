import { getTranslations } from "next-intl/server";

// components
import Section from "@/core/components/Section";
import Text from "@/core/components/Text";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import FooterItem from "./components/FooterItem";
import FooterNav from "./components/FooterNav";
import FooterContact from "./components/FooterContact";
import Copyright from "./components/Copyright";
import FooterStack from "./components/FooterStack";

// icons
import GitHubIcon from "@/core/components/Icons/GithubIcon";
import LinkedinIcon from "@/core/components/Icons/LinkedinIcon";

// data
import data from "@/core/data/user-info.json";
import { SECTIONS } from "@/core/data/global";

import styles from "./Footer.module.css";

const personalData = [
  { content: "GitHub", href: data.github_url, icon: <GitHubIcon /> },
  { content: "LinkedIn", href: data.linkedin_url, icon: <LinkedinIcon /> },
];

export default async function Footer() {
  const translate = await getTranslations("Footer");

  return (
    <Section as="footer" className={styles.footer} id={SECTIONS.FOOTER}>
      <AnimatedInView
        animationType="slideInUp"
        className={styles.footer_section}
        id={SECTIONS.FOOTER}
        observerConfig={{ threshold: 0.1 }}
        useId={false}
      >
        <div className={styles.footer_grid}>
          <div className={styles.footer_brand}>
            <Text as="p" centered={false} size="subtitle" variant="gradient">
              {data.name}
            </Text>
            <Text
              as="p"
              centered={false}
              className={styles.footer_tagline}
              size="caption"
            >
              {translate("tagline")}
            </Text>
            <div className={styles.footer_items_container}>
              {personalData.map(info => (
                <FooterItem key={info.href} href={info.href} icon={info.icon}>
                  {info.content}
                </FooterItem>
              ))}
            </div>
          </div>
          <FooterNav title={translate("nav_title")} />
          <FooterContact title={translate("contact_title")} />
        </div>
        <div className={styles.footer_bottom}>
          <Copyright />
          <FooterStack />
        </div>
      </AnimatedInView>
    </Section>
  );
}
