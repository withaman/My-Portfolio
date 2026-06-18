import React from "react";

const ProjectsCard = ({
  Title,
  Type,
  Image,
  Year,
  Bgcolor,
  TextColor,
  Description,
  Learning,
  Shadow,
  TechStack,
  ProjectUrl,
  Delay = 0,
}) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={Delay}
      className="project-card"
    >
      <div
        className={`p-4 ${Bgcolor} ${TextColor} ${Shadow} w-full max-w-[30rem] rounded-2xl overflow-hidden`}
      >
        {/* Header */}
        <div className="flex justify-between items-center font-semibold pb-3">
          <p>{Year}</p>
          <p className="text-white">{Type}</p>
        </div>

        <hr className="h-[2px] border-0 bg-gradient-to-r from-white via-gray-100 to-black" />

        {/* Content */}
        <div className="flex flex-col gap-4 pt-3">
          <h3 className="text-xl md:text-2xl font-bold">
            {Title}
          </h3>

          <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base h-36 overflow-hidden">
            <p className="md:w-1/2 overflow-hidden">
              {Description}
            </p>

            <p className="md:w-1/2 overflow-hidden">
              {Learning}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-block px-3 py-1 rounded-full border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] text-sm">
              Designed using {TechStack}
            </span>

            {ProjectUrl && (
              <a
                href={ProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-xl bg-black/20 backdrop-blur-md border border-white/30 hover:bg-black/30 transition-all duration-300"
              >
                <i className="ri-external-link-line"></i>
                Live Demo
              </a>
            )}
          </div>

          <img
            src={Image}
            alt={Title}
            className="w-full rounded-xl object-cover transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;