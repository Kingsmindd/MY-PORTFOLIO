import { Download } from "lucide-react";
import { profile } from "../data/Profile";

const Header = () => (
  <header className="hero container" id="home">
    <div className="hero-content">
      <span className="eyebrow hero-kicker">Full-stack developer</span>
      <h1>I’m <span>KingsMind.</span></h1>
      <p className="hero-copy">
        I build web applications from interface to database, with React,
        TypeScript, Node.js, and PostgreSQL.
      </p>
      <div className="actions">
        <a className="button button-primary" href="#projects">Explore my work</a>
        <a className="button" href={profile.resumeUrl} download="KingsMind-CV.pdf">
          <Download size={18} aria-hidden="true" /> Download CV
        </a>
      </div>
    </div>
    <p className="hero-location">Based in Lagos, Nigeria</p>
  </header>
);

export default Header;
