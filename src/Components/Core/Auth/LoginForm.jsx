import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import user from '../../../Assets/User.svg'
import lock from '../../../Assets/Lock.svg'
import { apiConnector } from '../../../Services/apiConnector'
import { authRoutes } from '../../../Services/apiRoutes'

export const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    
    const changeHandler = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(data);
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        const response = await apiConnector('POST', authRoutes.login, data);
        console.log(response)
        if(response.success){
            alert("User Logged In Successfully");
            navigate("/");
        }
        else{
            alert(response.message);
        }
    }

  return (
    <div className='flex flex-col w-[50%] h-[50%] gap-8'>
        <h2 className=' text-4xl'>Log In</h2>
        <form onSubmit={(e) => submitHandler(e)}>
            <div className='flex flex-col gap-5'>
                <div>
                    <p className='flex items-center ml-4 text-xl'> <span><img src={user} className='bg-white h-6'/></span>email</p>
                    <input type='email' name='email' id='username' className='w-full p-2 rounded-full text-black' onChange={(e) => changeHandler(e)} value={data.email} />
                </div>

                <div>
                    <p className='flex items-center ml-4 text-xl'> <img src={lock} className='bg-white h-6'/>password</p>
                    <input type='password' name='password' id='password' className='w-full p-2 rounded-full text-black' onChange={(e) => changeHandler(e)} />
                    <Link  to="/forgotpass" className=' ml-[80%]'>Forgot password?</Link>
                </div>
            </div>

            <div className='bg-lemonyellow text-black flex justify-center items-center w-80 h-10 rounded-xl mx-auto '>
                <input type='submit' value={'Log in'} />
            </div>

            <div className='flex items-center gap-3 mt-2'>
                <div className=' w-[50%] h-1 bg-white' />
                <p className='text-2xl'>Or</p>
                <div className=' w-[50%] h-1 bg-white' />
            </div>

            <div className='text-center'>
                <p>Don't have an account, <span>
                    <Link to="/signup" >
                        <span className='text-lemonyellow underline'>Sign up</span>
                    </Link>
                    </span>
                </p>
            </div>
        </form>
    </div>
  )
}
