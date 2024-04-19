import React, { useState } from 'react'

export const InputAlert = ({type, value}) => {
    const [status, setStatus] = useState("");
    if(type === 'systolic'){
        if(value > 130 && value <=139){
            setStatus('High Stage 1');
        }else if(value >= 140){
            setStatus('High Stage 2');
        }
    }
  return (
    <div>
        <p>your {type} is {status}</p>
    </div>
  )
}
