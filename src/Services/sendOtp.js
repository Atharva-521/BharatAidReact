import React from 'react'
import {apiConnector} from './apiConnector'
import { authRoutes } from './apiRoutes'


const sendOtp = async(email, navigate) => {
  console.log(navigate);
  console.log("email",email);
  try{
    const response = await apiConnector('POST', authRoutes.sendotp ,{
      email : email,
    });
    console.log("Send OTP Response : ",response);
    if(response.success){
      navigate("/verify-email");
    }
  }catch(error){
   console.log(error);
  }
}

export default sendOtp;
