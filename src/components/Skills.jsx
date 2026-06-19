import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaImage,
  FaVideo,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiCanva,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { MdVideoCameraBack } from "react-icons/md";
import { BsDatabaseFill } from "react-icons/bs";
import { BiLineChart } from "react-icons/bi";

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-purple-500" />,
      },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      {
        name: "REST APIs",
        icon: <BiLineChart className="text-pink-400" />,
      },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Mongoose", icon: <BsDatabaseFill className="text-red-400" /> },
      { name: "SQL", icon: <BsDatabaseFill className="text-blue-400" /> },
    ],
  },

  {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
    ],
  },
  {
  title: "Deployment & Hosting",
  skills: [
    {
      name: "Vercel",
      icon: <SiVercel className="text-white" />,
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-green-400" />,
    },
    {
      name: "Render",
      icon: <SiRender className="text-purple-400" />,
    },
    {
      name: "GitHub Pages",
      icon: <FaGithub className="text-white" />,
    },
  ],
},

  {
    title: "Design & Creative",
    skills: [
      { name: "Canva", icon: <SiCanva className="text-cyan-400" /> },
      { name: "Photoshop", icon: <FaImage className="text-red-500" /> },
      { name: "CapCut", icon: <FaVideo className="text-white" /> },
      {
        name: "Video Editing",
        icon: <MdVideoCameraBack className="text-red-400" />,
      },
    ],
  },

  {
    title: "Productivity Suite",
    skills: [
      {
        name: "MS Word",
        icon: <FaFileWord className="text-blue-500" />,
      },
      {
        name: "MS Excel",
        icon: <FaFileExcel className="text-green-500" />,
      },
      {
        name: "PowerPoint",
        icon: <FaFilePowerpoint className="text-orange-500" />,
      },
    ],
  },

  {
    title: "SEO & Marketing",
    skills: [
      {
        name: "SEO",
        icon: <BiLineChart className="text-yellow-400" />,
      },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-16">
      <div data-aos="fade-up" className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Skills & Technologies
        </h2>

        <p className="text-yellow-400 mt-4 max-w-2xl mx-auto">
          A comprehensive collection of technologies, tools, and creative
          platforms I use to build modern web applications and digital
          experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillsData.map((category, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/20 pb-3">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all"
                >
                  <div className="text-3xl">{skill.icon}</div>

                  <span className="text-white text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;