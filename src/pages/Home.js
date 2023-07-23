import React from 'react'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

import photo from '../assets/pic.png'


import { TypeAnimation } from 'react-type-animation'
import Profiles from '../components/Profiles'
import {FaLinkedinIn,FaGithub,FaInstagram,FaTwitter} from 'react-icons/fa'
import Contactform from '../components/Contactform'
const Home = () => {
   
  
  return (
    <div className='bg-richblack-5'>
  <div className='flex flex-col md:flex-row flex-wrap justify-between  px-10 gap-5 md:px-40 md:items-center pt-20 z-0' id='home'>
  
  <div className='flex flex-col gap-4 items-start'>
   <div className='-mx-3 text-[1.5em] font-semibold text-gray-900 '>Hello 👋🏻, I am </div>
   <TypeAnimation className='-mx-3 font-semibold text-indigo-900 -my-2 pb-4'
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Bhupendra Jambhale',
    1000,
    'Web Developer',
    1000,
    'CSE Undergraduate',
    1000
  ]}
  speed={5}
  style={{ fontSize: '1.5em' }}
  repeat={Infinity}
/> 

  <a className='hidden md:flex px-6 -mx-2 bg-indigo-500 font-bold font-inter p-3  text-white ' href='https://drive.google.com/file/d/1K-ag-8r-cniYZvtenHWKNWebQuJgGPRJ/view?usp=sharing' target='_blank' rel='noopener noreferrer'>My Resume</a>
  </div> 
   <div className='flex flex-col items-center gap-10'>
    <img src={photo} alt='ph' className='sh1 rounded-full w-[300px]'></img>
    <div className='flex gap-8 items-center'>
     
     <a href="https://linkedin.com/in/bhupendra-jambhale-36105722a" className='bg-white sh1 rounded-full p-3' target="blank"><FaLinkedinIn className='text-xl text-indigo-900'></FaLinkedinIn></a>

     <a href="https://github.com/bhupendraj9" className='bg-white rounded-full sh1 p-3' target="blank"><FaGithub className='text-xl text-indigo-900'></FaGithub></a>

     <a href="https://instagram.com/bhupendraj_19" target="blank" className='bg-white sh1 rounded-full p-3'><FaInstagram className='text-xl text-indigo-900'></FaInstagram></a>
    <a href="https://twitter.com/bhupendraj_9" target="blank" className='bg-white sh1 rounded-full p-3'><FaTwitter className='text-xl text-indigo-900'></FaTwitter></a>

    </div>

    <a className='flex bg-indigo-500 font-bold font-inter p-3 px-5 text-white md:hidden' href='https://drive.google.com/file/d/1K-ag-8r-cniYZvtenHWKNWebQuJgGPRJ/view?usp=sharing' target='_blank' rel='noopener noreferrer'>My Resume</a>
   </div>
   </div> 

    <div className='flex flex-col items-center mt-20 py-20 bg-white'>
     <div className='font-bold text-4xl py-10 drop-shadow-lg text-gray-900' id='about'>ABOUT ME</div>
     <div className='p-6 md:w-[800px] text-lg font-inter text-justify text-gray-800'>
      I am 3rd year undergraduate pursuing B.Tech in computer Science and Engineering from Walchand College of Engineering,Sangli. I am a Passionate Web developer , With a strong foundation in computer science principles and programming languages, I am eager to apply my knowledge and skills to real-world projects. I have gained knowledge about various areas of computer science, including algorithms, data structures, software engineering, and database management..Overall, I am a dedicated and driven individual seeking opportunities to apply my knowledge, skills, and passion for computer science. 
     </div>
    </div>

    <div id='project'><Projects></Projects></div>
    
    
    <div className='text-center bg-white py-10 text-4xl font-bold '><div className='drop-shadow-lg'>Skills and Technologies</div></div>
    <Skills></Skills>

    <Profiles></Profiles>

    <div id='contact'><Contactform></Contactform></div>
    <div>
    <div className='mx-auto text-center bg-richblack-800 text-white border-gray-700 border-t-[0.1px] pt-3 pb-1'>©2023 Made with 🎯 By Bhupendra Jambhale</div>
     
    </div>
    </div>
  )
}

export default Home                                                                                        