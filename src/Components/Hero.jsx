import React from 'react'
const Hero = ({hero}) => {
  return (
    <div className='hidden md:flex flex-col h-[90vh] bg-gray-700  w-full px-4 gap-3'
    style={{backgroundImage:`url(${hero})`,backgroundSize:"cover",backgroundPosition:"center" }}>
    </div>
    
  )
}

export default Hero