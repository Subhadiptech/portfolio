import React from 'react'
import ProjectItem from './ProjectItem'

export default function Project() {
    return (
        <div className='bg-black mt-8 pb-8'>
            <main className='block text-center'>

                <h1 className='mx-auto capitalize text-gray-400 text-5xl'>my Projects</h1>
                <div className='h-1 w-44 bg-white mt-4 mx-auto'></div></main>

           <ProjectItem title='MentOR' description='This Is The Project Description Which Details About The Project And Showcases What Actually It Does So We Can Basically Show Our Portfolio Projects Pretty Well Designed And Stuff And I Am A Noob Programmer So I Am Learning Everything Slowly And Consistently' url='https://github.com/RahulSoni0/MentOR' imageUrl='demoProject.gif'/>
           <ProjectItem title='MentOR' description='This Is The Project Description Which Details About The Project And Showcases What Actually It Does So We Can Basically Show Our Portfolio Projects Pretty Well Designed And Stuff And I Am A Noob Programmer So I Am Learning Everything Slowly And Consistently' url='https://github.com/RahulSoni0/MentOR' imageUrl='demoProject.gif'/>

        </div>
    )
}
