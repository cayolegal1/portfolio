import GitHubGradientIcon from "@/core/components/Icons/Gradient/GitHubGradientIcon";
import LinkedinGradientIcon from "@/core/components/Icons/Gradient/LinkedinGradientIcon";
import styles from "./HeroContact.module.css";
import heroStyles from "../../Hero.module.css";
import data from "@/core/data/user-info.json";

import type { JSX } from "react";

const { github_url, linkedin_url } = data;

const contactLinks = [
  {
    ariaLabel: "Visit my repository on github",
    href: github_url,
    icon: <GitHubGradientIcon />,
  },
  {
    ariaLabel: "Visit my profile on LinkedIn",
    href: linkedin_url,
    icon: <LinkedinGradientIcon />,
  },
];

export default function HeroContact(): JSX.Element {
  return (
    <div
      className={`${styles.social_media_container} ${heroStyles.enter}`}
      style={{ animationDelay: "0.36s" }}
    >
      {contactLinks.map(source => (
        <a
          aria-label={source.ariaLabel}
          className={styles.social_media_icon}
          href={source.href}
          key={source.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {source.icon}
        </a>
      ))}
    </div>
  );
}
