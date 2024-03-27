import React from 'react'
import userIcon from '../../../Assets/user icon.png';
import { profileRoutes } from '../../../Services/apiRoutes';

export const EditProfile = () => {
    
  return (
    <div className='w-[70%]'>
        <form className='relative bg-profilebg w-full p-6 mt-[-20%] pb-36 rounded-xl'>
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
                        <input type='text' name='firstName' className='bg-bgwhitelight' />
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Gender :</p>
                        <input type='text' name='gender' className='bg-bgwhitelight' />
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Age :</p>
                        <input type='text' name='age' className='bg-bgwhitelight' />
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Birth Date :</p>
                        <input type='text' name='firstName' className='bg-bgwhitelight' />
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Phone No :</p>
                        <input type='text' name='phone' className='bg-bgwhitelight' />
                    </div>

                    <div className='flex gap-2'>
                        <p className='font-bold'>Email :</p>
                        <input type='text' name='email' className='bg-bgwhitelight' />
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
