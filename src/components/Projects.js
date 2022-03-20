import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <div>
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-0">
            {projects.map((project) => (
              <div className="sm:w-1/2 w-100 p-4" key={project.image}>
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full items-center object-cover object-center "
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.name}
                    </h1>
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.technologies}
                    </h2>

                    <p className="leading-relaxed">{project.about}</p>
                  </div>
                </div>
                <a
                  target="_blank"
                  className="mr-5 hover:text-white"
                  href={project.demo}
                >
                  <u>Demo</u>
                </a>
                <a
                  target="_blank"
                  href={project.code}
                  className="mr-5 hover:text-white"
                >
                  <u>View code</u>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      );
    </div>
  );
};

export default Projects;
