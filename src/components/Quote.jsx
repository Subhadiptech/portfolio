import React from 'react'
import Typist from 'react-typist';

export default function Quote(props) {
    return (
        <div className='flex justify-center items-center my-16'>
            <Typist className='text-pink-500 sm:text-5xl text-4xl capitalize  font-Dance text-center'>{`<${props.quote}/>`}</Typist>
        </div>
    )
}
