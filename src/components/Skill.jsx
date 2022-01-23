import React from 'react'

export default function Skill(props) {
    return (
        <main>
            <ul className='mt-4'>
                <div className='flex items-center'><li className='w-12 h-12 p-1'><img src={props.url} alt={props.alt} className=''></img>

                </li>
                    <div className='rounded h-2 w-80 bg-gradient-to-r from-[#fee140] to-[#fa709a] ml-4'></div>
                </div>


            </ul>
        </main>
    )
}
