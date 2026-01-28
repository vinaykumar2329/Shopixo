import React from 'react'

const Hero = ({title,subtitle}) => {
  return (
    <div className=' flex flex-col h-100 bg-gray-700 justify-center text-center w-full px-4 gap-3'>
        <h2 className=' text-2xl md:text-5xl'>{title}</h2>
        <p className='text-xl'>{subtitle}</p>
    </div>
  )
}

export default Hero