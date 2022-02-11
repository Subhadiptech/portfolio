import React from 'react'
import ProjectItem from './ProjectItem'

export default function Project() {
    return (
        <div className='bg-transaprent mt-8 pb-8' id='projects'>
            <main className='block text-center'>

                <h1 className='text-center capitalize text-gray-400 text-5xl tracking-wider'>my Projects</h1>
                <div className='h-1 w-44 bg-white mt-4 mx-auto'></div></main>

                <ProjectItem/>
        </div>
    )
}
