import { type JSX } from "react";
import AnimatedProjectCard from "../AnimatedProjectCard";
import ProjectCard from "../ProjectCard";
import { useProjectsTranslation } from "@/core/hooks/useProjectsTranslation";
import styles from "./ProjectList.module.css";

export default function ProjectList(): JSX.Element {
  const projects = useProjectsTranslation();
  return (
    <div className={styles.grid}>
      {projects.map(project => (
        <AnimatedProjectCard id={project.id} key={project.id}>
          <ProjectCard project={project} />
        </AnimatedProjectCard>
      ))}
    </div>
  );
}
