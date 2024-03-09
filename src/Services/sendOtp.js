import React from 'react'
import {apiConnector} from './apiConnector'
import { sendotp } from './apiRoutes'
import { useNavigate } from 'react-router-dom'

const sendOtp = async(email, navigate) => {
  console.log(navigate);
  console.log("email",email);
  try{
    const response = await apiConnector('POST', sendotp,{
      email : email,
    });
    console.log("Send OTP Response : ",response);
    if(response.data.success){
      navigate("/verify-email");
    }
  }catch(error){
   console.log(error);
  }
}

export default sendOtp;
