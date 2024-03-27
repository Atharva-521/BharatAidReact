import React, { useState } from 'react'
import { resetRoutes } from '../../../Services/apiRoutes';
import {apiConnector} from '../../../Services/apiConnector'
import { useNavigate, useParams } from 'react-router-dom';

export const SetPass = () => {

    const [data, setData] = useState({
        password: "",
        confirmPassword: "",
        token: ""
    })

    const navigate = useNavigate();

    const {token} = useParams();
    console.log(token);

    const changeHandler = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        
        console.log(data);
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        if (data.password !== data.confirmPassword){
            alert("Passwords do not match");
            setData({
                password: "",
                confirmPassword: ""
            })
            return
        }

        setData((prev) => ({
            ...prev,
            token
        }));

        try{
            const response = await apiConnector('POST', resetRoutes.resetPassword, data)
            console.log(response);

            if(response.success == true){
                alert("Password Reset Successfully! Please Log In.");
                navigate("/login");
            }else{
                alert(response.message);
            }
        }catch(error){
            console.log(error.message);
        }

    }

  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-3xl font-extrabold'>Choose new password</h2>
        <p className='font-bold'>Almost done. Enter your new password and youre all set.</p>

        <form className='flex flex-col gap-3' onSubmit={(e) => submitHandler(e)}>
            <div>
                <p className='font-bold'>New password*</p>
                <input type='password' name="password" required className='bg-bgwhite w-[90%] p-2 rounded-full ml-[-1%]' value={data.password} onChange={(e) => changeHandler(e)}/>
            </div>

            <div>
                <p className='font-bold'>Confirm new password*</p>
                <input type='password' name="confirmPassword" required className='bg-bgwhite w-[90%] p-2 rounded-full ml-[-1%]' value={data.confirmPassword} onChange={(e) => changeHandler(e)}/>
            </div>
            
            <div className='bg-sagegreen py-2 text-center rounded-full w-[90%] ml-[-1%] cursor-pointer'>
                <input type='submit' value={'Reset Password'} />
            </div>
            
        </form>
    </div>
  )
}
