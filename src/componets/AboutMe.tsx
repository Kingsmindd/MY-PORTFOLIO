const AboutMe = () => (
  <section
    className="section container about-grid"
    id="about"
    aria-labelledby="about-title"
  >
    <img
      className="portrait"
      src="https://res.cloudinary.com/dkvooc6af/image/upload/v1793742032/my_first_dp_zw5qcr.jpg"
      alt="KingsMind"
      loading="lazy"
      width="280"
      height="350"
    />
    <div className="about-copy">
      <span className="eyebrow">02 / About me</span>
      <h2 id="about-title">
        Thoughtful interfaces.
        <br />
        Practical applications.
      </h2>
      <p>
        I’m KingsMind, a full-stack web developer based in Lagos, Nigeria. I
        enjoy building web applications that solve everyday problems, with
        attention to usability, performance, and the details that make an
        interface easy to use.
      </p>
    </div>
  </section>
);
export default AboutMe;
