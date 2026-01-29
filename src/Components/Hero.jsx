import React from 'react'
const Hero = ({hero}) => {
  return (
    <div className=' flex flex-col h-[90vh] bg-gray-700 justify-center text-center w-full px-4 gap-3'
    style={{backgroundImage:`url(${hero})`,backgroundSize:"cover",backgroundPosition:"center"}}>
    </div>
    
  )
}

export default Hero