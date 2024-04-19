import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

export const NavBar = () => {
  return (
    <div className='w-full bg-greybg flex justify-between p-3 rounded-b-xl'>
        <div className='flex gap-10 items-center'>
        <FaArrowLeftLong />
        <h2 className='text-4xl font-bold'>Bharat Aid  </h2>
        </div>
        <div>
            <img src='https://api.dicebear.com/8.x/initials/svg?seed=Felix' className=' w-16 h-16 rounded-full' />
        </div>
    </div>
  )
}
