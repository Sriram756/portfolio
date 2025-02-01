import React from "react";
import { allProject } from "../constants";

const ProjectCard = () => {
  return (
    <div
      name="project"
      className="bg-gradient-to-b from-gray-950 to-slate-900 text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        {/* Section Heading */}
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500 text-transparent bg-clip-text bg-white px-5">
            Portfolio
          </p>
          <p className="mt-6 font-medium text-xl">Check out some of my work</p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pb-4 px-6 sm:px-0">
          {allProject.map(({ id, src, eref, name, cate }) => (
            <div
              key={id}
              className="shadow-md min-h-[350px] md:min-h-[500px] relative shadow-gray-600 rounded-lg overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={src}
                alt={name} // Added meaningful alt text
                className="rounded-md duration-200 hover:scale-105 w-full h-[60%] object-fill"
              />

              {/* Project Details */}
              <div className="flex flex-col items-center justify-center p-4">
                <button
                  className="w-full h-[40%] flex-1 px-6 py-2 md:mt-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 hover:scale-105 transition-transform"
                  onClick={() =>
                    window.open(eref, "_blank", "noopener noreferrer")
                  }
                >
                  Visit Website
                </button>

                <p className="text-center text-blue-400 text-lg font-bold mt-2">
                  {name}
                </p>
                <p className="text-center text-wrap  text-blue-500 text-sm">
                  {cate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
