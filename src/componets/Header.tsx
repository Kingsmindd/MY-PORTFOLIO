import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <header className="p-30 flex flex-col items-center  ">
      <h1 className="text-2xl w-full md:text-5xl font-extrabold leading-tight  font-mono text-amber-400 md:whitespace-nowrap md:overflow-hidden  inline-block md:animate-typing dark:text-slate-600">
        Hello I am{" "}
        <span
          className="bg-linear-to-r
from-cyan-400
via-blue-500
to-purple-600
bg-clip-text
text-transparent
dark:bg-linear-to-r dark:from-amber-700 dark:via-yellow-600 dark:to-orange-600 dark:bg-clip-text dark:text-transparent"
        >
          KingsMind
        </span>
      </h1>
      <div className="">
        <p className="mt-6 text-xl md:text-2xl dark:text-black text-slate-300 font-bold font-mono ">
          A Full Stack Developer
        </p>

        <p className="mt-6 text-xl md:text-2xl text-slate-300 font-bold  dark:text-black font-mono">
          {" "}
          building things that solves problems
        </p>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer mt-3 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400
           dark:bg-slate-600 dark:hover:bg-slate-700 whitespace-nowrap text-white font-semibold transition-all duration-300 hover:scale-105 md:px-8 md:py-4  "
        >
          View Projects
        </Link>
        <Link
          to="ContactInfo"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer mt-3 px-4 py-2 rounded-full bg-cyan-500 dark:bg-slate-600 dark:hover:bg-slate-700 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 hover:scale-105 md:px-8 md:py-4  "
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header;
