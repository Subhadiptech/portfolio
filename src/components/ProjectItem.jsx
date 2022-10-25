import React from 'react'
import { GrGithub } from 'react-icons/gr'
import { TagCloud } from 'react-tagcloud'
import Tilt from 'react-parallax-tilt';


export default function ProjectItem(props) {

    const data = [
        { value: 'Kotlin', count: 35 },
        { value: 'Firebase', count: 30 },
        { value: 'MVVM', count: 28 },
        { value: 'RoomDB', count: 12 }
      ]

    return (

      <Tilt>

        <div className='custom-bg py-8 w-[32rem] sm:w-[32rem] border-t-2 border-red-600 drop-shadow-lg custom-shadow px-2 overflow-hidden mt-4 mx-4'>

        <aside className='flex flex-col items-start ml-4 mt-4'>
        <h1 className='uppercase tracking-wide text-red-600'>Android Development</h1>
        <h1 className='text-white hover:text-red-600 capitalize text-2xl sm:text-4xl tracking-wide font-bold'>{props.title}</h1>
        </aside>
        <p className='text-gray-300 mx-4 mt-4'>
        {props.desc}</p>

        <section className='flex justify-between gap-1 mx-4 mt-8 items-center'>
        <TagCloud
        minSize={8}
        maxSize={20}
        tags={data}
      />
       
        <a href={props.path} target='_blank'><GrGithub className='fill-white h-8 w-8 cursor-pointer hover:fill-red-600'></GrGithub></a>
        </section>

           

        </div>
        </Tilt>
    )
}
