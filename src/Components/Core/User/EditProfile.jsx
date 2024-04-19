import React, { useState } from 'react'
import userIcon from '../../../Assets/user icon.png';
import { profileRoutes } from '../../../Services/apiRoutes';
import {apiConnector} from '../../../Services/apiConnector'
import { useNavigate } from 'react-router-dom';

export const EditProfile = ({edit,setEdit}) => {
    const [data, setData] = useState({
        token : localStorage.getItem('token'),
    });

    const navigate = useNavigate();
    //false -> profile not saved --> edit profile button visible

    const changeHandler = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(data);
    }

    const submitHandler = async(e) => {
        e.preventDefault();

        try{
            const user = await apiConnector('POST', profileRoutes.updateUserDetails, data);
            const profile = await apiConnector('PUT', profileRoutes.updateProfile, data);
            console.log(user);
            console.log(profile);
            console.log("success : ",user.success);

            if(user.success == true && profile.success == true){
                alert("Profile updated successfully");
            }
        }catch(error){
            alert(error.message);
        }
    }

    
    
    
  return (
    <div className='w-[70%] relative'>
        
        <form className=' bg-profilebg w-full p-6 mt-[-20%] pb-36 rounded-xl' name='myform' onSubmit={(e) => submitHandler(e)}>
                <div className='bg-bluebutton w-44 py-2 rounded-md text-center absolute z-10  text-white text-2xl top-[-80%] left-[80%]' onClick={() => setEdit(!edit)}>
                    <input className=' cursor-pointer' type='submit' value={"Save Profile"} />
                </div>
            <div className='flex flex-col justify-center items-center mt-[-20%] '>
                <img src={userIcon} className=' h-64 ' />
                <p className='text-2xl mt-[-1%] font-bold'>Hello User!</p>
                <p className='mt-[-1%]'>Please fill the below details</p>
            </div>

            <div className='flex justify-between mt-5'>
                <div className='flex flex-col gap-2 w-50%'>
                    <h2 className='text-2xl font-bold'>Details</h2>
                    <div className='flex gap-2'>
                        <p className='font-bold'>Name :</p>
                        <input type='text' name='Name' className='bg-bgwhitelight' onChange={(e) => changeHandler(e)} />
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Gender :</p>
                        <input type='text' name='gender' className='bg-bgwhitelight' onChange={(e) => changeHandler(e)} />
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Age :</p>
                        <input type='text' name='age' className='bg-bgwhitelight' onChange={(e) => changeHandler(e)} />
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Blood Group :</p>
                        <input type='text' name='bloodGroup' className='bg-bgwhitelight' onChange={(e) => changeHandler(e)} />
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Phone No :</p>
                        <input type='text' name='phoneNumber' className='bg-bgwhitelight' onChange={(e) => changeHandler(e)} />
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Email :</p>
                        <input type='text' name='email' className='bg-bgwhitelight' onChange={(e) => changeHandler(e)} />
                    </div>
                </div>

                

                <div className=' flex flex-col gap-5 w-[45%]  border-l-4 border-black px-10 py-5'>
                    <div className='flex gap-2'>
                        <input type='checkbox' value={'BP'} name='BP' />
                        <p className='text-lg font-bold'>BP patient</p>
                    </div>

                    <div className='flex gap-2'>
                        <input type='checkbox' value={'Sugar'} name='Sugar' />
                        <p className='text-lg font-bold'>Sugar patient</p>
                    </div>


                    <div className='flex gap-2'>
                        <input type='checkbox' value={'Both'} name='Both' />
                        <p className='text-lg font-bold'>BP & Sugar patient</p>
                    </div>


                    <div className='flex gap-2'>
                        <input type='checkbox' value={'None'} name='None' />
                        <p className='text-lg font-bold'>None</p>
                    </div>
                </div>
            </div>

            


        </form>
    </div>
  )
}
