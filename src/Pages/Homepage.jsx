import React from 'react'
import CTAButton from '../Components/Core/Home/button'
import Hero from '../Components/Core/Home/hero'
import List from '../Components/Core/Home/list'

const Homepage = () => {
  return (
      <div className='w-11/12 mx-auto max-w-maxContent text-black font-abhaya flex flex-col'>
        {/* HERO SECTION */}
        <div className='flex flex-row w-11/12 max-w-maxContent mt-40 gap-16 mx-auto ml-28'>
          <div className='flex flex-col items-center gap-20  w-[45%]'>
            <div className=''>
              <p className=' text-4xl tracking-wide mt-14 font-[700] '>Find your nearest</p>
              <p className=' text-4xl tracking-wide leading-10 font-[700]'>Hospital & pharmacy...</p>
              <p  className=' text-xl tracking-wide  translate-x-14 leading-10 font-[700] '>Your Health Our Care</p>
            </div>

            <div className='flex flex-col gap-4 '>
              <div className='flex flex-col gap-2 w-full'>
                <CTAButton color={'sagegreen'} linkto={'/nearesthospital'} emergency={false}>
                  Nearest Hospital
                </CTAButton>

                <CTAButton color={'sagegreen'} linkto={'/nearestpharmacy'} emergency={false}>
                  Nearest Pharmacy
                </CTAButton>

                <div className='flex justify-center'>
                <CTAButton linkto={'/login'} color={'redbutton'} emergency={true}>
                  Emergency
                </CTAButton>
              </div>
              </div>
              
            </div>
          </div>

          <div className='w-[55%]'>
            <Hero />
          </div>
        </div>

        <hr className='w-[120%] h-[100%] relative right-[10%] mt-40'></hr>

        {/* Section 2 */}
        <div>
          <List hospital={true} />
        </div>
      </div>
  )
}

export default Homepage
