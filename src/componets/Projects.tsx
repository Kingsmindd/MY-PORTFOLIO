import ProjectCard from "./ProjectsCard";
import { projects } from "../data/Project";
const Projects = () => (
  <section
    className="section container"
    id="projects"
    aria-labelledby="projects-title"
  >
    <div className="section-heading">
      <div>
        <h2 id="projects-title">Selected work</h2>
      </div>
      <p>
        A closer look at what I build, how it works, and the decisions behind
        it.
      </p>
    </div>
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
);
export default Projects;
