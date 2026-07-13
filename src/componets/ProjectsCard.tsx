import type { Project } from "../data/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectsCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden text-white dark:text-black ">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold  font-display">{project.title}</h3>

        <p className="mt-2 font-medium font-mono ">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4 ">
          {project.tech.map((tech) => (
            <p
              key={tech}
              className="px-3 py-1 bg-yellow-500  dark:bg-slate-600 font-mono  dark:text-white rounded-full text-gray-900"
            >
              {tech}
            </p>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {project.liveUrl && <a href={project.liveUrl}>Live Demo</a>}

          <a href={project.githubUrl}>GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
