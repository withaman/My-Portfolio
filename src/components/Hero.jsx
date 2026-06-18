import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import myprofile1 from "../assets/myprofile1.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 bg-white/20 backdrop-blur-sm border border-white/30 shadow-[0_8px_32px_rgba(255,255,255,0.15)] rounded-2xl overflow-hidden">

      {/* Left Content */}
      <div className="flex flex-col md:w-1/2 gap-4 justify-center z-10">
        <div className="flex items-center gap-2 text-green-700 bg-green-100 w-max px-3 py-1 rounded-full text-sm font-medium">
          <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
          Available for Freelance
        </div>

        <div>
          <TypeAnimation
            sequence={[
              "Designing Websites That Maximize Conversions.",
              1500,
              "Building Modern MERN Applications.",
              1500,
              "Creating Fast & Responsive Experiences.",
              1500,
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-300 leading-tight font-bold mb-3 min-h-[120px] md:min-h-[180px]"
          />

          <p className="text-white text-sm sm:text-base lg:text-lg leading-7 max-w-xl">
            Hi, I'm Aman — a MERN Stack Developer specializing in modern,
            responsive web applications. I create user-centric digital
            experiences that engage audiences and drive business growth.
          </p>
        </div>

        <div>
          <Link
            to="/book"
            className="inline-block bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 duration-300"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative md:w-1/2 flex items-center justify-center h-[420px] sm:h-[400px] lg:h-[460px] overflow-hidden">

        {/* Glow */}
        <div className="absolute w-[60%] h-[55%] bg-white/50 blur-3xl rounded-full animate-pulse-slow"></div>

        {/* Profile Badge */}
        <div className="absolute top-3 left-2 sm:left-6 glass-card float-slow rounded-2xl px-3 py-2 z-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-cyan-200 font-bold">
              AR
            </div>
            <div>
              <p className="text-white text-xs font-semibold">
                Aman Rawat
              </p>
              <p className="text-white/70 text-[10px]">
                MERN Developer
              </p>
            </div>
          </div>
        </div>

        {/* React */}
        <div className="absolute top-16 right-2 sm:right-8 glass-card float-slow w-10 h-10 rounded-2xl flex items-center justify-center text-cyan-300">
          <i className="ri-reactjs-line text-xl"></i>
        </div>

        {/* Node */}
        <div className="absolute bottom-20 left-2 sm:left-8 glass-card float-slower w-10 h-10 rounded-2xl flex items-center justify-center text-green-400">
          <i className="ri-nodejs-line text-xl"></i>
        </div>

        {/* MongoDB */}
        <div className="absolute top-24 left-0 sm:left-10 glass-card float-slow w-10 h-10 rounded-2xl flex items-center justify-center text-green-500">
          <i className="ri-database-2-line text-xl"></i>
        </div>

        {/* JavaScript */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-4 glass-card float-slower w-10 h-10 rounded-2xl flex items-center justify-center text-yellow-300">
          <i className="ri-javascript-line text-xl"></i>
        </div>

        {/* Code */}
        <div className="absolute top-20 left-12 sm:left-20 glass-card float-slower w-10 h-10 rounded-2xl flex items-center justify-center text-cyan-200">
          <i className="ri-code-s-slash-line text-xl"></i>
        </div>

        {/* UI */}
        <div className="absolute bottom-10 right-2 sm:right-10 glass-card float-slow w-10 h-10 rounded-2xl flex items-center justify-center text-pink-200">
          <i className="ri-layout-4-line text-xl"></i>
        </div>

        {/* Terminal */}
        <div className="absolute bottom-24 right-12 sm:right-24 glass-card float-slower w-10 h-10 rounded-2xl flex items-center justify-center text-white">
          <i className="ri-terminal-box-line text-xl"></i>
        </div>

        {/* Browser Window */}
        <div className="hidden sm:block absolute top-10 right-14 glass-card float-slow rounded-2xl w-36 p-3">
          <div className="flex gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
          </div>

          <div className="space-y-2">
            <div className="h-2 rounded bg-white/30"></div>
            <div className="h-2 rounded bg-cyan-300/40 w-4/5"></div>
            <div className="h-2 rounded bg-white/20 w-2/3"></div>
            <div className="h-8 rounded-xl bg-white/10 border border-white/10"></div>
          </div>
        </div>

        {/* MERN Badge */}
        <div className="absolute bottom-8 left-10 sm:left-16 glass-card float-slow rounded-full px-3 py-2">
          <p className="text-white text-[10px] sm:text-xs font-medium">
            MERN Stack Developer
          </p>
        </div>

        {/* Design Badge */}
        <div className="hidden sm:block absolute bottom-3 right-14 glass-card float-slower rounded-2xl px-3 py-2">
          <p className="text-white/70 text-[10px] uppercase tracking-widest">
            Design
          </p>
          <p className="text-yellow-200 text-xs font-semibold">
            UI / UX Focused
          </p>
        </div>

        {/* Profile Image */}
        <img
          src={myprofile1}
          alt="Aman Rawat"
          className="relative z-10 w-full max-w-[400px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]"
        />
      </div>
    </div>
  );
};

export default Hero;
