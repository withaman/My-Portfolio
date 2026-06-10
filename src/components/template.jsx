import React from 'react'

const ProjectsCard = ({ Title, Type, Image, Year, Bgcolor, TextColor }) => {
    return (

        <div> <div className='p-3 bg-gradient-to-tr from-purple-500 via-purple-400 to-b-purple-300 w-[30rem] rounded-xl shadow-[0_0_20px_rgba(145,52,154,0.9)]
'>
            <div className='flex text-black font-semibold justify-between pb-2'>
                <p>{Year}</p>
                <p>{Type}</p>
            </div>
            <hr className="h-[2px] bg-gradient-to-r from-white via-gray-100 to-black" />
            <div className='flex flex-col gap-3'>
                <p className='text-2xl font-bold py-2'>The Travel Guide Website Project is a user-friendly platform designed to provide comprehensive.</p>
                <div className='flex justify-between'>
                    <p className='w-1/2 pr-5'>I gained practical skills in structuring content, applying styles, and creating responsive layouts.</p>
                    <p className='w-1/2 pr-5'> project helps people by providing clear and organized information about Mussoorie.</p>
                </div>
                <p className='px-2 rounded-xl w-fit border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]'>Designed using HTML and CSS </p>
                <img src="src\assets\M-TravelGuide.png" alt="" className='rounded-xl' />
            </div>
        </div>
        </div >
    )
}

export default ProjectsCard