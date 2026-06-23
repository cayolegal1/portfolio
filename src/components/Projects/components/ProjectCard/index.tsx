import { type JSX } from "react";
import Text from "@/core/components/Text";
import Carousel from "@/core/components/Carousel";
import CarouselItem from "@/core/components/Carousel/components/CarouselItem";
import ProjectImage from "../ProjectImage";
import ProjectChip from "../ProjectChip";
import AndroidGradientIcon from "@/core/components/Icons/Gradient/AndroidGradientIcon";
import IosGradientIcon from "@/core/components/Icons/Gradient/IosGradientIcon";
import GitHubGradientIcon from "@/core/components/Icons/Gradient/GitHubGradientIcon";
import type { ProjectCardProps } from "./ProjectCard.types";
import styles from "./ProjectCard.module.css";

type ProjectLink = {
  href: string;
  label: string;
  icon?: JSX.Element;
};

export default function ProjectCard({
  project: {
    title,
    description,
    androidUrl,
    iosUrl,
    githubUrl,
    websiteUrl,
    imagesPath,
    technologies,
  },
}: ProjectCardProps): JSX.Element {
  const links: ProjectLink[] = [
    androidUrl && {
      href: androidUrl,
      label: "Google Play",
      icon: <AndroidGradientIcon />,
    },
    iosUrl && { href: iosUrl, label: "App Store", icon: <IosGradientIcon /> },
    githubUrl && {
      href: githubUrl,
      label: "GitHub",
      icon: <GitHubGradientIcon />,
    },
    websiteUrl && { href: websiteUrl, label: "Sitio web" },
  ].filter(Boolean) as ProjectLink[];

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Carousel>
          {imagesPath.map(imagePath => (
            <CarouselItem key={imagePath}>
              <ProjectImage src={imagePath} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      <div className={styles.body}>
        <Text as="h4" size="xl" centered={false} className={styles.title}>
          {title}
        </Text>

        <Text
          as="p"
          size="small"
          centered={false}
          className={styles.description}
        >
          {description}
        </Text>

        {Array.isArray(technologies) && technologies.length > 0 && (
          <ul className={styles.technologies}>
            {technologies.map(tech => (
              <li key={tech.name}>
                <ProjectChip name={tech.name} logo={tech.logo_path} />
              </li>
            ))}
          </ul>
        )}

        {links.length > 0 && (
          <div className={styles.actions}>
            {links.map(link => (
              <a
                aria-label={link.label}
                className={styles.action}
                href={link.href}
                key={link.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.icon}
                <Text as="span" size="xs" centered={false}>
                  {link.label}
                </Text>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
