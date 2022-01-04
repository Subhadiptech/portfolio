import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import MenuList from './MenuList'

export default function Head() {

    const [toggle, setToggle] = useState(false)


    function toggleMenu() {
        setToggle(!toggle)
    }

    return (
        <div className='relative'>
            <nav className='sm:fixed z-50 sm:top-0 sm:left-0 sm:right-0 bg-black text-white h-16 flex justify-between items-center border-b-[1px] border-white'>
                <img className='w-20 p-2 h-16 cursor-pointer' src='logo.png' alt='logo'></img>
                <ul className='sm:flex hidden'>
                    <li className='p-2'><a className='hover:text-yellow-400' href='#'>Home</a></li>
                    <li className='p-2'><a className='hover:text-yellow-400' href='#'>About</a></li>
                    <li className='p-2'><a className='hover:text-yellow-400' href='#'>Projects</a></li>
                    <li className='p-2'><a className='hover:text-yellow-400' href='#'>Blog</a></li>
                    <button className='bg-yellow-400 hover:bg-transparent hover:border-2 hover:border-yellow-400 p-2 mr-4 rounded align-middle text-black hover:text-white'>Contact Me</button>
                </ul>
                <button className='sm:hidden' onClick={toggleMenu}><GiHamburgerMenu className='sm:hidden mx-4' /></button>

            </nav>
            {toggle ? <MenuList /> : null}

        </div>
    )
}
