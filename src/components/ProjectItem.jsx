import React from 'react'
import { GrAndroid,GrCode } from 'react-icons/gr'

export default function ProjectItem() {
    return (
        <div className='custom-bg w-80 h-64 border-t-2 border-red-600 drop-shadow-lg shadow-black p-2 overflow-scroll mt-4 mx-4 hover:scale-105 transition ease-out delay-250 hover:transition hover:ease-in hover:delay-200'>
           
            <aside className='flex justify-between items-center mx-4 mt-2'>
            <h1 className='text-red-600 capitalize text-2xl sm:text-4xl tracking-wide'>Project Name</h1>
            <GrAndroid className='fill-green-500 h-8 w-8'></GrAndroid>
            </aside>
            <p className='text-white mx-4 mt-4'>
            My main area of expertise currently is in front-end web development(client side of the web)...</p>

            <section className='flex justify-start gap-1 mx-4 mt-8'>
              <li className='list-none text-red-600 flex self-center justify-self-center text-center p-1 text-sm'>Kotlin</li>
              <li className='list-none text-red-600 flex self-center justify-self-center text-center p-1 text-sm'>Firebase</li>
              <li className='list-none text-red-600 flex self-center justify-self-center text-center p-1 text-sm'>MVVM Architecture</li>
              <li className='list-none text-red-600 flex self-center justify-self-center text-center p-1 text-sm'>Sqlite</li>
            </section>

        </div>
    )
}
