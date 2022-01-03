import React from 'react'

export default function Hero() {

    //make for mobile first without sm 
    return (
        <main className='bg-black flex items-center px-10'>

            <article className='text-white'>
                <h1 className='text-3xl pb-2'>Hello, I'm <span className='text-yellow-400'>Subhadip</span></h1>
                <p className='text-xl pb-2'>Who I am What I do etc</p>
                 <section className='flex pt-4'>
                 <button className='bg-transparent border-2 border-yellow-400 p-2 hover:bg-yellow-400 hover:text-black'>About Me</button>
                 <button className='bg-yellow-400 px-2 hover:bg-transparent text-black hover:text-white hover:border-2 hover:border-yellow-400 ml-4'>Download CV</button>
                 </section>
                
            </article>

            <img className='mx-auto object-fill' src='heroPage.png' alt='error'></img>



        </main>
    )
}
