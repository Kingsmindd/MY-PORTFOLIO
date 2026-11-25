import { techStack } from '../data/TechStack';
const Skills = () => (
 <section className="section container" id="skills" aria-labelledby="skills-title">
  <div className="section-heading"><div><h2 id="skills-title">My toolkit</h2></div><p>From the interface and API to data storage and deployment.</p></div>
  <div className="skills-grid">{techStack.map(category=><div className="skill-group" key={category.title}><h3>{category.title}</h3><div className="skill-items">{category.technologies.map(tech=>{const Icon=tech.icon;return <span className="skill-item" key={tech.name}><Icon aria-hidden="true"/>{tech.name}</span>;})}</div></div>)}</div>
 </section>
);
export default Skills;