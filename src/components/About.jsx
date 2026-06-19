import React from 'react'

function About() {
  return (
    <div className='flex flex-col gap-6 rounded-3xl mt-5 px-6 py-8 
bg-white/10 backdrop-blur-lg border border-white/20
shadow-[0_8px_32px_rgba(255,255,255,0.08)]'>

      <div>
        <h2 className='text-3xl font-semibold text-white'>
          About Me
        </h2>

        <p className='text-white/80 mt-4 leading-7 text-[15px]'>
          I'm a Junior Web Developer passionate about turning ideas into modern and responsive web applications.
          I build full-stack projects using the MERN stack with clean UI, optimized backend logic, and scalable solutions.
        </p>

        <p className='text-white/70 mt-3 leading-7 text-[15px]'>
          I enjoy creating unique web experiences, smooth user interfaces, and visually appealing designs while constantly learning and improving as a developer.
        </p>
      </div>

      {/* Skills */}
      <div>
        <h3 className='text-xl font-semibold text-purple-500 mb-4'>
          Tech Stack
        </h3>

        <div className='flex flex-wrap gap-3'>
          {[
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "REST APIs",
            "JavaScript",
            "Git & GitHub",
          ].map((skill, index) => (
            <span
              key={index}
              className='px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div>
        <h3 className='text-xl font-semibold text-purple-500 mb-4'>
          Beyond Coding
        </h3>

        <div className='flex flex-wrap gap-3'>
          {[
            "Trekking",
            "Traveling",
            "Hiking",
            "Bike Rides",
            "Cinematography",
            "Filming",
            "Photoshop Editing",
            "Video Editing",
            "Content Creation",
          ].map((item, index) => (
            <span
              key={index}
              className='px-4 py-2 rounded-full bg-black/20 border border-white/10 text-white/80 text-sm'
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>

  )
}

export default About