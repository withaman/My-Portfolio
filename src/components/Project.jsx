import React from 'react'
import ProjectsCard from './ProjectsCard'
import { CardData } from '../assets/assets'

const Project = () => {

    return (
        <div>
            <h2 className='text-4xl text-white text-center mt-5 mb-10'>Projects</h2>
            <div className='flex flex-wrap justify-center gap-10'>
                {CardData.map((i, index) => (
                    <ProjectsCard Title={i.Title} Type={i.Type} Image={i.Image} Year={i.Year} Bgcolor={i.Bgcolor} TextColor={i.TextColor} Description={i.Description} Learning={i.Learning} Shadow={i.Shadow} />
                ))}
            </div>
        </div>
    )
}

export default Project