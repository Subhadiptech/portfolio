import React from 'react'
import { GrLinkedin, GrTwitter, GrGithub, GrMail } from 'react-icons/gr'
import { SiGmail } from 'react-icons/si'


export default function Contact() {
    return (
        <div className='mt-8 pb-8 bg-transaprent' id='contact'>

            <main className='block text-center'>

               <p className='text-4xl sm:text-8xl text-sky-500'>contact</p>
            <p className='text-6xl sm:text-[10rem] text-yellow-400 mt-[-24px] ml-12 sm:mt-[-64px] sm:ml-16'>Me</p>
                </main>

            <main className='flex mx-16 sm:mx-0 justify-center sm:justify-center mt-6 flex-wrap'>

                <li className='list-none mx-2 sm:mx-6'><a href='mailto:subhadipdhn@gmail.com' target='_blank'><SiGmail className='py-2 h-12 w-12 sm:h-16 sm:w-16 mt-4 fill-red-600 sm:hover:scale-105' /></a></li>
                <li className='list-none mx-2 sm:mx-6'><a href='https://www.linkedin.com/in/subhadipdhn/' target='_blank'><GrLinkedin className='py-2 h-12 w-12 sm:h-16 sm:w-16 mt-4 fill-blue-700 sm:hover:scale-105' /></a></li>
                <li className='list-none mx-2 sm:mx-6'><a href='https://twitter.com/Subhadipdhn' target='_blank'><GrTwitter className='py-2 h-12 w-12 sm:h-16 sm:w-16 mt-4 fill-sky-500 sm:hover:scale-105' /></a></li>
                <li className='list-none mx-2 sm:mx-6'><a href='https://github.com/Subhadiptech' target='_blank'><GrGithub className='py-2 h-12 w-12 sm:h-16 sm:w-16 mt-4 fill-slate-600 sm:hover:scale-105' /></a></li>

            </main>





        </div>
    )
}
