import React from 'react'
import ProjectItem from './ProjectItem'

export default function Project() {
    return (
        <div className='bg-transaprent mt-8 pb-8'>
            <main className='block text-center'>

                <h1 className='mx-auto capitalize text-gray-400 text-5xl'>my Projects</h1>
                <div className='h-1 w-44 bg-white mt-4 mx-auto'></div></main>

           <ProjectItem title='MentOR' description='Hello World likhte likhte thak gya hu vro abb kuch or sikhna hai lekin mere se nhi ho payega kuyki mai noob hu lekin koshish jari hai. Sun ke dukh huya toh ro lena. Thanks' url='https://github.com/RahulSoni0/MentOR' imageUrl='demoProject.gif'/>

           <ProjectItem title='MentOR' description='Hello World likhte likhte thak gya hu vro abb kuch or sikhna hai lekin mere se nhi ho payega kuyki mai noob hu lekin koshish jari hai. Sun ke dukh huya toh ro lena. Thanks' url='https://github.com/RahulSoni0/MentOR' imageUrl='demoProject.gif'/>


        </div>
    )
}
