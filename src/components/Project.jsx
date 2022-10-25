import React from 'react'
import ProjectItem from './ProjectItem'
import ProjectItem1 from './ProjectItem1'
import ProjectItem2 from './ProjectItem2'

export default function Project() {
    return (
        <div className='bg-transaprent mt-8 pb-8' id='projects'>
            <main className='block text-center'>

            <p className='text-4xl sm:text-8xl text-sky-500'>my</p>
            <p className='text-6xl sm:text-[10rem] text-yellow-400 mt-[-24px] ml-12 sm:mt-[-64px] sm:ml-16'>Work</p>
        </main>
            <section className='flex justify-center mx-2 sm:mx-4 mt-8 flex-wrap'>
                <ProjectItem1 path='https://github.com/' title='Project Name' desc='My main area of expertise currently is in front-end web development(client side of the web)...' />
                <ProjectItem2 path='https://github.com/' title='Project Name' desc='My main area of expertise currently is in front-end web development(client side of the web)...' />
                <ProjectItem1 path='https://github.com/' title='Project Name' desc='My main area of expertise currently is in front-end web development(client side of the web)...' />
                <ProjectItem2 path='https://github.com/' title='Project Name' desc='My main area of expertise currently is in front-end web development(client side of the web)...' />

            </section>

        </div>
    )
}
