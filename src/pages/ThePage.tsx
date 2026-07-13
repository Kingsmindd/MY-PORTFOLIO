import React from "react";
import Navbar from "../componets/Navbar";
import Projects from "../componets/Projects";
import AboutMe from "../componets/AboutMe";
import Skills from "../componets/Skills";
import Header from "../componets/Header";
import Exprience from "../componets/Exprience";
import ContactInfo from "../componets/ContactInfo";
import Footer from "../componets/Footer";

const ThePage: React.FC = () => {
  return (
    <div className=" w-full bg-[#0F172A] dark:bg-[white]">
      <section id="Navbar"></section>

      <Navbar />
      <Header />
      <section id="AboutMe">
        <AboutMe />
      </section>

      <section id="Skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="Exprience">
        <Exprience />
      </section>

      <section id="ContactInfo">
        <ContactInfo />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default ThePage;
