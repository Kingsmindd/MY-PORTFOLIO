import React from "react";
import ProjectCard from "../componets/ProjectsCard";
import { projects } from "../data/Project";

const Projects: React.FC = () => {
  return (
    <section className="py-20  ">
      <h2 className="text-4xl font-bold text-center font-sans text-amber-400 dark:text-black">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:justify-center ">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
