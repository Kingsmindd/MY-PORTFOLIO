// import { ChartNoAxesCombined } from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";

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
  SiPostgresql,
  SiNeon,
  SiZod,
  SiAxios,
  SiReacthookform,
  SiReactquery,
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
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "Prisma",
        icon: LuShieldCheck,
      },
      {
        name: "Neon",
        icon: SiNeon,
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
      {
        name: "bcrypt",
        icon: LuShieldCheck,
      },
      {
        name: "Cookie Parser",
        icon: LuShieldCheck,
      },
    ],
  },

  {
    title: "Security & Validation",
    technologies: [
      {
        name: "Zod",
        icon: SiZod,
      },
      {
        name: "Helmet",
        icon: LuShieldCheck,
      },
      {
        name: "CORS",
        icon: LuShieldCheck,
      },
    ],
  },

  {
    title: "Forms & Data",
    technologies: [
      {
        name: "React Hook Form",
        icon: SiReacthookform,
      },
      {
        name: "TanStack Query",
        icon: SiReactquery,
      },
      {
        name: "Axios",
        icon: SiAxios,
      },
    ],
  },

  // {
  //   title: "Analytics",
  //   technologies: [
  //     {
  //       name: "Recharts",
  //       icon: ChartNoAxesCombined,
  //     },
  //   ],
  // },

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
