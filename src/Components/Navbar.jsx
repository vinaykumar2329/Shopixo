import React from 'react'
import logo from '../assets/Shopixo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between p-4'>
      <div className="leftNav">
        <img src={logo} alt="logo" />
      </div>

      <div className="rightNav">
        <ul className='flex gap-3'>
          <Link to='/'>Home</Link>
          <Link to='/men'>Men</Link>
          <Link to='/women'>Women</Link>
          <Link to='/kids'>Kids</Link>
        </ul>
      </div>

    </nav>
    </>
  )
}

export default Navbar