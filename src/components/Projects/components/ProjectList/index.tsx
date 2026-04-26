import { type JSX } from "react";
import Carousel from "@/core/components/Carousel";
import CarouselItem from "@/core/components/Carousel/components/CarouselItem";
import ProjectImage from "../ProjectImage";
import AnimatedProjectImageInView from "../AnimatedProjectImage";
import { projects } from "@/core/data/projects";
import styles from "./ProjectList.module.css";

export default function ProjectList(): JSX.Element {
  return (
    <div className={styles.container}>
      {projects.map(project => (
        <AnimatedProjectImageInView
          id={`project_${project.name}`}
          key={project.name}
        >
          <Carousel>
            {project.images_path.map(imagePath => (
              <CarouselItem className={styles.carousel_item} key={imagePath}>
                <ProjectImage src={imagePath} />
              </CarouselItem>
            ))}
          </Carousel>
        </AnimatedProjectImageInView>
      ))}
    </div>
  );
}
