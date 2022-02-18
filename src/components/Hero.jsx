import React from 'react'
import Typist from 'react-text-typist';
import { HashLink as L } from 'react-router-hash-link'
export default function Hero() {


    return (
        <div className='mt-16' id='home'>
    
            <main className='hidden bg-transparent z-50 items-center justify-between px-8 sm:flex'>

                <article className='m-auto text-white ml-32'>
                    <h1 className='sm:text-7xl text-3xl pb-2 capitalize'>Hello, I'm <span className='text-yellow-400 capitalize sm:text-7xl text-3xl font-Name'>Subhadip</span></h1>
                    <Typist className='sm:text-3xl text-md mt-4 capitalize' sentences={['Android & Web Developer 👨‍💻', 'creative designs 🚀', 'Open Source Contributor 🌝','In love with communities 💚']} loop={true} />
                    <section className='flex mt-4'>
                        <button className='bg-transparent border-2 border-yellow-400 p-2 hover:bg-yellow-400 hover:text-black hover:font-bold'>About Me</button>
                        <button className='bg-yellow-400 border-2 border-transparent px-2 hover:bg-transparent text-black hover:text-white hover:border-2 hover:border-yellow-400 ml-4 font-bold hover:font-normal'><a href='CV_NEW.pdf' download>Download CV</a></button>
                    </section>
                </article>
                <img className='object-fill h-[500px]' src='heroPage.png' alt='error'></img>

               

            </main>
            <main className='sm:hidden bg-transparent z-50 items-center justify-between custom-shape pb-2 px-8 flex flex-col-reverse'>

                <article className='text-white'>
                    <h1 className='text-3xl pb-2 capitalize text-center'>Hello, I'm <span className='text-yellow-400 capitalize font-Name'>Subhadip</span></h1>
                    <Typist className='text-lg pb-2 capitalize text-center'>Android Developer</Typist>
                    <section className='flex justify-center pt-4'>
                        <button className='bg-transparent border-2 border-yellow-400 p-2 hover:bg-yellow-400 hover:text-black hover:font-bold'>About Me</button>
                        <button className='bg-yellow-400 border-2 border-transparent px-2 hover:bg-transparent text-black hover:text-white hover:border-2 hover:border-yellow-400 ml-4 font-bold'>Download CV</button>
                    </section>
                </article>

                <img className='object-fill h-[280px]' src='heroPage.png' alt='error'></img>

            </main>
        </div>
    )
}
