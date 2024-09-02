import Link from "next/link";
import AnimatedRender from "@/core/components/AnimatedRender";
import GitHubIcon from "@/core/components/Icons/GitHubIcon";
import LinkedinIcon from "@/core/components/Icons/LinkedinIcon";
import styles from "./HeroContact.module.css";
import data from "@/core/data/info.json";

export default function HeroContact(): JSX.Element {
  const { github_url, linkedin_url } = data;
  return (
    <AnimatedRender
      animationType="fadeInDown"
      delay="2.5s"
      className={styles.social_media_container}
    >
      <Link href={github_url} target="_blank" className={styles.social_media_icon}>
        <GitHubIcon />
      </Link>
      <Link href={linkedin_url} target="_blank" className={styles.social_media_icon}>
        <LinkedinIcon />
      </Link>
    </AnimatedRender>
  );
}
