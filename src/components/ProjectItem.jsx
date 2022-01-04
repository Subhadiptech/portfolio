import React from 'react'

export default function ProjectItem(props) {
    return (
        <div>
        <section className='mt-16 flex mx-4'>
        <aside className='block pr-12 sm:pr-44'>
        <h1 className='capitalize text-white text-3xl'>{props.title}</h1>
        <p className='capitalize text-white mt-12'>{props.description}</p>

        <button className='text-white bg-transparent border-2 border-yellow-400 py-1 px-4 mt-8 hover:text-black hover:bg-yellow-400'><a href={props.url} target='_black'>Open Project</a></button>
        </aside>

        <section>
        <img src={props.imageUrl} alt='broken-image' className='sm:h-80 sm:w-64 sm:mr-32 p-8'></img>
        </section>
        
        </section>
        </div>
    )
}
