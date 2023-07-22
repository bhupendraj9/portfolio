import React from 'react'
import {data} from '../assets/Projectdata.js'
import Projectcad from './Projectcad.js'
import Carousel from 'react-material-ui-carousel'


const Projects = () => {
   
  return (
    <div className='my-10 flex flex-col md:items-center min-h-[500px] md:min-h-[500px]'>
       
        {/* */}
        <div className='text-center mx-auto text-4xl  font-bold drop-shadow-lg text-indigo-700'>PROJECTS</div>
   
        <Carousel  className='flex  flex-col items-center justify-center p-3 md:w-[600px]' >
            {
                data.map((project,index)=>{return <Projectcad key={index} text={project.text} git={project.git} image={project.image} link={project.link} title={project.title}></Projectcad>})
            }
        </Carousel>
       <div className='font-bold text-indigo-700 text-2xl text-center'>More to come...</div>
    </div>
  )
}

export default Projects