import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {FaLink} from 'react-icons/fa'
const Projectcad = ({link,git,image,text,title}) => {
  return (
    <div className='flex flex-col items-center justify-start md:min-h-[300px]'>
        <div className='font-bold py-3 font-inter'>{title}</div>
        <div><img src={image} alt='i' className='w-[350px] md:w-[400px] h-[200px]'></img></div>
        <div className='w-[340px] py-2 text-center'>{text}</div>
        <div className='flex gap-3'> {link!=='null' && <a href={link} className='text-xl'><FaLink></FaLink></a>}
        {git!=='null' && <a href={git} className='text-xl' ><AiFillGithub></AiFillGithub></a>}</div>
       
    </div>
  )
}

export default Projectcad