import React from "react";

const Exprience: React.FC = () => {
  return (
    <section
      id="Exprience"
      className="max-w-5xl mx-auto py-20 px-6  text-white dark:text-black"
    >
      <h2 className="text-4xl font-bold text-center text-amber-400 dark:text-slate-700">
        My Journey
      </h2>

      <p className="text-center text-gray-200 mt-3 mb-12 dark:text-slate-800">
        A snapshot of my learning and development as a software developer.
      </p>

      <div className="space-y-6">
        <div className="border-l-4 border-yellow-500 dark:border-slate-600 pl-6">
          <p className="text-yellow-500 font-semibold md:font-bold dark:text-slate-700">
            2025
          </p>
          <h3 className="text-xl font-bold mt-1">HTML • CSS • JavaScript</h3>
          <p className="text-gray-200 mt-2 font-mono dark:text-slate-800">
            Learned web fundamentals and built responsive websites.
          </p>
        </div>

        <div className="border-l-4 border-yellow-500 dark:border-slate-600 pl-6">
          <p className="text-yellow-500 font-semibold md:font-bold dark:text-slate-700">
            2026
          </p>
          <h3 className="text-xl font-bold mt-1">
            React • TypeScript • Tailwind CSS
          </h3>
          <p className="text-gray-200  font-mono mt-2 dark:text-slate-800">
            Built modern frontend applications and reusable components.
          </p>
        </div>

        <div className="border-l-4 border-yellow-500 dark:border-slate-600 pl-6">
          <p className="text-yellow-500 font-semibold md:font-bold dark:text-slate-700">
            Present
          </p>
          <h3 className="text-xl font-bold mt-1">
            Node.js • Express • MongoDB
          </h3>
          <p className="text-gray-200 mt-2 font-mono dark:text-slate-800">
            Currently learning backend development and building full-stack
            applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Exprience;
