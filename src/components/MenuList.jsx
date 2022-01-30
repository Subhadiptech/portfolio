import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import { HashLink as L } from 'react-router-hash-link'

export default function MenuList() {
    return (
        
            <div className='radial-gradient pb-2'>

                <ul className='flex flex-col justify-center items-center text-white'>
                    <li className='p-2'><L className='align-center' to='#home' smooth>Home</L></li>
                    <li className='p-2'><L className='align-center' to='#about' smooth>About</L></li>
                    <li className='p-2'><L className='align-center' to='#projects' smooth>Projects</L></li>
                    <li className='p-2'><L className='align-center' to='#'>Blog</L></li>
                    <button className='p-2 w-full text-yellow-400'><L to='#contact' smooth>Contact Me</L></button>

                </ul>
            </div>
    )
}
