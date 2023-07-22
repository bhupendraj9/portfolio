import React from 'react'
import badge1 from '../assets/2022-annual-50.gif'
import badge2 from '../assets/BS.gif'


const Profiles = () => {
  return (
    <div className='py-10 bg-white'>
    <div className='flex flex-col md:flex-row md:justify-center md:items-center gap-10 pb-4'>
     <div className='bg-richblack-5 w-full py-4'>
       <div className='text-center font-bold text-2xl  pb-2 text-indigo-600 drop-shadow-lg'>Check Out My Coding Profiles</div>
    <div className='flex gap-4 justify-center items-center'>
    <a href="https://www.hackerrank.com/bhupendraj9"   target="blank"><img align="center" src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png" alt="bhupendraj9" height="30" width="40" /></a>
    <a href="https://www.leetcode.com/bhupendraj9" target="blank"><img align="center" src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="bhupendraj9" height="30" width="40" /></a>
    <a href="https://auth.geeksforgeeks.org/user/bhupendraj9" target="blank"><img align="center" src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="bhupendraj9" height="30" width="40" /></a>
    
    </div>
     </div>
   
    </div>
    

    <div className='font-bold  text-xl text-indigo-600 text-center py-2 bg-white'>Badges Earned</div>
   
   <div className='flex gap-3 justify-center bg-white'>
     <img src={badge1} className='w-[100px]' alt='b1'></img>
    <img src={badge2} className='w-[100px]' alt='b2'></img>
   </div>
   

    </div>
    

  )
}

export default Profiles