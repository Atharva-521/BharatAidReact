import React, { useRef, useState } from 'react'
import { EditProfile } from '../Components/Core/User/EditProfile';
import { SavedProfile } from '../Components/Core/User/SavedProfile';
import { FaArrowLeftLong } from "react-icons/fa6";

export const Profile = () => {
    const [editProfile, setEditProfile] = useState(false);
    const [edit, setEdit] = useState(false); //false -> profile not saved --> edit profile button visible
    console.log("edit",edit);
    const buttonRef = useRef();
  return (
    <div className='h-screen '>
        <div className='h-[45%] bg-greybg rounded-b-3xl'>
            <div className='w-[80%] flex justify-between items-center py-3 mx-auto '>
                <FaArrowLeftLong />
                
                
            </div>
        </div>
        <div className='w-11/12 mx-auto max-w-maxContent flex justify-center items-center'>
            {
                edit ? (<EditProfile edit= {edit} setEdit={setEdit} />) : (<SavedProfile edit= {edit} setEdit={setEdit} />)
            }
            
        </div>
    </div>
  )
}
