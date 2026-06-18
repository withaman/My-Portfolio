import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.08)] rounded-2xl">

      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl text-center text-white font-bold"
      >
        Skills
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="mt-3 text-center text-white max-w-3xl"
      >
        Proficient in a range of technical and soft skills, driving efficiency
        and creativity in every project I undertake.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 sm:gap-8 md:gap-10 place-items-center pt-10">

        <div data-aos="zoom-in-up" data-aos-delay="100" className="skill-card flex flex-col items-center p-4 text-orange-500">
          <i className="ri-html5-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">HTML5</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="150" className="skill-card flex flex-col items-center p-4 text-blue-500">
          <i className="ri-css3-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">CSS3</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="200" className="skill-card flex flex-col items-center p-4 text-yellow-400">
          <i className="ri-javascript-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">JavaScript</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="250" className="skill-card flex flex-col items-center p-4 text-cyan-400">
          <i className="ri-reactjs-line text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">React.js</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="300" className="skill-card flex flex-col items-center p-4 text-white">
          <i className="ri-nextjs-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">Next.js</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="350" className="skill-card flex flex-col items-center p-4 text-sky-400">
          <i className="ri-tailwind-css-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">Tailwind CSS</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="400" className="skill-card flex flex-col items-center p-4 text-purple-500">
          <i className="ri-bootstrap-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">Bootstrap</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="450" className="skill-card flex flex-col items-center p-4 text-green-500">
          <i className="ri-nodejs-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">Node.js</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="500" className="skill-card flex flex-col items-center p-4 text-gray-300">
          <i className="ri-server-line text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">Express.js</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="550" className="skill-card flex flex-col items-center p-4 text-pink-400">
          <i className="ri-links-line text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">REST APIs</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="600" className="skill-card flex flex-col items-center p-4 text-yellow-600">
          <i className="ri-code-box-line text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">EJS</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="650" className="skill-card flex flex-col items-center p-4 text-green-400">
          <i className="ri-database-2-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">MongoDB</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="700" className="skill-card flex flex-col items-center p-4 text-red-400">
          <i className="ri-database-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">Mongoose</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="750" className="skill-card flex flex-col items-center p-4 text-blue-300">
          <i className="ri-table-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">SQL</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="800" className="skill-card flex flex-col items-center p-4 text-blue-400">
          <i className="ri-code-s-slash-line text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">VS Code</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="850" className="skill-card flex flex-col items-center p-4 text-indigo-400">
          <i className="ri-magic-line text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">AOS</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="900" className="skill-card flex flex-col items-center p-4 text-violet-400">
          <i className="ri-send-plane-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">Axios</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="950" className="skill-card flex flex-col items-center p-4 text-orange-400">
          <i className="ri-git-branch-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">Git</p>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="1000" className="skill-card flex flex-col items-center p-4 text-white">
          <i className="ri-github-fill text-3xl lg:text-5xl"></i>
          <p className="text-sm lg:text-lg font-semibold text-center mt-3 text-white">GitHub</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;