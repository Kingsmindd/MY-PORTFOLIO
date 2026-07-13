import React from "react";
import { techStack } from "../data/TechStack";

const Skills: React.FC = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white dark:text-black">
      {techStack.map((category) => (
        <div key={category.title} className="rounded-2xl border p-6 self-start">
          <h3 className="mb-4 text-xl font-semibold text-amber-400 font-sans dark:text-slate-700">
            {category.title}
          </h3>

          <div className="space-y-3">
            {category.technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 rounded-lg border px-4 py-2"
                >
                  <Icon className="text-xl" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
