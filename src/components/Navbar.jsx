import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <ul className="flex items-center justify-center gap-1 sm:gap-4 my-2
px-4 sm:px-5 py-2
rounded-3xl
bg-white/40
backdrop-blur-sm
border border-white/30
shadow-[0_8px_32px_rgba(255,255,255,0.15)]">
        <NavLink className="flex sm:gap-2 items-center" to="/">
          <p className="hidden sm:block sm:text-m">Home</p>
          <span className="font-semibold text-xl sm:text-2xl">
            <i class="ri-home-5-line"></i>
          </span>
        </NavLink>

        <span className="text-xl sm:text-2xl text-gray-500">|</span>

        <a
          href="https://instagram.com/_withaman"
          target="_blank"
          rel="noopener noreferrer"
          className="
    group flex items-center rounded-full
    transition-all duration-300
    bg-transparent hover:bg-black hover:px-[10px]
  "
        >
          {/* Text */}
          <span
            className="text-white text-sm font-medium mr-2 max-w-0 overflow-hidden hidden
    transition-all duration-300 group-hover:max-w-[80px] group-hover:block"
            style={{ transitionProperty: "max-width, opacity" }}
          >
            Insta
          </span>

          {/* Icon */}
          <span className="font-semibold text-xl sm:text-2xl text-black group-hover:text-white transition-colors duration-300">
            <i className="ri-instagram-line"></i>
          </span>
        </a>

        <a
          href="https://github.com/withaman"
          className="
            group flex items-center rounded-full
           transition-all duration-300
           bg-transparent hover:bg-black hover:px-[10px]
           "
        >
          {/* Text */}
          <span
            className="text-white text-sm font-medium mr-2 max-w-0 overflow-hidden hidden
              transition-all duration-300 group-hover:max-w-[80px] group-hover:block"
            style={{ transitionProperty: "max-width, opacity" }}
          >
            Git
          </span>
          {/* Icon */}
          <span
            className="font-semibold text-xl sm:text-2xl text-black group-hover:text-white transition-colors duration-300">
            <i className="ri-github-fill"></i>
          </span>
        </a>

        <a
          className="flex gap-1 items-center bg-black text-sm text-white px-2 py-1 rounded-full hover:bg-yellow-400 duration-300"
          href="#about"
        >
          About
        </a>

        <a
          href="#work"
          className="
            group flex items-center rounded-full
           transition-all duration-300
           bg-transparent hover:bg-black hover:px-[10px]
           "
        >
          {/* Text */}
          <span
            className="text-white text-sm font-medium mr-2 max-w-0 overflow-hidden hidden
              transition-all duration-300 group-hover:max-w-[80px] group-hover:block"
            style={{ transitionProperty: "max-width, opacity" }}
          >
            Work
          </span>
          {/* Icon */}
          <span
            className="font-semibold text-xl sm:text-2xl text-black group-hover:text-white transition-colors duration-300">
            <i class="ri-folder-5-line"></i>
          </span>
        </a>

        <a
          href="/aman-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
    group flex items-center rounded-full
    transition-all duration-300
    bg-transparent hover:bg-black hover:px-[10px]
  "
        >
          {/* Text */}
          <span
            className="text-white text-sm font-medium mr-2 max-w-0 overflow-hidden hidden
    transition-all duration-300 group-hover:max-w-[80px] group-hover:block"
            style={{ transitionProperty: "max-width, opacity" }}
          >
            Resume
          </span>

          {/* Icon */}
          <span className="font-semibold text-xl sm:text-2xl text-black group-hover:text-white transition-colors duration-300">
            <i className="ri-article-line"></i>
          </span>
        </a>

        <span className="text-xl sm:text-2xl text-gray-500">|</span>
        <a
          href="#contact"
          className="flex gap-1 items-center bg-black text-sm text-white px-2 py-1 rounded-full hover:bg-green-600 duration-300"
        >
          Contact
        </a>

      </ul>
    </div>
  );
};

export default Navbar;
