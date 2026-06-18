import React from "react";
import ProjectsCard from "./ProjectsCard";
import { CardData } from "../assets/assets";

const Project = () => {
  return (
    <section className="py-10">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
      >
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {CardData.map((item, index) => (
          <ProjectsCard
            key={index}
            Delay={index * 150}
            Title={item.Title}
            Type={item.Type}
            Image={item.Image}
            Year={item.Year}
            Bgcolor={item.Bgcolor}
            TextColor={item.TextColor}
            Description={item.Description}
            Learning={item.Learning}
            Shadow={item.Shadow}
            TechStack={item.TechStack}
            ProjectUrl={item.ProjectUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;