import React from 'react'
import { Link } from 'react-router-dom'

const button = ({children, color, linkto, emergency}) => {
  return (
    <Link to={emergency ? `tel:${+919307207453}` : linkto}>
        <div className={`bg-${color} px-4 py-1 ${emergency ? ('bg-redbutton') : ('bg-sagegreen')} rounded-full text-2xl tracking-[0.020] font-[600]`} >
            {children}
        </div>
    </Link>
  )
}

export default button
