import React from 'react'
import Skill from './Skill'
import { gsap } from "gsap";

export default function About() {
    return (
        <main className='bg-transparent sm:flex block text-white mt-16 sm:mx-4 pb-4 mx-2' id='about'>
        
            <section className='flex flex-col items-center'>
                <h1 className='text-center text-gray-400 text-5xl capitalize tracking-wider'>About Me</h1>
                <div className='h-1 w-28 bg-white mt-2'></div>
                <p className='sm:text-xl mt-8 mx-16 text-center'>I am a Sophomore pursuing B.Tech in Electrical Engineering from National Institute of Technology, Jamshedpur. I am an Android Developer and an active open source contributor and currently practicing modern app development practices and jetpack components. I love to upskill my development skills everyday and always curious to learn new technologies. In my leisure time I love to play chess and listen to music.
                </p>
            </section>
        </main>

    )
}
