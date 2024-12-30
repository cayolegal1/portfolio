// components
import Section from "@/core/components/Section";
import AnimatedInView from "@/core/components/Animated/AnimatedInView";
import FooterItem from "./components/FooterItem";
import Copyright from "./components/Copyright";

// icons
import LocationIcon from "@/core/components/Icons/LocationIcon";
import EmailIcon from "@/core/components/Icons/EmailIcon";
import GitHubIcon from "@/core/components/Icons/GithubIcon";
import TwitterIcon from "@/core/components/Icons/TwitterIcon";
import LinkedinIcon from "@/core/components/Icons/LinkedinIcon";

// data
import data from "@/core/data/user-info.json";
import { SECTIONS } from "@/core/data/global";

import styles from "./Footer.module.css";

const personalData = [
  { content: data.github_user, href: data.github_url, icon: <GitHubIcon /> },
  { content: data.name, href: data.linkedin_url, icon: <LinkedinIcon /> },
  { content: data.twitter_user, href: data.twitter_url, icon: <TwitterIcon /> },
  { content: data.location, href: data.location_url, icon: <LocationIcon /> },
  { content: data.email, href: `mailto:${data.email}`, icon: <EmailIcon /> },
];

export default function Footer() {
  return (
    <Section
      as="footer"
      className={styles.footer}
      id={SECTIONS.FOOTER}
      withSeparator={false}
    >
      <AnimatedInView
        animationType="slideInUp"
        className={styles.footer_section}
        id={SECTIONS.FOOTER}
        useId={false}
      >
        <div className={styles.footer_items_container}>
          {personalData.map(info => (
            <FooterItem key={info.href} href={info.href} icon={info.icon}>
              {info.content}
            </FooterItem>
          ))}
          <Copyright />
        </div>
      </AnimatedInView>
    </Section>
  );
}
