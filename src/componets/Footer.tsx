import { profile } from "../data/Profile";
const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <p>© {new Date().getFullYear()} KingsMind. All rights reserved.</p>
      <nav className="footer-links" aria-label="Footer">
        <a href="#home">Back to top ↑</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=umehprince536@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email me
        </a>
      </nav>
    </div>
  </footer>
);
export default Footer;
