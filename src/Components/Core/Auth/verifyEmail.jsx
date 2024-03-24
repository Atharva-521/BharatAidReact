import React, { useState, useRef, useEffect } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { authRoutes } from '../../../Services/apiRoutes';
import { apiConnector } from '../../../Services/apiConnector';
import { useNavigate } from 'react-router-dom';

export const VerifyEmail = () => {
  const [inputs, setInputs] = useState(["","","","","",""]);
  const inputRefs = useRef([]);
  const [otp,setotp] = useState("");
  const newInputs = [...inputs];
  const navigate = useNavigate();


  const changeHandler = (e,index) => {
    newInputs[index]= e.target.value;
    setInputs([...newInputs]);

    console.log("Inputs : ",inputs);
    console.log("New Inputs : ",newInputs);

    if(e.target.value.length === 1 && index  < inputs.length - 1 ){
      inputRefs[index + 1].focus()
    }
    if(e.target.value.length === 1 && index == inputs.length - 1){

      
    }
  }

  useEffect(() => {
    setotp(inputs.join(""));
  },[inputs])

  const fetchData = async(data) => {
    try{
      const response = await apiConnector('POST', authRoutes.signup,  data );
      console.log(response);
      if(response.success){
        alert("Signed up successfully");
        navigate("/login");
  
      }
    }catch(error){

    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const mockData = signupData.signupData;
    const data = {
      ...mockData,
      otp: otp,
    }
    console.log(data)

    //send this data as request to signin rouute
    fetchData(data);
    
      
    
  }

  const signupData = useSelector((state) => (state.auth));
  
  
  return (
    <div className='flex flex-col gap-4 '>
      <h2 className='text-4xl font-[600]'>Verify email</h2>
      <p className='text-xl'>A verification code has been sent to you.<br/> Enter the code below</p>

      <div>
        <form onSubmit={(e) => submitHandler(e)} >
          <div className='flex flex-row gap-5 text-black'>
            {
              inputs.map((value, index) => (

                <div className='relative'>
                  <input type='text' name='1' maxLength={1} className='text-black w-14 h-11 rounded-md px-1 py-1 text-center text-3xl font-bold abosulte bottomsh bg-inputbg ' onChange={(e) => changeHandler(e,index)} value={value} ref={element => inputRefs[index] = element} />

                  <div className=' absolute w-[60%] h-[0.1rem] translate-x-[0.68rem] bg-slate-950 top-9'></div>
                </div>
              ))
            }
             
          </div>
          <button className='w-full py-2 bg-sagegreen mt-6 text-center text-3xl font-[500] rounded-lg bottomsh cursor-pointer '>Verify email</button>

          <div className='flex justify-between font-bold'>
            <div className='flex items-center'>
              <IoMdArrowBack  /> 
              <p>Back to login</p>
              </div>
            <p>Resend it</p>
          </div>
        </form>
      </div>
    </div>
  )
}
