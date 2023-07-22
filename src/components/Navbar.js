import React, { useState } from 'react'

import { FaBars,FaCode} from 'react-icons/fa';
import {IoClose} from 'react-icons/io5'
const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      console.log("clicked section " + section)
    }
  }; 

  
  const [docopen,setdocopen]= useState(false);

  return (
    <div className='top-0 sticky bg-white pb-4 z-20 shadow-md font-inter'>
      <ul className='flex flex-wrap justify-between  items-start pt-5 mx-10 text-xl  '>
        <li className='font-bold flex gap-2 items-center text-indigo-700 drop-shadow-lg'><FaCode></FaCode>BhupendraJ </li>
         {/* To be shown on large screen */}
        <li className='hidden md:flex flex-wrap gap-6'>
          <button onClick={()=>{scrollToSection('home')}} className='hover:text-indigo-800 font-sans font-semibold' >Home</button>
          <button onClick={()=>{scrollToSection('about')}} className='hover:text-indigo-800 font-sans font-semibold' >About me</button>
          <button onClick={()=>{scrollToSection('project')}} className='hover:text-indigo-800 font-sans font-semibold' >Projects & skills</button>
          <button onClick={()=>{scrollToSection('contact')}} className='hover:text-indigo-800 font-sans font-semibold'>Contact me</button>
        </li>
         
    
         <div className='relative md:hidden '>
      {docopen ? (
        <div className='absolute z-30 top-0 -right-3 bg-richblack-5 px-10 py-6 font-bold text-indigo-700 rounded-lg text-center w-[200px]'>
          <button className='block mx-auto mb-2' onClick={()=>{scrollToSection('home')}}>Home</button>
          <button className='block mx-auto mb-2 ' onClick={()=>{scrollToSection('about')}}>About me</button>
          <button className='block mx-auto mb-2' onClick={()=>{scrollToSection('project')}}>Projects</button>
          <button className='block mx-auto mb-2 ' onClick={()=>{scrollToSection('contact')}}>Contact me</button>
          <IoClose className='mx-auto mt-3' onClick={() => setdocopen(false)} />
        </div>
      ) : (
        <FaBars onClick={() => setdocopen(true)} />
      )}
    </div>
      </ul>
    </div>
  )
}

export default Navbar