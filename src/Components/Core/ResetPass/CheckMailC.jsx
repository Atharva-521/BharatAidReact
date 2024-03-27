import React from 'react'
import { useSelector } from 'react-redux'
import { apiConnector } from '../../../Services/apiConnector';
import { resetRoutes } from '../../../Services/apiRoutes';

export const CheckMailC = () => {

    const selector = useSelector((state) => state.reset);
    const email = selector.email;
    console.log(email);

    const clickHandler = async() => {
        try{
            const response = await apiConnector('POST', resetRoutes.sendResetLink, selector);
            console.log(response);
            if(response.success == true){
                alert('Email Sent Successfully');
            }
            else{
                alert(response.message);
            }
        }catch(error){
            console.log(error.message);
        }
    }
  return (
    <div className='flex flex-col gap-5'>
        <h2 className='text-3xl font-extrabold'>Check email</h2>
        <p>We have sent the reset email to <span className=' text-blue-500 underline'>{email}</span> </p>

        <div className='bg-sagegreen py-2 text-center rounded-full w-[90%] ml-[-1%] cursor-pointer' onClick={() => clickHandler()}>
                Resend Email
            </div>
    </div>
  )
}
