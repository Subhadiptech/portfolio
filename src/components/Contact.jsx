import React from 'react'
import { GrLinkedin, GrTwitter, GrGithub, GrMail } from 'react-icons/gr'
import { SiGmail } from 'react-icons/si'


export default function Contact() {
    return (
        <div className='mt-8 pb-8 bg-transaprent' id='contact'>

            <main className='block text-center'>

                <h1 className='text-center capitalize text-gray-400 text-5xl tracking-wider'>contact me</h1>
                <div className='h-1 w-44 bg-white mt-4 mx-auto'></div></main>

            <main className='flex justify-evenly mt-6'>

                <li className='list-none'><a href='mailto:subhadipdhn@gmail.com' target='_blank'><SiGmail className='py-2 h-12 w-12 sm:h-16 sm:w-16 mt-4 fill-red-600 sm:hover:scale-105' /></a></li>
                <li className='list-none'><a href='https://www.linkedin.com/in/subhadipdhn/' target='_blank'><GrLinkedin className='py-2 h-12 w-12 sm:h-16 sm:w-16 mt-4 fill-blue-700 sm:hover:scale-105' /></a></li>
                <li className='list-none'><a href='https://twitter.com/Subhadipdhn' target='_blank'><GrTwitter className='py-2 h-12 w-12 sm:h-16 sm:w-16 mt-4 fill-sky-500 sm:hover:scale-105' /></a></li>
                <li className='list-none'><a href='https://github.com/Subhadiptech' target='_blank'><GrGithub className='py-2 h-12 w-12 sm:h-16 sm:w-16 mt-4 fill-slate-600 sm:hover:scale-105' /></a></li>

            </main>





        </div>
    )
}
