import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import  hero from '../assets/hero.png'
import axios from 'axios'
import Card from '../Components/Card'

const Home = () => {
const [data, setdata] = useState([])
  useEffect(() => {
    const fetchProduct =async()=>{
    try{
      const res =await axios.get("https://fakestoreapi.com/products")

    console.log(res.data)
    setdata(res.data)
    
    }
    catch (err){
      console.error(err)
    }
  }
  fetchProduct()
  }, [])
  
  return (
    <>
    <Hero hero={hero}/>
    <div className='flex md:gap-10 overflow-x-auto hide-scrollbar p-3 md:flex-wrap md:justify-center'>  
      {data.map((item)=>{
        return <Card key={item.id} item={item}/>
      })}
    </div>

    </>
  )
}

export default Home