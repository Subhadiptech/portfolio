import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import MenuList from './MenuList'
import {BrowserRouter as Router} from "react-router-dom"
import { HashLink as L } from 'react-router-hash-link'
import { motion } from 'framer-motion'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


export default function Head() {

    const [toggle, setToggle] = useState(false)

    function toggleMenu() {
        setToggle(!toggle)
    }

    return (
        <Router>
        
            <div className='relative'>
                <nav className='radial-gradient text-white h-16 flex justify-between items-center'>
                    <img className='w-24 p-2 h-20 cursor-pointer' src='logoNoBg.png' alt='logo'></img>
                    <ul className='sm:flex hidden'>
                        <li className='p-2'><L className='hover:text-yellow-400' to='#home' smooth>Home</L></li>
                        <li className='p-2'><L className='hover:text-yellow-400' to='#about' smooth>About</L></li>
                        <li className='p-2'><L className='hover:text-yellow-400' to='#projects' smooth>Projects</L></li>
                        <li className='p-2'><a className='hover:text-yellow-400' href='https://learndroid.hashnode.dev/' target='_blank'>Blog</a></li>
                        <section className='mr-4 ml-2'>
                                <AwesomeButton type="secondary" ripple='true'><L className='' to='#contact' smooth>Contact Me</L></AwesomeButton>
                            </section>
                    </ul>
                    <button className='sm:hidden' onClick={toggleMenu}><GiHamburgerMenu className='sm:hidden mx-4'/></button>

                </nav>
                {toggle ? <motion.div animate={{ z: 10 }}
                transition={{ ease: "easeInOut", duration: 0.5}}>
                    <MenuList />
                    </motion.div> : null}

            </div>
        </Router>
    )
}
