import React from 'react'

export const PredMsg = ({d_status, s_status}) => {
    let bp_message = "";

    if(d_status == 3 || s_status == 3){
      bp_message = "If you continue your current lifestyle, your BP will go higher next week to hypertension stage 1! You may need to see your doctor!"
    }else if(d_status == 2 || s_status == 2){
      bp_message = "If you continue your current lifestyle, your BP will go higher next week to hypertension stage 1! You may need to see your doctor!"
    }else if(d_status == 1 || s_status == 1){
        bp_message = "Your BP is going to be elevated next week! please maintain healthy lifestyle and control your salt intake!"
    }else if(d_status == 0 || s_status == 0){
      bp_message = "Uh oh! your BP will be low, you may have hypotension. Please contact your doctor! meanwhile consume more salt!"
    }else if(d_status == -1 || s_status == -1){
      bp_message = "Keep it up! You are doing great.Please maintain this lifestyle to keep your BP Optimal!";
    }
  return (
    <div>
        <p>{bp_message}</p>
        <p></p>
    </div>
  )
}
