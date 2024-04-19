import React, { useEffect, useState } from 'react'
import userIcon from '../../../Assets/user icon.png';
import { profileRoutes } from '../../../Services/apiRoutes';
import {apiConnector} from '../../../Services/apiConnector'
import { useNavigate } from 'react-router-dom';

export const SavedProfile = ({edit,setEdit}) => {
    const [data, setData] = useState({
        token : localStorage.getItem('token'),
    });
    
    const [userData, setUserData] = useState({});
    const [name, setName] = useState("");
    const [phn, setPhn] = useState("");
    const [email, setEmail] = useState("");

    const fetchData = async() => {
      const response = await apiConnector('POST', profileRoutes.getUserDetails, data);
      setUserData(response.data.additionalData);
      // userData = response.data.additionalData;
      setName(response.data.firstName + " " + response.data.lastName);
      // name = response.data.firstName + " " + response.data.lastName;
      setPhn(response.data.phoneNumber);
      setEmail(response.data.email);
      console.log(response.data.additionalData);
      console.log(name);
    }
    
    useEffect(() => {
      fetchData();
    },[]);


    
  return (
    <div className='w-[70%] relative'>
        
        <form className=' bg-profilebg w-full p-6 mt-[-20%] pb-36 rounded-xl' name='myform' >
                <div className='bg-bluebutton w-44 py-2 rounded-md text-center absolute z-10  text-white text-2xl top-[-80%] left-[80%]' onClick={() => setEdit(!edit)}>
                    <input className=' cursor-pointer' type='submit' value={"Edit Profile"} />
                </div>
            <div className='flex flex-col justify-center items-center mt-[-20%] '>
                <img src={userIcon} className=' h-64 ' />
                <p className='text-2xl mt-[-1%] font-bold'>Hello {name}!</p>
                <p className='mt-[-1%]'>below are your details</p>
            </div>

            <div className='flex justify-between mt-5'>
                <div className='flex flex-col gap-2 w-50%'>
                    <h2 className='text-2xl font-bold'>Details</h2>
                    <div className='flex gap-2'>
                        <p className='font-bold'>Name :</p>
                        <p>{name}</p>
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Gender :</p>
                        <p>{userData.gender}</p>
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Age :</p>
                        <p>{userData.age}</p>
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Blood Group :</p>
                        <p>{userData.bloodGroup}</p>
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Phone No :</p>
                        <p>{phn}</p>
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Email :</p>
                        <p>{email}</p>
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
