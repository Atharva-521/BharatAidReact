import React from 'react'
import { useState } from 'react';
import {resetRoutes} from '../../../Services/apiRoutes'
import {apiConnector} from '../../../Services/apiConnector'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../../../Slices/resetSlice';

export const ResetPass = () => {

    const navigate = useNavigate();


    const dispatch = useDispatch();
    const selector = useSelector((state) => (state.reset));

    const changeHandler = (e) => {
        dispatch(setEmail(e.target.value));
        console.log(selector);
    };

    

    const submitHandler = async(e) => {
        e.preventDefault();

        try{
            const response = await apiConnector('POST', resetRoutes.sendResetLink, selector);
            console.log(response);
            if(response.success == true){
                alert('Email Sent Successfully');
                navigate("/check-mail");
            }
            else{
                alert(response.message);
            }
        }catch(error){
            console.log(error.message);
        }

    }
  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-3xl font-extrabold'>Reset your password</h2>
        <p className='font-bold'>Have no fear. We'll email you instructions to reset your password. </p>

        <form className='flex flex-col gap-3' onSubmit={(e) => submitHandler(e)}>
            <div>
                <p className='font-bold'>Email Address*</p>
                <input type='email' name="email" required className='bg-bgwhite w-[90%] p-2 rounded-full ml-[-1%]' onChange={(e) => changeHandler(e)}/>
            </div>
            
            <div className='bg-sagegreen py-2 text-center rounded-full w-[90%] ml-[-1%]'>
                <input type='submit' value={'Reset Password'} />
            </div>
            
        </form>
    </div>
  )
}
