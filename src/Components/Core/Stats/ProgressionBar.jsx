import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import React from 'react'

export const ProgressionBar = ({low, normal, high, percentage, max}) => {
  const colorChecker = () => {
    if(percentage <= low){
      return '#FFD447'
    }else if(percentage > low && percentage <= normal) {
      return `rgba(41, 54, 69, 1)`
    }else if( percentage > normal && percentage <= high) {
      return `rgba(240, 39, 39, 1)`
    }else if( percentage > high) {
      return `rgba(245, 0, 0, 1)`
    }
  }
  
  return (
    <div>
        <div className=' w-40 h-10'>
          <div>
            <CircularProgressbar value={percentage} maxValue={max} text={`avg: ${percentage}`} styles={buildStyles({
              pathColor: colorChecker(),
              strokeLinecap: 'butt',
              textColor: 'rgba(41, 54, 69, 1)',
              textSize: '1.3rem',
              backgroundColor: '#92DAD6'
            })} />;
          </div>
        </div>
    </div>
  )
}
