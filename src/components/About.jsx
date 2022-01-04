import React from 'react'
import Skill from './Skill'
import { gsap } from "gsap";

export default function About() {
    return (
        <main className='bg-black sm:flex block text-white mt-16 sm:mx-4 pb-4 mx-2'>
            <section className='sm:mr-4 sm:w-[70%] sm:pr-40'>
            <h1 className='text-gray-400 text-5xl capitalize'>About Me</h1>
            <div className='h-1 w-20 bg-white mt-2'></div>  
            <p className=' sm:text-start mt-4'>I am a Sophomore pursuing B.Tech in Electrical Engineering from National Institute of Technology, Jamshedpur. I am an Android Developer and an active open source contributor and currently practicing modern app development practices and jetpack components. I love to upskill my development skills everyday and always curious to learn new technologies. In my leisure time I love to play chess and listen to music.
            </p>            
            </section>

            <section className='flex flex-col sm:mt-0 mt-8 sm:justify-self-center'>
            <h1 className='text-gray-400 text-5xl capitalize'>Skills</h1>
            <div className='h-1 w-20 bg-white mt-2'></div>  
            
            <Skill url='html.png' alt='html'/>
            <Skill url='css.png' alt='css'/>
            <Skill url='js.png' alt='js'/>
            <Skill url='java.png' alt='java'/>
           
            
            
            </section>
        </main>

    )
}
