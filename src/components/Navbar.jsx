import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center py-2">
      <ul
        className="flex items-center justify-center gap-1 sm:gap-4 my-2
        px-4 sm:px-5 py-2
        rounded-3xl
        bg-white/40
        backdrop-blur-sm
        border border-white/30
        shadow-[0_8px_32px_rgba(255,255,255,0.15)]"
      >
        {/* Home */}
        <NavLink
          className="flex sm:gap-2 items-center px-2 py-1 rounded-full transition-all duration-500 ease-out"
          to="/"
        >
          <span className="font-semibold text-xl sm:text-2xl">
            <i className="ri-home-5-line"></i>
          </span>
        </NavLink>

        {/* Resume */}
        <a
          href="/aman-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
          group flex items-center rounded-full
          transition-all duration-500 ease-out
          bg-transparent
          hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500
          hover:px-[10px]
          hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]
        "
        >
          <span
            className="
            text-white text-sm font-medium mr-2
            max-w-0 overflow-hidden hidden
            transition-all duration-500 ease-out
            group-hover:max-w-[80px]
            group-hover:block
          "
          >
            Resume
          </span>

          <span className="font-semibold text-xl sm:text-2xl text-black group-hover:text-white transition-all duration-500 ease-out">
            <i className="ri-article-line"></i>
          </span>
        </a>

        <span className="text-xl sm:text-2xl text-gray-500">|</span>
        <a
  href="https://linkedin.com/in/aman-rawat-a146932b1"
  target="_blank"
  rel="noopener noreferrer"
  className="
  group flex items-center rounded-full
  transition-all duration-500 ease-out
  bg-transparent
  hover:bg-[#0077B5]
  hover:px-[10px]
  hover:shadow-[0_0_15px_rgba(0,119,181,0.5)]
"
>
  <span
    className="
    text-white text-sm font-medium mr-2
    max-w-0 overflow-hidden hidden
    transition-all duration-500 ease-out
    group-hover:max-w-[80px]
    group-hover:block
  "
  >
    LinkedIn
  </span>

  <span className="font-semibold text-xl sm:text-2xl text-black group-hover:text-white transition-all duration-500 ease-out">
    <i className="ri-linkedin-box-fill"></i>
  </span>
</a>

        

        {/* GitHub */}
        <a
          href="https://github.com/withaman"
          target="_blank"
          rel="noopener noreferrer"
          className="
          group flex items-center rounded-full
          transition-all duration-500 ease-out
          bg-transparent
          hover:bg-zinc-900
          hover:px-[10px]
          hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
        "
        >
          <span
            className="
            text-white text-sm font-medium mr-2
            max-w-0 overflow-hidden hidden
            transition-all duration-500 ease-out
            group-hover:max-w-[80px]
            group-hover:block
          "
          >
            Git
          </span>

          <span className="font-semibold text-xl sm:text-2xl text-black group-hover:text-white transition-all duration-500 ease-out">
            <i className="ri-github-fill"></i>
          </span>
        </a>

        {/* About */}
        <a
          className="
          flex gap-1 items-center
          bg-black text-sm text-white
          px-3 py-1.5 rounded-full
          transition-all duration-500 ease-out
          hover:bg-yellow-400
          hover:text-black
          hover:shadow-[0_0_15px_rgba(250,204,21,0.6)]
        "
          href="#about"
        >
          About
        </a>

        {/* Work */}
        <a
          href="#work"
          className="
          group flex items-center rounded-full
          transition-all duration-500 ease-out
          bg-transparent
          hover:bg-blue-500
          hover:px-[10px]
          hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
        "
        >
          <span
            className="
            text-white text-sm font-medium mr-2
            max-w-0 overflow-hidden hidden
            transition-all duration-500 ease-out
            group-hover:max-w-[80px]
            group-hover:block
          "
          >
            Work
          </span>

          <span className="font-semibold text-xl sm:text-2xl text-black group-hover:text-white transition-all duration-500 ease-out">
            <i className="ri-folder-5-line"></i>
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/_withaman"
          target="_blank"
          rel="noopener noreferrer"
          className="
          group flex items-center rounded-full
          transition-all duration-500 ease-out
          bg-transparent
          hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500
          hover:px-[10px]
          hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]
        "
        >
          <span
            className="
            text-white text-sm font-medium mr-2
            max-w-0 overflow-hidden hidden
            transition-all duration-500 ease-out
            group-hover:max-w-[80px]
            group-hover:block
          "
          >
            Insta
          </span>

          <span className="font-semibold text-xl sm:text-2xl text-black group-hover:text-white transition-all duration-500 ease-out">
            <i className="ri-instagram-line"></i>
          </span>
        </a>

        <span className="text-xl sm:text-2xl text-gray-500">|</span>

        {/* Contact */}
        <a
          href="#contact"
          className="
          flex gap-1 items-center
          bg-black text-sm text-white
          px-3 py-1.5 rounded-full
          transition-all duration-500 ease-out
          hover:bg-green-500
          hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]
        "
        >
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Navbar;