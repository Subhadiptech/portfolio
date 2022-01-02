import React from 'react'

export default function header() {
    return (
        <nav className='bg-gray-800 text-white h-16 flex justify-between items-center z-10 sticky'>
            <img className='w-20 p-2 h-16' src='logo.png' alt='logo'></img>
            <ul className='flex'>
                <li className='p-2'><a className='hover:text-yellow-400' href='#'>Home</a></li>
                <li className='p-2'><a className='hover:text-yellow-400' href='#'>About</a></li>
                <li className='p-2'><a className='hover:text-yellow-400' href='#'>Projects</a></li>
                <li className='p-2'><a className='hover:text-yellow-400' href='#'>Blog</a></li>
            </ul>

            <button className='bg-yellow-400 hover:bg-transparent hover:border-2 hover:border-yellow-400 p-2 mr-4 rounded align-middle text-black hover:text-white'>Contact Me</button>

        </nav>
    )
}
