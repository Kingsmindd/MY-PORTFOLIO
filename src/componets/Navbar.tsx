import React, { useState, useRef, useEffect } from "react"; // FIXED: added useRef, useEffect
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";

import ThemeToggle from "./Themetoggle";

const myLogo =
  "https://res.cloudinary.com/dkvooc6af/image/upload/v1783592907/new_logo_4_cpknlr.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="  justify-center w-full fixed top-0 z-50 left-0  bg-[#0F172A] dark:bg-[white] md:w-full   ">
      <div className=" max-w-6xl mx-auto flex items-center justify-between px-6 h-15 md:flex md:justify-between md:items-center font-sans  ">
        <Link
          to="Navbar"
          smooth={true}
          duration={500}
          className="w-35 h-15 cursor-pointer flex items-center "
        >
          <img src={myLogo} alt="Logo" />
        </Link>

        <div className="hidden sm:block md:flex md:gap-25 text-[25px] text-cyan-500 dark:text-slate-600  items-center">
          <Link
            to="Navbar"
            smooth={true}
            duration={500}
            offset={-80}
            className="relative cursor-pointer  group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all duration-300 ease-out group-hover:w-full" />
          </Link>

          <Link
            to="AboutMe"
            smooth={true}
            duration={500}
            offset={-80}
            className="relative cursor-pointer  group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all duration-300 ease-out group-hover:w-full" />
          </Link>
          <Link
            to="Skills"
            smooth={true}
            duration={500}
            offset={-80}
            className="relative cursor-pointer  group"
          >
            {" "}
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all duration-300 ease-out group-hover:w-full" />
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="relative cursor-pointer  group"
          >
            {" "}
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all duration-300 ease-out group-hover:w-full" />
          </Link>
        </div>
        <div className="mt-3">
          <ThemeToggle />
        </div>

        <div className="hidden sm:block">
          <Link
            to="ContactInfo"
            smooth={true}
            duration={500}
            offset={-80}
            className=" mt-3 px-4 py-4  cursor-pointer rounded-full text-[12px] bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 hover:scale-105  dark:bg-slate-600 dark:hover:bg-slate-800"
          >
            LETS WORK TOGETHER
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden  z-60 text-white   dark:text-black text-5xl cursor-pointer"
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>

        <div
          ref={menuRef}
          className={`fixed top-0 pt-15 right-0 h-85 w-1/2 font-mono  bg-slate-900/60 dark:bg-white/15 rounded-bl-2xl backdrop-blur-lg rounded-tl-2xl
  transform transition-transform duration-300 ease-in-out md:hidden  ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
        >
          <div className="flex flex-col items-center py-6 gap-6">
            <Link
              to="Navbar"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-cyan-500  dark:text-slate-600"
            >
              Home
            </Link>

            <Link
              to="AboutMe"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-cyan-500  dark:text-slate-600"
            >
              About
            </Link>
            <Link
              to="Skills"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-cyan-500  dark:text-slate-600"
            >
              {" "}
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
