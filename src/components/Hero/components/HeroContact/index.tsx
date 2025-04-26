import AnimatedRender from "@/core/components/Animated/AnimatedRender";
import GitHubGradientIcon from "@/core/components/Icons/Gradient/GitHubGradientIcon";
import LinkedinGradientIcon from "@/core/components/Icons/Gradient/LinkedinGradientIcon";
import styles from "./HeroContact.module.css";
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
    <AnimatedRender
      animationType="fadeInDown"
      delay="2.5s"
      className={styles.social_media_container}
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
    </AnimatedRender>
  );
}
