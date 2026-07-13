import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  return (
    <div
      id="ContactInfo"
      className="max-w-5xl mx-auto py-20 px-6 text-center  text-white dark:text-black"
    >
      <h2 className="text-4xl font-bold font-sans text-amber-400 dark:text-slate-700">
        Get In Touch
      </h2>

      <p className="mt-4 text-gray-200 font-mono dark:text-slate-800">
        I'm always open to discussing new opportunities, collaborations, or
        freelance projects.
      </p>

      <div className="flex justify-center gap-8 mt-10 text-3xl">
        <a href="mailto:umehjnr041@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/Kingsmindd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
