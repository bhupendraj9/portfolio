import React, { useState } from 'react'
import {MdMail,MdCall} from 'react-icons/md'
import { FaLinkedin,FaInstagram,FaGithub } from 'react-icons/fa'
import { toast } from 'react-hot-toast'
import feather from '../assets/feather.png'

const Contactform = () => {
  const [formdata,setformdata] = useState({
    name:'',
    email:'',
    message:''
  })
  
  const changeHandler = (e)=>{
    const {name,value}=e.target;
    setformdata({...formdata,[name]:value})
    console.log(formdata);
  }
  
  const submitHandler=(event)=>{
      event.preventDefault();
      postData()
  }

  const postData = async()=>{
   const REACT_APP_BASE_URL= process.env.REACT_APP_BASE_URL;
    console.log("url "+REACT_APP_BASE_URL)
    console.log(formdata)
    const loading = toast.loading('Sending message')
    try{
      
       const response = await fetch(`${REACT_APP_BASE_URL}/contact`,{
        method:'POST',
        body: JSON.stringify(
            {
              name:formdata.name,
              email:formdata.email,
              message:formdata.message
            }
        ),
          headers: {
          'Content-type': 'application/json; charset=UTF-8'
          
        }
       });

       const data= await response.json();

       if(response.ok)
       {
        toast.dismiss(loading);
        console.log(data);

        toast.success(`Thank you ${formdata.name}`);
       }
       else
       {
        toast.dismiss(loading);
        toast.error('Failed to send')
       }
    }
    catch(err)
    {
        toast.dismiss(loading);
       console.log("error in expense form "+err.message);  
    }
  }

  return (
    <div className='bg-richblack-800 flex flex-col md:flex-row justify-around items-center p-5 gap-10'> 
        <div className='flex flex-col items-start -translate-x-5 mb-4'>
        <div className='flex gap-2 items-baseline'>
        <div className='text-3xl font-bold text-white mb-9 -translate-y-3'>Contact me</div>
        <img src={feather} alt='feather' className='w-[70px] md:w-[100px]'></img>
        </div>
        
        
        <div className='flex items-center gap-2 text-white text-lg'>
        <MdMail></MdMail>
        <div>Email : </div>
        <div> bjambhale7@gmail.com</div>
        </div>
        
         <div className='flex items-center gap-2 text-white text-lg'>
        <MdCall></MdCall>
        <div>Mobile : </div>
        <div> 9307767356</div>
        </div>
        <a className='flex font-bold text-white bg-indigo-600 p-3 my-5' href='https://drive.google.com/file/d/1K-ag-8r-cniYZvtenHWKNWebQuJgGPRJ/view?usp=sharing' target='_blank' rel='noopener noreferrer'>My Resume</a>
        <div className='text-2xl font-bold text-white flex gap-3 mt-4'>
          <a href='https://linkedin.com/in/bhupendra-jambhale-36105722a'><FaLinkedin></FaLinkedin></a>
          <a href='https://instagram.com/bhupendraj_19'><FaInstagram></FaInstagram></a>
          <a href='https://github.com/bhupendraj9'><FaGithub></FaGithub></a>
        </div>

        </div>

     

       <form onSubmit={submitHandler} className='flex flex-col gap-2'>
        <div className='text-2xl font-bold text-white mt-4'>Get in touch</div>
        <div>
        <div className='text-white font-bold mb-1'>Name</div>
        <input type='text' name='name' className='w-full rounded-sm indent-1 p-1 bg-richblack-700 text-white' value={formdata.name} onChange={changeHandler} placeholder='Your Name here' required></input>
        </div>

        <div>
        <div className='text-white font-bold mb-1'>Email</div>
        <input type='text' name='email' className='w-full rounded-sm indent-1 p-1 bg-richblack-700 text-white' value={formdata.email} onChange={changeHandler} placeholder='Your Email here' required></input>
        </div>

        <div>
        <div className='text-white font-bold mb-1'>Message</div>
        <textarea name='message' className='w-full rounded-sm indent-1 p-1 bg-richblack-700 text-white' value={formdata.message} onChange={changeHandler} placeholder='Your messege here' cols={40} rows={7}></textarea>
        </div>

        <button type='submit' className='p-3 bg-indigo-500 text-white font-bold'>Send</button>

       </form>
    </div>
  )
}

export default Contactform