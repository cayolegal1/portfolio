import AnimatedRender from "@/core/components/AnimatedRender";
import GitHubIcon from "@/core/components/Icons/GitHubIcon";
import LinkedinIcon from "@/core/components/Icons/LinkedinIcon";
import styles from "./HeroContact.module.css";
import data from "@/core/data/user-info.json";

const { github_url, linkedin_url } = data;

const contactLinks = [
  { ariaLabel: "Visit my repository on github", href: github_url, icon: <GitHubIcon /> },
  { ariaLabel: "Visit my profile on LinkedIn", href: linkedin_url, icon: <LinkedinIcon /> },
];

export default function HeroContact(): JSX.Element {
  return (
    <AnimatedRender
      animationType="fadeInDown"
      delay="2.8s"
      className={styles.social_media_container}
    >
      {contactLinks.map(source => (
        <a
          aria-label={source.ariaLabel}
          className={styles.social_media_icon}
          href={source.href}
          key={source.href}
          target="_blank"
        >
          {source.icon}
        </a>
      ))}
    </AnimatedRender>
  );
}
