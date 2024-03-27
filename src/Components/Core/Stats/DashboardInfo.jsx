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
        <div className='flex flex-col gap-7'>
          {/* avg */}
          <div className='w-full flex flex-col gap-11'>

            <div className='flex gap-16'>
              {/* systolic */}
              <div className='flex w-[50%] gap-4 '>
                <ProgressionBar percentage={percentage} />
                <div className='bg-bgwhitelight h-40 rounded-2xl p-10 text-2xl font-bold'>
                  Keep it up you have good average systolic blood pressure
                </div>
              </div>

              {/* diastolic */}
              <div className='flex w-[50%] gap-4 '>
                <ProgressionBar percentage={percentage} />
                <div className='bg-bgwhitelight h-40 rounded-2xl p-10 text-2xl font-bold'>
                  Keep it up you have good average systolic blood pressure
                </div>
              </div>
            </div>

            <div className='flex gap-16'>
              {/* fasting */}
              <div className='flex w-[50%] gap-4 '>
                <ProgressionBar percentage={percentage} />
                <div className='bg-bgwhitelight h-40 rounded-2xl p-10 text-2xl font-bold'>
                  Keep it up you have good average systolic blood pressure
                </div>
              </div>

              {/* post meal */}
              <div className='flex w-[50%] gap-4 '>
                <ProgressionBar percentage={percentage} />
                <div className='bg-bgwhitelight h-40 rounded-2xl p-10 text-2xl font-bold'>
                  Keep it up you have good average systolic blood pressure
                </div>
              </div>
            </div>

          </div>
          
          {/* alerts */}
          <div>
            <h2 className='text-3xl font-extrabold ml-10'>Alert!</h2>
            <div className='bg-bgwhitelight h-40 rounded-2xl p-14 text-2xl font-bold'>
              If your lifestyle remains like this your blood pressure will go at high stage 2, please contact your doctor.
              <br />
              If your lifestyle remains like this your sugar level will go high and can cause diabetes, please contact your doctor.
            </div>
          </div>
        </div>
    </div>
  )
}
