import React from 'react'

const ProjectsCard = ({ Title, Type, Image, Year, Bgcolor, TextColor, Description, Learning, Shadow }) => {
    return (

        <div>
            <div className={`p-3 ${Bgcolor} ${TextColor} ${Shadow} w-[30rem] rounded-xl `}>
                <div className='flex  font-semibold justify-between pb-2'>
                    <p>{Year}</p>
                    <p className='text-white'>{Type}</p>
                </div>
                <hr className="h-[2px] bg-gradient-to-r from-white via-gray-100 to-black" />
                <div className='flex flex-col gap-3'>
                    <p className='text-2xl font-bold py-2'>{Title}</p>
                    <div className='flex justify-between'>
                        <p className='w-1/2 pr-5'> {Description}</p>
                        <p className='w-1/2 pr-5'> {Learning}.</p>
                    </div>
                    <p className='px-2 rounded-xl w-fit border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]'>Designed using HTML and CSS </p>
                    <img src={Image} alt="" className='rounded-xl' />
                </div>
            </div>
        </div >
    )
}

export default ProjectsCard