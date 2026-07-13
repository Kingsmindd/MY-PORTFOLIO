import SpaceTourism from "../assets/Space-tourism.png";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Space Tourism",
    description: "A responsive multi-page website built with React.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: SpaceTourism,
    liveUrl: "https://space-tourism-ih71.vercel.app/",
    githubUrl: "https://github.com/Kingsmindd/SPACE-TOURISM",
  },
];
