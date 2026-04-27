import { type JSX } from "react";
import Carousel from "@/core/components/Carousel";
import CarouselItem from "@/core/components/Carousel/components/CarouselItem";
import ProjectImage from "../ProjectImage";
import AnimatedProjectCard from "../AnimatedProjectImage";
import styles from "./ProjectList.module.css";
import ProjectCard from "../ProjectCard";
import { useProjectsTranslation } from "@/core/hooks/useProjectsTranslation";

export default function ProjectList(): JSX.Element {
  const projects = useProjectsTranslation();
  return (
    <div
      className={styles.container}
      style={{
        justifyContent: projects.length > 2 ? "start" : "center",
      }}
    >
      {projects.map(project => (
        <AnimatedProjectCard id={`project_${project.name}`} key={project.name}>
          <Carousel>
            {project.images_path.map(imagePath => (
              <CarouselItem className={styles.carousel_item} key={imagePath}>
                <ProjectImage src={imagePath} />
              </CarouselItem>
            ))}
          </Carousel>

          <ProjectCard
            title={project.title}
            description={project.description}
          />
        </AnimatedProjectCard>
      ))}
    </div>
  );
}
