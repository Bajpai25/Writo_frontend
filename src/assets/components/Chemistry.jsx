import React from 'react'
import {arr} from "./Math"
import image from "./v.png"
import { Link } from 'react-router-dom'
import i3 from "./i3.jpg"

function Chemistry() {
  return (
    <div>
       <div>
      <div className='flex flex-row justify-between'>
        <h1 className='text-3xl font-serif font-semibold m-4'>Chemistry</h1>
        <div className='flex flex-row gap-4 m-4'>
        <button className='bg-[#1AB79D] text-white text-md p-1 rounded-md  p-2 border-2 border-gray-300'>Currently Live</button>
        <button className='bg-[#1AB79D] text-white  text-md p-1 rounded-md p-2 border-2 border-gray-300'>Popularity</button>
      </div>
      </div>

      <div className='flex flex-row  flex-wrap justify-around mt-16 mb-12  mr-12'>

  {arr.map((item, id) => {
  return (
    <div key={id} className={`flex flex-row flex-wrap justify-around gap-6 m-6 w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-cover bg-no-repeat h-auto shadow-md shadow-gray-400 ${id === 0 ? '' : 'blur'}`}>
      {id === 0 ? (
        <Link to={`/subscribe/chemistry/:${item.id}`}>
          <div style={{backgroundImage: `url(${image})`}} className='bg-[#F8F8F8] w-[340px] h-[400px] flex flex-col gap-2 p-3'>
            <img src={i3} className='h-46 w-36 ml-20 mt-12 mb-4'></img>
            <h1 className='text-xl font-serif font-semibold text-center'>Pallavi Gupta</h1>
            <div className='flex flex-row justify-center'>
              <button className='text-md rounded-md bg-white p-1 w-24 text-[#ED7E0A] bg-white p-1 font-serif font-medium'>Chemistry</button>
            </div>
            <h3 className='text-xl pt-4 text-center font-serif font-medium'>{item.college}</h3>
          </div>
        </Link>
      ) : (
        <div style={{backgroundImage: `url(${image})`}} className='bg-[#F8F8F8] w-[340px] h-[400px] flex flex-col gap-2 p-3'>
          <img src="/star.png" className='h-8 w-8 ml-[260px]'></img>
          <img src={item.img} className='h-46 w-36 ml-20 mt-12 mb-4'></img>
          <h1 className='text-xl font-serif font-semibold text-center'>{item.name}</h1>
          <div className='flex flex-row justify-between gap-4'>
            <button className='text-md text-[#ED7E0A] rounded-md bg-white p-1 w-24 font-serif font-medium'>{item.sub1}</button>
            <button className='text-md rounded-md bg-white p-1 w-24 text-[#ED7E0A] bg-white p-1 font-serif font-medium'>{item.sub2}</button>
          </div>
          <h3 className='text-xl pt-4 text-center font-serif font-medium'>{item.college}</h3>
        </div>
      )}
    </div>
  )
})}
</div>

      </div>
    </div>
  )
}

export default Chemistry
