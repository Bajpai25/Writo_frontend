import React from 'react'
import bg from "./unsplash.png"
import {Link} from "react-router-dom"

function Subscribe() {
  return (
    <div>
      <div className="bg-cover bg-no-repeat  h-screen" style={{backgroundImage: `url(${bg})`}}>
      <h1 className=' font-semibold font-serif text-4xl  text-center pt-16 pb-12'>How it works</h1>
      <h3 className='text-2xl text-center font-light   font-serif pb-16'>Select Your subjects to find mentors</h3>
      <div className='flex flex-row flex-wrap justify-center md:gap-36 gap-8'>
      <Link to="/subscribe/maths_zoom"><div className='rounded-full md:h-48 md:w-48 w-32 h-32 bg-[#1AB79D] text-white flex flex-row justify-center items-center md:text-3xl text-lg font-serif'>
      Maths
      </div>
      </Link>
      <Link to="/subscribe/physics_zoom"><div className='rounded-full md:h-48 md:w-48 w-32 h-32 bg-[#1AB79D] text-white flex flex-row justify-center items-center md:text-3xl text-lg font-serif'>
      Physics
      </div>
      </Link>
      <Link to="/subscribe/chemistry_zoom"><div className='rounded-full md:h-48 md:w-48 w-32 h-32 bg-[#1AB79D] text-white flex flex-row justify-center items-center md:text-3xl text-lg font-serif'>
      Chemistry
      </div>
      </Link>
      </div>
      </div>
    </div>
  )
}

export default Subscribe
