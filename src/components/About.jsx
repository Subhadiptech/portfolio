import React from 'react'
import Skill from './Skill'
import { TagCloud } from 'react-tagcloud'

export default function About() {

    const data = [
        { value: 'JavaScript', count: 38 },
        { value: 'React', count: 30 },
        { value: 'Nodejs', count: 28 },
        { value: 'Express.js', count: 25 },
        { value: 'HTML5', count: 33 },
        { value: 'MongoDB', count: 18 },
        { value: 'CSS3', count: 20 },
      ]

    return (
        <main className='bg-transparent sm:flex block text-white mt-16 sm:mx-4 pb-4 mx-2' id='about'>
        
            <section className='flex flex-col items-center'>
                <h1 className='text-center text-gray-400 text-5xl capitalize tracking-wider'>About Me</h1>
                <div className='h-1 w-28 bg-white mt-2'></div>
                <p className='sm:text-xl mt-8 mx-16 text-center'>I am a Sophomore pursuing B.Tech in Electrical Engineering from National Institute of Technology, Jamshedpur. I am an Android Developer and an active open source contributor and currently practicing modern app development practices and jetpack components. I love to upskill my development skills everyday and always curious to learn new technologies. In my leisure time I love to play chess and listen to music.
                </p>
                <TagCloud
          minSize={12}
          maxSize={35}
          tags={data}
          onClick={tag => {
              //todo:hover color change
          }}

        />
            </section>
        </main>

    )
}
