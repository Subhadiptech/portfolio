import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import MenuList from './MenuList'
import {BrowserRouter as Router} from "react-router-dom"
import { HashLink as L } from 'react-router-hash-link'
import { Scrollbars } from 'react-custom-scrollbars';

export default function Head() {

    const [toggle, setToggle] = useState(false)


    function toggleMenu() {
        setToggle(!toggle)
    }

    return (
        <Router>
        
            <div className='relative'>
                <nav className='sm:fixed sm:top-0 sm:left-0 sm:right-0 radial-gradient text-white h-16 flex justify-between items-center'>
                    <img className='w-24 p-2 h-20 cursor-pointer' src='logoNoBg.png' alt='logo'></img>
                    <ul className='sm:flex hidden'>
                        <li className='p-2'><L className='hover:text-yellow-400' to='#home' smooth>Home</L></li>
                        <li className='p-2'><L className='hover:text-yellow-400' to='#about' smooth>About</L></li>
                        <li className='p-2'><L className='hover:text-yellow-400' to='#projects' smooth>Projects</L></li>
                        <li className='p-2'><L className='hover:text-yellow-400' to=''>Blog</L></li>
                        <button className='bg-yellow-400 hover:bg-transparent hover:border-2 ml-8 hover:border-yellow-400 p-2 mr-4 align-middle text-black hover:text-white font-bold'><L to='#contact' smooth>Contact Me</L></button>
                    </ul>
                    <button className='sm:hidden' onClick={toggleMenu}><GiHamburgerMenu className='sm:hidden mx-4'/></button>

                </nav>
                {toggle ? <MenuList /> : null}

            </div>
        </Router>
    )
}
