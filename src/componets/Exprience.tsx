const steps = [
  {
    year: "2025",
    title: "Web foundations",
    description:
      "Learned HTML, CSS, and JavaScript and built responsive websites.",
  },
  {
    year: "2026",
    title: "React & TypeScript",
    description:
      "Built responsive frontend applications with reusable components and Tailwind CSS.",
  },
  {
    year: "Present",
    title: "Full-stack development",
    description:
      "Built and deployed full-stack applications using React, Express, PostgreSQL, and MongoDB.",
  },
];
const Exprience = () => (
  <section
    className="section container"
    id="journey"
    aria-labelledby="journey-title"
  >
    <div className="section-heading">
      <div>
        <h2 id="journey-title">Development journey</h2>
      </div>
    </div>
    <div className="journey">
      {steps.map((step) => (
        <div className="journey-item" key={step.year}>
          <span className="eyebrow">{step.year}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Exprience;
