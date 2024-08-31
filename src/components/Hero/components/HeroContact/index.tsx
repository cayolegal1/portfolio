import Link from "next/link";
import Image from "next/image";
import AnimatedRender from "@/core/components/AnimatedRender";
import styles from "./HeroContact.module.css";
import data from "@/core/data/info.json";

export default function HeroContact(): JSX.Element {
  const { github_url, linkedin_url } = data;
  return (
    <AnimatedRender
      animationType="fadeInDown"
      delay="1s"
      className={styles.social_media_container}
    >
      <Link href={github_url} target="_blank">
        <Image
          src="/icons/github.svg"
          width={40}
          height={40}
          alt="github_icon"
        />
      </Link>
      <Link href={linkedin_url} target="_blank">
        <Image
          src="/icons/linkedin.svg"
          width={50}
          height={50}
          alt="linkedin_icon"
        />
      </Link>
    </AnimatedRender>
  );
}
