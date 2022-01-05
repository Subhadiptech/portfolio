import React from 'react'

export default function Quote(props) {
    return (
        <div className='flex justify-center items-center my-16'>
            <h1 className='text-pink-500 sm:text-5xl text-4xl capitalize  font-Dance text-center'>{`<${props.quote}/>`}</h1>
        </div>
    )
}
