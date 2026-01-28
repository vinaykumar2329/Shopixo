import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Kids from './Pages/Kids'
import Men from './Pages/Men'
import Women from './Pages/Women'


const App = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col'>
    <Navbar/> 

    <main className='flex-1'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/kids' element={<Kids/>}/>
    </Routes>
    </main>
    <Footer/>
    </div>
    </>
  )
}

export default App