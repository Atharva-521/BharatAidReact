import React from 'react'
import { ProgressionBar } from './ProgressionBar';


export const DashboardInfo = () => {
  const percentage = 90;
  return (
    <div className='pt-14 flex flex-col gap-5' >
        <p className='text-xl'>Hey there,<br /> Enter your today's blood pressure and sugar levels</p>

        <form className='flex flex-col w-[60%] gap-8'>
          
          <div className='flex flex-col'>
            {/* bp */}
            <div className='flex justify-between'>
              <div className='w-[50%]'>
                  <p className='text-2xl font-extrabold'>Systolic</p>
                  <input type='text' name='systolic' className='bg-bgwhitelight w-[70%] p-2 rounded-xl ' />
              </div>

              <div className='w-[50%]'>
                <p className='text-2xl font-extrabold'>Diastolic</p>
                <input type='text' name='diastolic' className='bg-bgwhitelight w-[70%] p-2 rounded-xl ' />
              </div>
            </div>

              {/* sugar */}
            <div className='flex justify-between'>
            <div className='w-[50%]'>
                <p className='text-2xl font-extrabold'>Fasting</p>
                <input type='text' name='fasting' className='bg-bgwhitelight w-[70%] p-2 rounded-xl ' />
              </div>

              <div className='w-[50%]'>
                <p className='text-2xl font-extrabold'>Post Meal</p>
                <input type='text' name='postmeal' className='bg-bgwhitelight w-[70%] p-2 rounded-xl ' />
              </div>
            </div>
          </div>
          <div className='ml-[33%] bg-sagegreen px-10 py-1 w-[20%] rounded-lg'>
            <input type='submit' value="Submit" className='text-2xl text-white' />
          </div>
        </form>

        <div className='w-full h-[0.1rem] bg-black'>
        </div>

        {/* graphs */}
        <div>
          {/* avg */}
          <div>

          </div>
          
          {/* alerts */}
          <div>
            
          </div>
        </div>
    </div>
  )
}
