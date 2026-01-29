import React from 'react'
import logo from '../assets/Shopixo.svg'
import logo1 from '../assets/S.svg'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between items-center  w-full  p-4'>
      <div className="leftNav">
        <img src={logo} alt="logo" className='hidden md:block' />
        <img src={logo1} alt="logo"className='md:hidden h-5 w-5'/>
      </div>

      <div className='flex gap-5'>
      <div className="centerNav">
        <ul className='md:flex  gap-6 hidden'>
          <Link to='/'>Home</Link>
          <Link to='/men'>Men</Link>
          <Link to='/women'>Women</Link>
          <Link to='/kids'>Kids</Link>
        </ul>
      </div>
      
      <div className="rightNav flex justify-end gap-3 text-center">
        <input type="search" placeholder='Search' className='bg-gray-700 px-1 rounded outline-none ' />
        <FaShoppingCart className='text-xl' />
        <CgProfile className='text-xl' />
        <GiHamburgerMenu className='text-xl md:hidden'  />
      </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar