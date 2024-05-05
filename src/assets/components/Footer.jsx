import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  const [access,setaccess]=useState(false)

  useEffect(()=>{
    if(localStorage.getItem('token')){
      setaccess(true)
    }
  },[access])

  return (
    <div>
      <div className='bg-[#292929] w-auto  h-auto'>
        <div className='md:flex md:flex-row flex flex-col items-center  md:justify-around text-white md:gap-20 gap-8  md:pt-12 pt-6 mb-3'>
        {access ? (
        <div className='md:mr-6 flex flex-col gap-4'>
        <h1 className='md:text-3xl text-2xl font-bold font-serif'>Courses</h1>
        <Link to="/subscribe/maths"><h3 className='text-lg  font-medium font-serif'>Maths</h3></Link>
        <Link to="/subscribe/physics"><h3 className='text-lg  font-medium font-serif'>Physics</h3></Link>
        <Link to="/subscribe/chemistry"><h3 className='text-lg  font-medium font-serif'>Chemistry</h3></Link>
        </div>):(
          <div className='md:mr-6 flex flex-col gap-4'>
          <h1 className='md:text-3xl text-2xl font-bold font-serif'>Courses</h1>
          <h3 className='text-lg  font-medium font-serif'>Maths</h3>
        <h3 className='text-lg  font-medium font-serif'>Physics</h3>
        <h3 className='text-lg  font-medium font-serif'>Chemistry</h3>
        </div>)
      }
        <div className='mr-6 flex flex-col gap-4'>
         <h1 className='md:text-3xl text-2xl font-bold font-serif'>Social</h1>
         <a href="https://www.instagram.com/writoeducation"><h3 className='text-lg  font-medium font-serif'>Instagram</h3></a>
         <a href="https://www.linkedin.com/company/writo-learning-solutions"><h3 className='text-lg  font-medium font-serif'>LinkedIn</h3></a>  
            </div> 
            <div>
      <h1 className='font-bold md:text-4xl text-2xl text-black text-center pb-4 text-white'>Contact Us</h1>
      <form className='flex flex-col justify-center items-center gap-6' method='POST' >
  <input type="text" placeholder='Name' className='text-md w-[200px] p-1 text-gray-700 font-medium border-b-2 border-gray-400 focus:outline-none'></input>
  <input type="email" placeholder='Email' className='text-md w-[200px] p-1 text-gray-700 font-medium border-b-2 border-gray-400 focus:outline-none'></input>
  <button className='bg-[#1AB79D] rounded-md  font-serif text-white w-32 p-2'>Submit</button>
</form>
      </div>
      </div>
      <div className='flex flex-row justify-center gap-6  text-white pt-6'>
        <img src="./writologo.png"  className='h-10 w-10 '></img>
        <h3 className='text-2xl  font-medium  font-serif pb-6'>Writo Education</h3>
      </div>
      </div>
      </div>
  )
}

export default Footer
