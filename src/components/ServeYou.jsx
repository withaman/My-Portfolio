import React from 'react'

const ServeYou=()=> {
  return (
    <div className='flex flex-col items-center border mt-10 py-7 backdrop-blur-sm bg-white/20
border border-white/30
shadow-[0_8px_32px_rgba(255,255,255,0.15)]'>
        <h2 className='text-3xl text-center mb-10'>What I Can Serve You</h2>
        <div className='flex flex-wrap justify-center gap-5'>
            <div className='flex flex-col gap-3 w-96 bg-gray-300 rounded-2xl px-5 py-3'>
  <h3 className='text-2xl text-black font-semibold'>
    Website <span className='text-gray-600'>Development</span>
  </h3>
  <p className='text-gray-800'>
    Custom websites built with clean code, responsive design, and modern technologies to help your business grow online.
  </p>
  <button className='bg-black rounded-xl p-2 text-white w-full'>
    Let's Get Started
  </button>
  <div className='text-black'>
    <p>Custom website development</p>
    <hr className='h-[2px] bg-black my-1' />
    <p>Responsive on all devices</p>
    <hr className='h-[2px] bg-black my-1' />
    <p>Clean and modern UI</p>
    <hr className='h-[2px] bg-black my-1' />
    <p>Fast and optimized performance</p>
    <hr className='h-[2px] bg-black my-1' />
    <p>SEO-friendly structure</p>
    <hr className='h-[2px] bg-black my-1' />
  </div>
</div>

<div className='flex flex-col gap-3 w-96 bg-gray-300 rounded-2xl px-5 py-3'>
  <h3 className='text-2xl text-black font-semibold'>
    Web App <span className='text-gray-600'>Development</span>
  </h3>
  <p className='text-gray-800'>
    Full-stack web applications built for real business needs with scalable frontend, backend, and database integration.
  </p>
  <button className='bg-black rounded-xl p-2 text-white w-full'>
    Let's Get Started
  </button>
  <div className='text-black'>
    <p>Frontend and backend development</p>
    <hr className='h-[2px] bg-black my-1' />
    <p>API and database integration</p>
    <hr className='h-[2px] bg-black my-1' />
    <p>Admin panels and dashboards</p>
    <hr className='h-[2px] bg-black my-1' />
    <p>Business-focused solutions</p>
    <hr className='h-[2px] bg-black my-1' />
    <p>Ongoing support and updates</p>
    <hr className='h-[2px] bg-black my-1' />
  </div>
</div>
        </div>
    </div>
  )
}

export default ServeYou