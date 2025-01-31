import React from "react";
import { allProject } from "../constants";

const ProjectCard = () => {
  return (
    <div
      name="project"
      className=" top-0 bg-gradient-to-b from-gray-950 to-slate-900 text-white md:h-full "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-500">
            portfolio
          </p>
          <p>check out some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {allProject.map(({ id, src, eref, name }) => (
            <div
              key={id}
              className="shadow-md relative shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-2/3 "
              />
              <div className="flex flex-wrap items-center justify-center">
                <button
                  className="w-1/2 flex-1 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-500"
                  onClick={() => window.open(eref, "_blank")}
                >
                  demo
                </button>
                <button className="w-1/2 flex-1 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-500">
                  code
                </button>
                <p className="text-center text-blue-600 text-lg font-bold ">
                  {name}
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
