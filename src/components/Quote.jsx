import React from 'react'



export default function Quote(props) {

   

    return (
        <div className='flex justify-center items-center my-16'>
            <p className='text-gray-800 sm:text-5xl text-4xl capitalize  font-Dance text-center'>{`<${props.quote}/>`}</p>
        </div>
    )
}
