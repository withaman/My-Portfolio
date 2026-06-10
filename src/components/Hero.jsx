import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col flex-col-reverse gap-5 border px-5 py-5 sm:px-10 md:flex-row bg-white/20
backdrop-blur-sm
border border-white/30
shadow-[0_8px_32px_rgba(255,255,255,0.15)]">
      <div className="flex flex-col md:w-1/2 gap-5 justify-center">
        <div className="flex items-center gap-1 text-green-700 bg-green-100 w-max p-1 rounded-full">
          <div className="w-1 h-1 bg-green-700 rounded-full"></div>Available for
          Freelance
        </div>
        <div className="">
          <h1 className="text-5xl text-yellow-300 leading-tight sm:text-3xl md:text-4xl lg:text-7xl lg:leading-tight font-bold mb-3">Designing Website That Maximize Conversions.</h1>
          <p className="sm:text-lg md:text-sm lg:text-lg text-white">Hi, I'm Aman--A Product Designer Specializing in Web and Mobile Application.Create User-Centric Designs That Engage Audiences And Drive Conversion.Currently Based in Mussoorie, Uttarakhand-India.</p>
        </div>
        <div>
          <Link className="bg-red-600 text-white text-md px-2 sm:px-4 sm:py-1 sm:text-lg rounded-full hover:bg-red-900 duration-300" to="/book">Hired Me</Link>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src="src\assets\herosection_profile.jpg"
          alt=""
          className="w-[25rem] md:w-[20rem] lg:w-[25rem] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
