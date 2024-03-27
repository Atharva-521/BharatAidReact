import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import React from 'react'

export const ProgressionBar = ({value, text, percentage}) => {
  return (
    <div>
        <div className=' w-40 h-10'>
          <div>
            <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
              pathColor: `rgba(41, 54, 69, 1)`,
              strokeLinecap: 'butt',
              textColor: 'rgba(41, 54, 69, 1)',
              textSize: '1.5rem',
              backgroundColor: '#92DAD6'
            })} />;
          </div>
        </div>
    </div>
  )
}
