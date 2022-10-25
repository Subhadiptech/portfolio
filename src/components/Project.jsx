import React from 'react'
import ProjectItem from './ProjectItem'
import ProjectItem1 from './ProjectItem1'
import ProjectItem2 from './ProjectItem2'

export default function Project() {
    return (
        <div className='bg-transaprent mt-8 pb-8' id='projects'>
            <main className='block text-center'>

                <h1 className='text-center capitalize text-gray-400 text-5xl tracking-wider'>my Projects</h1>
                <div className='h-1 w-44 bg-white mt-4 mx-auto'></div></main>
            <section className='flex justify-evenly mx-2 sm:mx-4 mt-4 flex-wrap'>
                <ProjectItem path='https://github.com/' title='Project Name' desc='My main area of expertise currently is in front-end web development(client side of the web)...' />
                <ProjectItem1 path='https://github.com/' title='Project Name' desc='My main area of expertise currently is in front-end web development(client side of the web)...' />
                <ProjectItem2 path='https://github.com/' title='Project Name' desc='My main area of expertise currently is in front-end web development(client side of the web)...' />
                <ProjectItem1 path='https://github.com/' title='Project Name' desc='My main area of expertise currently is in front-end web development(client side of the web)...' />
                <ProjectItem path='https://github.com/' title='Project Name' desc='My main area of expertise currently is in front-end web development(client side of the web)...' />
                <ProjectItem2 path='https://github.com/' title='Project Name' desc='My main area of expertise currently is in front-end web development(client side of the web)...' />

            </section>

        </div>
    )
}
