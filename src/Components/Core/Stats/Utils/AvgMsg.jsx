import React from 'react'

export const AvgMsg = ({cond, type, value}) => {

    if(cond === 'blood pressure' && type === 'systolic'){
        if((value <= 90)){
            return (
                <div>
                    Uh oh! you have low average {type} {cond}
                </div>
            )
        }else if(((value > 120 && value <= 129))){
            return (
                <div>
                    You have elevated average {type} {cond}
                </div>
            )
        }else if(((value >= 130 && value <= 139))){
            return (
                <div>
                    You have High average {type} {cond}, please contact your doctor!
                </div>
            )
        }
        else if(((value >= 140))){
            return (
                <div>
                    You have Very High average {type} {cond}, please contact your doctor!
                </div>
            )
        }
    }

    if(cond === 'blood pressure' && type === 'diastolic'){
        if((value <= 60)){
            return (
                <div>
                    Uh oh! you have low average {type} {cond}
                </div>
            )
        }else if(((value > 80 && value <= 84))){
            return (
                <div>
                    You have elevated average {type} {cond}
                </div>
            )
        }else if(((value >= 85 && value <= 89))){
            return (
                <div>
                    You have High average {type} {cond}, please contact your doctor!
                </div>
            )
        }
        else if(((value >= 90))){
            return (
                <div>
                    You have Very High average {type} {cond}, please contact your doctor!
                </div>
            )
        }
    }
    
    return (
        <div>
            Keep it up you have good average {type} {cond}
        </div>
  )
}
