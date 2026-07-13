import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiCloudinary,
  SiJsonwebtokens,
  SiVercel,
  SiRender,
} from "react-icons/si";

export const techStack = [
  {
    title: "Frontend",
    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    title: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
    ],
  },

  {
    title: "Database",
    technologies: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
    ],
  },

  {
    title: "Authentication",
    technologies: [
      {
        name: "JWT",
        icon: SiJsonwebtokens,
      },
    ],
  },

  {
    title: "Tools & Platforms",
    technologies: [
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Cloudinary",
        icon: SiCloudinary,
      },
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Render",
        icon: SiRender,
      },
    ],
  },
];
