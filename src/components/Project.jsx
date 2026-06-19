import React from "react";
import ProjectsCard from "./ProjectsCard";
import { CardData } from "../assets/assets";

const Project = () => {
  const projectStats = [
    { title: "HTML & CSS", count: "15+" },
    { title: "JavaScript", count: "12+" },
    { title: "React.js", count: "10+" },
    { title: "Node.js", count: "8+" },
    { title: "MongoDB", count: "8+" },
    { title: "Next.js", count: "5+" },
    { title: "MERN Apps", count: "6+" },
    { title: "UI Components", count: "30+" },
  ];
  return (
    <section className="py-10">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-white text-center mb-5"
      >
        Projects
      </h2>
      <p className="text-yellow-400 mt-4 max-w-2xl mx-auto text-center mb-10">Featured projects that highlight my skills in React, Next.js, Node.js, MongoDB, and modern web development.</p>

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
      <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-10 px-10">
        {projectStats.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-5 text-center shadow-lg hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-white">
              {item.count}
            </h3>
            <p className="text-gray-300 mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;