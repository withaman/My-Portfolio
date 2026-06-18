import React from "react";

const ServeYou = () => {
  return (
    <div className="flex flex-col items-center mt-10 py-8 px-4 backdrop-blur-sm bg-white/20 border border-white/30 shadow-[0_8px_32px_rgba(255,255,255,0.15)] rounded-2xl">
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-white mb-8">
        What I Can Serve You
      </h2>

      <div className="flex flex-wrap justify-center gap-6 w-full">

        {/* Website Development */}
        <div className="flex flex-col gap-4 w-full max-w-md bg-gray-300 rounded-2xl p-5">
          <h3 className="text-xl sm:text-2xl text-black font-semibold">
            Website <span className="text-gray-600">Development</span>
          </h3>

          <p className="text-gray-800 text-sm sm:text-base">
            Custom websites built with clean code, responsive design, and
            modern technologies to help your business grow online.
          </p>

          <button className="bg-black rounded-xl p-3 text-white w-full hover:bg-gray-800 duration-300">
            Let's Get Started
          </button>

          <div className="text-black text-sm sm:text-base">
            <p>Custom website development</p>
            <hr className="border-black my-2" />

            <p>Responsive on all devices</p>
            <hr className="border-black my-2" />

            <p>Clean and modern UI</p>
            <hr className="border-black my-2" />

            <p>Fast and optimized performance</p>
            <hr className="border-black my-2" />

            <p>SEO-friendly structure</p>
          </div>
        </div>

        {/* Web App Development */}
        <div className="flex flex-col gap-4 w-full max-w-md bg-gray-300 rounded-2xl p-5">
          <h3 className="text-xl sm:text-2xl text-black font-semibold">
            Web App <span className="text-gray-600">Development</span>
          </h3>

          <p className="text-gray-800 text-sm sm:text-base">
            Full-stack web applications built for real business needs with
            scalable frontend, backend, and database integration.
          </p>

          <button className="bg-black rounded-xl p-3 text-white w-full hover:bg-gray-800 duration-300">
            Let's Get Started
          </button>

          <div className="text-black text-sm sm:text-base">
            <p>Frontend and backend development</p>
            <hr className="border-black my-2" />

            <p>API and database integration</p>
            <hr className="border-black my-2" />

            <p>Admin panels and dashboards</p>
            <hr className="border-black my-2" />

            <p>Business-focused solutions</p>
            <hr className="border-black my-2" />

            <p>Ongoing support and updates</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServeYou;