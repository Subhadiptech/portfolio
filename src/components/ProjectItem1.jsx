import React from 'react';
import { TagCloud } from 'react-tagcloud'
import { GrGithub } from 'react-icons/gr';
import Tilt from 'react-parallax-tilt';

export default function ProjectItem1(props) {
    const data = [
        { value: 'React', count: 35 },
        { value: 'Nodejs', count: 30 },
        { value: 'MongoDB', count: 28 },
        { value: 'Expressjs', count: 12 }
      ]
    return (
        <Tilt>
        <div className='custom-bg w-92 sm:w-92 h-64 border-t-2 border-yellow-500 drop-shadow-lg custom-shadow p-2 overflow-hidden mt-4 mx-4'>
           
            <aside className='flex flex-col items-start ml-4 mt-2'>
            <h1 className='uppercase tracking-wide text-yellow-500'>Web Development</h1>
            <h1 className='text-white hover:text-yellow-500 capitalize text-2xl sm:text-4xl tracking-wide'>{props.title}</h1>
            </aside>
            <p className='text-white mx-4 mt-4'>
            {props.desc}</p>

            <section className='flex justify-between gap-1 mx-4 mt-8 items-center'>
            <TagCloud
            minSize={8}
            maxSize={20}
            tags={data}
            onClick={tag => {
                //todo:hover color change
            }}
  
          />
          <a href={props.path} target='_blank'><GrGithub className='fill-white h-8 w-8 cursor-pointer hover:fill-yellow-500'></GrGithub></a>
            </section>

        </div></Tilt>
    )
}
