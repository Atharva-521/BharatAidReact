import React from 'react'
import family from '../../../Assets/doctor and child sitting.png'

const hero = () => {
  return (
    <div className='w-full h-full floating'>
      <div className='bg-white lg:w-[500px] lg:h-[500px] rounded-[100%] relative z-[0] flex justify-center items-center'>
        <div className='bg-herobg lg:w-[485px] lg:h-[485px] rounded-[100%] absolute z-[10] '>
        
        </div>
        <img src={family} className='z-[11] h-[80%]'></img>
      </div>
    </div>
  )
}

export default hero
