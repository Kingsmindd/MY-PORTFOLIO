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
      "Built frontend applications with reusable components and Tailwind CSS, including Space Tourism.",
  },
  {
    year: "Present",
    title: "Full-stack development",
    description:
      "Built some application with React, Node.js, Express, PostgreSQL, MongoDB , Moongose  and Prisma.",
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
        <span className="eyebrow">04 / My journey</span>
        <h2 id="journey-title">Learning through building.</h2>
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
