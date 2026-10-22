import { Fragment } from "react";
import type { Project } from "../data/Project";

const ProjectsCard = ({ project }: { project: Project }) => (
  <article className="project-card">
    <div className="project-overview">
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title + " application screenshot"}
          loading="lazy"
          width="960"
          height="600"
        />
      </div>
      <div className="project-copy">
        <span className="eyebrow">
          {project.featured
            ? "Featured full-stack project"
            : project.tech.includes("Node.js")
              ? "Full-stack project"
              : "Frontend project"}
        </span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Technologies">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="actions">
          {project.liveUrl && (
            <a
              className="button button-primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <span aria-hidden="true">↗</span>
            </a>
          )}
          <a
            className="button"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.gitHubBackend ? "Frontend code" : "GitHub"}
          </a>
          {project.gitHubBackend && (
            <a
              className="button"
              href={project.gitHubBackend}
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend code
            </a>
          )}
        </div>
      </div>
    </div>
    {project.caseStudy && (
      <details className="case-study">
        <summary>Behind the build — project case study</summary>
        <div className="case-study-grid">
          <div>
            <h4>The problem</h4>
            <p>{project.caseStudy.problem}</p>
          </div>
          <div>
            <h4>My contribution</h4>
            <p>{project.caseStudy.role}</p>
          </div>
          <div>
            <h4>What the application does</h4>
            <ul>
              {project.caseStudy.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Technical decisions</h4>
            <ul>
              {project.caseStudy.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>From interface to database</h4>
            <div className="architecture">
              {(
                project.caseStudy.architecture ?? [
                  "React",
                  "Express API",
                  "Prisma",
                  "PostgreSQL",
                ]
              ).map((step, index) => (
                <Fragment key={step}>
                  {index > 0 && <span aria-hidden="true">→</span>}
                  <span>{step}</span>
                </Fragment>
              ))}
            </div>
          </div>
          <div>
            <h4>What I learned</h4>
            <p>{project.caseStudy.learning}</p>
          </div>
        </div>
      </details>
    )}
  </article>
);
export default ProjectsCard;
