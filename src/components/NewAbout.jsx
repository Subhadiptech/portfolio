import React from 'react'
import { TagCloud } from 'react-tagcloud'

export default function NewAbout() {

    const data = [
        { value: 'Kotlin', count: 50 },
        { value: 'Java', count: 60 },
        { value: 'Android', count: 80 },
        { value: 'Firebase', count: 40 },
        { value: 'MVVM', count: 30 },
        { value: 'OOPS', count: 20 },
        { value: 'Android Studio', count: 50 },
        { value: 'Basic Javascript', count: 20 },
        { value: 'HTML', count: 30 },
        { value: 'CSS', count: 25 },
        { value: 'Tailwind CSS', count: 45 },
        { value: 'React JS', count: 20 }
      ]

  return (

    <div>
    <div className='hidden sm:flex mx-32 justify-center items-center'>
    
    <div className=''>
    <p className='text-8xl text-sky-500'>about</p>
    <p className='text-[10rem] text-yellow-400 mt-[-90px] ml-16'>Me</p>

    <p className='text-gray-300 w-[70%] text-xl'>I am Subhadipjshdfk sejhfk hwekf hewzkhf kewfkgjhszekjhfkeszhfkhewkfnjkeA Hg kfEN ghekl gklzeshg l,sehig leszlghilz,sekgl zeshgl hiesl ghlskzehigl,szheg klhszelkghilszkhigl szhelg ihszlg ilzsehiglszihlighszelkghileszhig lszjh liegihlsz ehijg lzsheg ilishze lghszl ,zdshfkaN;f :AfhlWIHgljES ljg lsehg lshelg eJSLofgl ejglSJEgl nslegheszg k le sh gsezhgiesih giohe w n0pk ;lhi glEJgio   i hwleghezlghlwehglw o o osehgkzeshgleshg ewhnes khgkeh Awf'o hszlg ilzsehiglszihlighszelkghileszhig lszjh liegihlsz ehijg lzsheg ilishze lghszl ,zdshfkaN;f :AfhlWIHgljES ljg lsehg lshelg eJSLofgl ejglSJEgl nslegheszg k le sh gsezhgiesih giohe w n0pk ;lhi glEJgio   i hwleghezlghlwehglw o o osehgkzeshgleshg ewhnes khgkeh Awf'osa</p>
    </div>

    <article className=''>
    <TagCloud
    minSize={20}
    maxSize={80}
    tags={data}
    shuffle='false'
  />
    </article>
       
    </div>

    <div className='flex flex-col sm:hidden mx-16 justify-center items-center'>
    
    <div className=''>
    <p className='text-4xl text-sky-500 text-center'>about</p>
    <p className='text-6xl text-yellow-400 mt-[-30px] ml-12 text-center'>Me</p>

    <p className='text-gray-300 text-md text-center'>I am Subhadipjshdfk sejhfk hwekf hewzkhf kewfkgjhszekjhfkeszhfkhewkfnjkeA Hg kfEN ghekl gklzeshg l,sehig leszlghilz,sekgl zeshgl hiesl ghlskzehigl,szheg klhszelkghilszkhigl szhelg ihszlg ilzsehiglszihlighszelkghileszhig lszjh liegihlsz ehijg lzsheg ilishze lghszl ,zdshfkaN;f :AfhlWIHgljES ljg lsehg lshelg eJSLofgl ejglSJEgl nslegheszg k le sh gsezhgiesih giohe w n0pk ;lhi glEJgio</p>
    </div>

    <article className='text-center'>
    <TagCloud
    minSize={6}
    maxSize={30}
    tags={data}
    shuffle='false'
  />
    </article>
       
    </div>
    </div>
  )
}
