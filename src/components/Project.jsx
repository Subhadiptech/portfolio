import React from 'react'
import ProjectItem from './ProjectItem'
import ProjectItem1 from './ProjectItem1'
import ProjectItem2 from './ProjectItem2'

export default function Project() {
    return (
        <div className='bg-transaprent mt-8 pb-8' id='projects'>
            <main className='block text-center'>

            <p className='text-4xl sm:text-8xl text-sky-500'>my</p>
            <p className='text-6xl sm:text-[10rem] text-yellow-400 mt-[-24px] ml-12 sm:mt-[-64px] sm:ml-16'>Work</p>
        </main>
            <section className='flex justify-center mx-2 sm:mx-4 mt-8 flex-wrap'>
                <ProjectItem1 path='https://github.com/RahulSoni0/MentOR' title='MentOR' desc='It was a team project which leaded us to top 200 globally among 7000+ developers. It was based on Ed-Tech domain where we used trending courses to showcase at a single place...' />
                <ProjectItem path='https://github.com/Subhadiptech/LiveEdgeDetectionSDK' title='LiveEdgeDetection' desc='Kotlin based android project which uses openCV SDk to render the edges of any form of picture like snap, uploaded image or through url...' />
                <ProjectItem2 path='https://github.com/Subhadiptech/UrjaNITJSR' title='Urja-2022' desc='This was my college project which shows the live scores and leaderboard of all the different branches for Annual Sports Events...' />
                <ProjectItem1 path='https://github.com/' title='Medikamart' desc='It was a freelance project related to health care domain, which was built on clean architecture and production level design. With best UI the users can track Hospitals, Doctors or routine medications...' />
            </section>

        </div>
    )
}
