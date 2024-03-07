import React, { useState } from 'react'
import Button from '../Home/button'
const Signupform = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const signupData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  }

  const changeHandler = (e) => {
    
  }
  
  return (
    <div className='bg-formbg w-[45rem] rounded-3xl pb-7 mt-10 shadow'>
      <h2 className='text-4xl mt-10 translate-x-14'>Sign up</h2>

      <div className='flex justify-center w-10/12 mx-auto mt-6'>
        <form className='w-full flex flex-col gap-6'>
          {/* Name */}
          <div className='flex gap-20'>
            {/* First Name */}
            <div>
              <p className='text-lg'>First Name</p>
              <input required type='text' name='firstName' className='rounded-md w-64 h-8'  />
            </div>

            {/* Last Name */}
            <div>
              <p className='text-lg'>Last Name</p>
              <input required type='text' name='lastName' className='rounded-md w-64 h-8'  />
            </div>
            
          </div>

          {/* Email */}
          <div>
            <p className='text-lg'>Email Address</p>
            <input required type='mail' name='email' className='text-black rounded-md w-[100%] h-8 ' />
          </div>

          {/* Phone number */}
          <div>
            <p className='text-lg'>Phone Number</p>

            <div className='flex gap-6'>
              <input required type='text' name='country' className='w-20 rounded-md h-8' />
              <input required type='text' name='phone' className='rounded-md w-[100%]  h-8' />
            </div>
          </div>

          {/* Password */}
          <div className='flex gap-48'>
            <div>
              <p className='text-lg'>Create Password</p>
              <input required type='password' name='password' className='rounded-md w-[145%] h-8' />
            </div>

            <div>
              <p className='text-lg'>Confirm Password</p>
              <input required type='password' name='confirmPassword' className='rounded-md w-[145%] h-8' />
            </div>
          </div>

          <div className='bg-lemonyellow text-black flex justify-center items-center w-80 h-10 rounded-xl mx-auto'>
            <input type='submit' value={'Create Account'} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signupform
