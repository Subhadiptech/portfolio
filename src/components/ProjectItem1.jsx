import React from 'react';
import { TagCloud } from 'react-tagcloud'
import { GrGithub } from 'react-icons/gr';
import Tilt from 'react-parallax-tilt';

export default function ProjectItem1(props) {
    const data = [
        { value: 'Android', count: 35 },
        { value: 'Java', count: 30 },
        { value: 'Firebase', count: 28 },
        { value: 'SMS API', count: 12 }
      ]
    return (
        <Tilt>
        <div className='custom-bg py-8 sw-[32rem] sm:w-[32rem] border-t-2 border-yellow-500 drop-shadow-lg custom-shadow px-2 mx-4 overflow-hidden mt-4'>
           
            <aside className='flex flex-col items-start ml-4 mt-2'>
            <h1 className='uppercase tracking-wide text-yellow-500'>Android Development</h1>
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
