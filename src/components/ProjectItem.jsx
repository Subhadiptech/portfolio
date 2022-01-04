import React from 'react'

export default function ProjectItem(props) {
    return (
        <div>
        <section className='mt-16 flex mx-4'>
        <aside className='block pr-12'>
        <h1 className='capitalize text-white text-3xl'>{props.title}</h1>
        <p className='capitalize text-white mt-12'>{props.description}</p>

        <button className='text-black font-bold bg-yellow-400 py-1 px-4 mt-8'><a href={props.url} target='_black'>Open Project</a></button>
        </aside>

        <section>
        <img src={props.imageUrl} alt='broken-image' className=''></img>
        </section>
        
        </section>
        </div>
    )
}
