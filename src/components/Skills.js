import React from 'react'
import { FaDotCircle } from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='bg-white pb-20 flex justify-around pt-5 items-center flex-wrap gap-10 '>
    <div className='flex flex-col gap-4'>
    <div className='flex flex-col gap-1'>
      <div className='font-bold text-indigo-600 text-xl flex items-center gap-2'><FaDotCircle></FaDotCircle> Programming Languages</div>
      <div className='font-bold text-gray-800 pl-6'>C, C++ , Java</div>
    </div>

    <div className='flex flex-col gap-1'>
      <div className='font-bold text-indigo-600 text-xl flex items-center gap-2'><FaDotCircle></FaDotCircle> Web Technologies</div>
      <div className='font-bold text-gray-800 pl-6'>HTML, CSS ,Tailwind , Javascript</div>
      <div className='font-bold text-gray-800 pl-6'>Express JS, React JS</div>
    </div>

    <div className='flex flex-col gap-1'>
      <div className='font-bold text-indigo-600 text-xl flex items-center gap-2'><FaDotCircle></FaDotCircle> Database management</div>
      <div className='font-bold text-gray-800 pl-6'>MySQL, MongoDB</div>
    </div>

    <div className='flex flex-col gap-1'>
      <div className='font-bold text-indigo-600 text-xl flex items-center gap-2'><FaDotCircle></FaDotCircle>Tools</div>
      <div className='font-bold text-gray-800 pl-6'>GitHub, Vercel , Netlify</div>
    </div>
        
    </div>
        
       <div className='flex flex-col gap-5 items-center'>
        <div className='flex gap-5'>
        <img src="https://skillicons.dev/icons?i=cpp" className='hover:scale-110' title='C++' loading='lazy' alt="skills logos" /> 
        <img src="https://skillicons.dev/icons?i=c" className='hover:scale-110' title='C' loading='lazy' alt="skills logos" /> 
        <img src="https://skillicons.dev/icons?i=java" className='hover:scale-110' title='java' loading='lazy' alt="skills logos" /> 
        <img src="https://skillicons.dev/icons?i=github" className='hover:scale-110' title='github' loading='lazy' alt="skills logos" /> 
        </div>
        

        <div className='flex gap-5'>
        <img src="https://skillicons.dev/icons?i=html" className='hover:scale-110' title='html' loading='lazy' alt="skills logos" /> 
        <img src="https://skillicons.dev/icons?i=css" className='hover:scale-110' title='css' loading='lazy' alt="skills logos" /> 
        <img src="https://skillicons.dev/icons?i=javascript" className='hover:scale-110' title='javascript' loading='lazy' alt="skills logos" /> 
        <img src="https://skillicons.dev/icons?i=tailwind" className='hover:scale-110' title='tailwind' loading='lazy' alt="skills logos" /> 
         
        </div>
       


        <div className='flex gap-5'>
        <img src="https://skillicons.dev/icons?i=react" className='hover:scale-110' title='react' loading='lazy' alt="skills logos" /> 
        <img src="https://skillicons.dev/icons?i=express" className='hover:scale-110' title='express' loading='lazy' alt="skills logos" /> 
        <img src="https://skillicons.dev/icons?i=mongodb" className='hover:scale-110' title='mongodb' loading='lazy' alt="skills logos" /> 
        <img src="https://skillicons.dev/icons?i=mysql" className='hover:scale-110' title='mysql' loading='lazy' alt="skills logos" /> 
        </div>
        


        <div className='flex gap-5'>
        <img src="https://skillicons.dev/icons?i=vercel" className='hover:scale-110' title='vercel' loading='lazy' alt="skills logos" /> 
        <img src="https://skillicons.dev/icons?i=netlify" className='hover:scale-110' title='netlify' loading='lazy' alt="skills logos" />
        
        </div> 
        
       </div>
        
       
    </div>
  )
}

export default Skills