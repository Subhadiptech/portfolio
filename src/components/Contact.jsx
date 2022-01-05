import React from 'react'
import { GrLinkedin,GrTwitter,GrGithub } from 'react-icons/gr'

export default function Contact() {
    return (
        <div className='mt-8 pb-8 bg-transaprent '>

        
        <main className='block text-center'>

            <h1 className='mx-auto capitalize text-gray-400 text-5xl'>contact me</h1>
            <div className='h-1 w-44 bg-white mt-4 mx-auto'></div></main>

      

        <main className='mx-4'>
        
        <article className='mt-12 radial-gradient mx-auto sm:mx-16 rounded-md z-50 shadow-md shadow-gray-900 py-8 px-4'>
        <h1 className='text-white text-xl text-center mt-2'>Fill the details and send the message to me!</h1>

        <form className='flex flex-col'>

        <label className='text-lg text-gray-400 mt-8 capitalize' for="username">
        Name
      </label>
      <input className='pl-2 mt-2 text-black rounded-md h-12 border-2 border-gray-500 focus:border-yellow-400 focus:border-2  focus:outline-none focus:shadow-outline leading-tight shadow appearance-none' type='text' placeholder='Name' />
      <label className='text-lg text-gray-400 mt-8 capitalize' for="username">
      Email
    </label>
    <input className='pl-2 mt-2 text-black rounded-md h-12 border-2 border-gray-500 focus:border-yellow-400 focus:border-2   focus:outline-none focus:shadow-outline leading-tight shadow appearance-none' type='email' placeholder='Email' />
    <label className='text-lg text-gray-400 mt-8 capitalize' for="username">
        Message
      </label>
      <input className='pl-2 mt-2 text-black rounded-md h-32 border-2 border-gray-500 focus:border-yellow-400 focus:border-2   focus:outline-none focus:shadow-outline leading-tight shadow appearance-none' type='text' placeholder='Write your message here ...' />

      <input className='mt-12 h-12 p-1 mx-2 bg-red-500 hover:bg-red-700 rounded-sm text-white' type='submit'/>
        </form>

        <section className='text-center mt-4'>
        <h1 className='text-white capitalize'>or connect me on</h1>
        <ul className='flex justify-center items-center'>
        <li><a href='https://www.linkedin.com/in/subhadipdhn/' target='_blank' className=''><GrLinkedin className='fill-white py-2 h-8 w-8 mt-4 hover:fill-blue-700' /></a></li>
        <li><a href='https://twitter.com/Subhadipdhn' target='_blank' className=''><GrTwitter className='fill-white py-2 h-8 mt-4 w-8 hover:fill-sky-500' /></a></li>
        <li><a href='https://github.com/Subhadiptech' target='_blank' className=''><GrGithub className='fill-white py-2 h-8 mt-4 w-8 hover:fill-slate-600' /></a></li>
        </ul>
       
        </section>
        
        </article>
        
       

        
        
        </main>


        </div>
    )
}
