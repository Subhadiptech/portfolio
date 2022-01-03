import React from 'react'

export default function Hero() {

    //make for mobile first without sm 
    return (
        <main className='bg-black h-max flex items-center justify-between custom-shape px-8'>

            <article className='text-white'>
                <h1 className='text-3xl pb-2 capitalize'>Hello, I'm <span className='text-yellow-400 capitalize'>Subhadip</span></h1>
                <p className='text-lg pb-2 capitalize'>type writer library will be used here later on!</p>
                 <section className='flex pt-4'>
                 <button className='bg-transparent border-2 border-yellow-400 p-2 hover:bg-yellow-400 hover:text-black'>About Me</button>
                 <button className='bg-yellow-400 px-2 hover:bg-transparent text-black hover:text-white hover:border-2 hover:border-yellow-400 ml-4'>Download CV</button>
                 </section>
                
            </article>

            <img className='object-fill' src='heroPage.png' alt='error'></img>



        </main>
    )
}
