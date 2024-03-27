import React, { useState } from 'react'
import { EditProfile } from '../Components/Core/User/EditProfile';
import { SavedProfile } from '../Components/Core/User/SavedProfile';
import { FaArrowLeftLong } from "react-icons/fa6";

export const Profile = () => {
    const [editProfile, setEditProfile] = useState(false);
  return (
    <div className='h-screen '>
        <div className='h-[45%] bg-greybg rounded-b-3xl'>
            <div className='w-[80%] flex justify-between items-center py-3 mx-auto '>
                <FaArrowLeftLong />
                
                <div className='bg-bluebutton w-44 py-2 rounded-md text-center text-white text-2xl'>
                    Save Profile
                </div>
            </div>
        </div>
        <div className='w-11/12 mx-auto max-w-maxContent flex justify-center items-center'>
            <EditProfile />
        </div>
    </div>
  )
}
