import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const aboutMePic =
  "https://res.cloudinary.com/dkvooc6af/image/upload/v1783525891/WhatsApp_Image_2026-07-08_at_8.49.23_AM_geac15.jpg";
const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
      <div className="rounded-full">
        <img
          src={aboutMePic}
          alt=""
          className="w-60  rounded-full  md:w-90  "
        />
      </div>
      <div>
        <h1 className="text-xl w-85 md:text-2xl font-sans text-amber-400 animate-float font-bold md:w-150 dark:text-slate-600 ">
          {" "}
          ABOUT ME{" "}
        </h1>
        <h2 className=" mt-2 font-semibold text-xl font-mono w-85 md:text-2xl text-slate-300 md:w-150  dark:text-black ">
          I am KingsMind, A Full-Stack Web App Developer, who enjoys building
          web applications that solves human problems. I build quality, modern
          websites with quality performance, usability, and great user
          experiences.
        </h2>

        <div className="text-amber-400 flex flex-col items-center font-bold  dark:text-slate-600  mt-4  gap-3 ">
          <p className="flex  items-center gap-3">
            <FaLocationDot className="text-red-400" /> Lagos, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
