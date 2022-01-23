import React from 'react'

export default function MenuList() {
    return (
        <div className='radial-gradient pb-2'>

            <ul className='flex flex-col justify-center items-center text-white'>
                <li className='p-2'><a className='align-center' href='#'>Home</a></li>
                <li className='p-2'><a className='align-center' href='#'>About</a></li>
                <li className='p-2'><a className='align-center' href='#'>Projects</a></li>
                <li className='p-2'><a className='align-center' href='#'>Blog</a></li>
                <button className='p-2 w-full text-yellow-400'>Contact Me</button>

            </ul>
        </div>
    )
}
