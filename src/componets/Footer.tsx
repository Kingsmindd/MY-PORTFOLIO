import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white dark:bg-gray-100 dark:text-gray-900 transition-colors duration-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-yellow-500  dark:text-slate-700">
            KingsMind
          </h2>
          <p className="mt-3 text-gray-200  dark:text-black">
            Building modern, responsive, and user-friendly web applications.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className=" text-gray-400">
            <div className="hidden sm:block md:flex md:flex-col space-y-2 text-[25px] text-cyan-500 dark:text-slate-600  items-center">
              <Link
                to="Navbar"
                smooth={true}
                duration={500}
                offset={-80}
                className="relative cursor-pointer dark:hover:hover:text-slate-700 hover:drop-shadow-[0_0_8px_rgba(51,65,85,0.5)]  group hover:text-cyan-300"
              >
                Home
              </Link>

              <Link
                to="AboutMe"
                smooth={true}
                duration={500}
                offset={-80}
                className="relative cursor-pointer hover:text-cyan-300 dark:hover:hover:text-slate-700 hover:drop-shadow-[0_0_8px_rgba(51,65,85,0.5)]  group"
              >
                About
              </Link>
              <Link
                to="Skills"
                smooth={true}
                duration={500}
                offset={-80}
                className="relative cursor-pointer hover:text-cyan-300 dark:hover:hover:text-slate-700 hover:drop-shadow-[0_0_8px_rgba(51,65,85,0.5)]  group"
              >
                {" "}
                Skills
              </Link>

              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="relative cursor-pointer hover:text-cyan-300 dark:hover:hover:text-slate-700 hover:drop-shadow-[0_0_8px_rgba(51,65,85,0.5)]  group"
              >
                {" "}
                Projects
              </Link>
            </div>

            <div>
              <div className="flex flex-col items-center py-6 gap-6 md:hidden">
                <Link
                  to="Navbar"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-cyan-500  dark:text-slate-600"
                >
                  Home
                </Link>

                <Link
                  to="AboutMe"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-cyan-500  dark:text-slate-600"
                >
                  About
                </Link>
                <Link
                  to="Skills"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-cyan-500  dark:text-slate-600"
                >
                  {" "}
                  Skills
                </Link>

                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-cyan-500  dark:text-slate-600"
                >
                  {" "}
                  Projects
                </Link>
              </div>
            </div>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 ">Connect</h3>

          <div className="flex flex-col  items-center gap-5 text-2xl md:flex-row md:justify-center">
            <a
              href="https://github.com/Kingsmindd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://github.com/Kingsmindd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:umehjnr041@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <p className="text-center text-gray-300 font-mono  dark:text-slate-600 text-sm">
        © {new Date().getFullYear()} KingsMind. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
