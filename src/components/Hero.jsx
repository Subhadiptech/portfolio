import React from 'react'
import Typist from 'react-text-typist';
import { HashLink as L } from 'react-router-hash-link'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


export default function Hero() {
    return (
        <div className='mt-16'>
            <div className='mt-4' id='home'>

                <main className='hidden bg-transparent items-center justify-between sm:flex'>

                    <article className=' text-white ml-32'>
                        <h1 className='sm:text-7xl text-3xl pb-2 capitalize'>
                            <span className='text-hover font-head tracking-wider '>H</span>
                            <span className='text-hover font-head tracking-wider '>e</span>
                            <span className='text-hover font-head tracking-wider '>l</span>
                            <span className='text-hover font-head tracking-wider '>l</span>
                            <span className='text-hover font-head tracking-wider  '>o</span>
                            <span className='text-hover font-head tracking-wider '>, I</span>
                            <span className='text-hover font-head tracking-wider '>'m</span>
                            <span className='text-yellow-400 capitalize sm:text-7xl text-3xl font-Name'> Subhadip</span></h1>
                        <Typist className='sm:text-3xl text-md mt-4 capitalize text-green-500' sentences={['Android Developer', 'Mobile Designs', 'Open Source Contributor', 'Product Designs']} loop={true} />
                        <section className='flex mt-12'>
                            <section className=''>
                                <AwesomeButton type="primary" ripple='true'>About Me</AwesomeButton>
                            </section>
                            <section className='ml-4'>
                                <AwesomeButton type="primary" ripple='true'>Download CV</AwesomeButton>
                            </section>

                        </section>
                    </article>
                    <img className='opacity-40' src='hero_main.png' alt='error'></img>



                </main>
                <main className='sm:hidden bg-transparent z-50 pb-2 px-8 flex flex-col-reverse justify-center'>


                    <article className='text-white'>
                        <h1 className='text-3xl pb-2 capitalize text-center font-head text-hover'>Hello, I'm <span className='text-yellow-400 capitalize font-Name'>Subhadip</span></h1>
                        <article className='flex justify-center items-center'>
                        <Typist className='sm:text-3xl text-md mt-4 capitalize text-green-500' sentences={['Android Developer', 'Mobile Designs', 'Open Source Contributor', 'Product Designs']} loop={true} />
                        </article>
                        <section className='flex justify-center mt-8'>
                            <section className=''>
                                <AwesomeButton type="primary" ripple='true'>About Me</AwesomeButton>
                            </section>
                            <section className='ml-4'>
                                <AwesomeButton type="primary" ripple='true'>Download CV</AwesomeButton>
                            </section>
                        </section>
                    </article>

                    <img className='object-fill h-[280px] opacity-40' src='hero_main.png' alt='error'></img>

                </main>
            </div>
        </div >
    )
}
