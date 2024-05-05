import React,{useState} from 'react'
import image from "./v.png"
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import c1 from "./c1.jpg"
import c2 from "./c2.jpg"
import c4 from "./c4.jpg"
import c5 from "./jain.png"


function Live_m() {
  const testimonials=[
    {
      name:'Aishwarya Jain',
      text:'The maths sessions conducted by Sachin sir were really helpful in helping me cracking the JEE.',
      img:c5
    },
    {
      name:'Kalpit Sharma',
      text:'The physics sessions conducted by Sagnik sir were really helpful in helping me cracking the JEE.',
      img:c2
    },
    {
      name:'Nandini Singh',
      text:'The Chemistry sessions conducted by Pallavi maam were really helpful in helping me cracking the JEE.',
      img:c1
    },
    {
      name:'Riya Sharma',
      text:'The maths sessions conducted by Sachin sir were really helpful in helping me cracking the JEE.',
      img:c4
    }
  ]
  const [index,setindex]=useState(0);

  const slideleft=()=>{
    setindex((prev)=>(prev==0 ? testimonials.length-1 : prev-1));
  }
  const slideright=()=>{
    setindex((prev)=>(prev==testimonials.length-1 ? 0: prev+1))
  };
  
  return (
    <div>
      <h1 className='text-3xl font-serif font-semibold m-4 pl-8 p-6'>Maths</h1>
      <div className='border-gray-300  border-2 rounded-md w-3/4  h-auto m-auto'>
        <div className='flex flex-row flex-wrap justify-around  gap-8 p-2'>
        <img src="/teacher2.png" className='w-[233px] h-[233px] mt-4'></img>
        <div className='flex flex-col  gap-6 p-2'>
        <p className='flex flex-row gap-4 font-serif text-lg'><h1 className='font-semibold '>Name: </h1> Suresh Iyer</p>
        <div className='flex flex-row  gap-4'>
        <button className='text-md text-[#ED7E0A] rounded-md  bg-white p-1 w-24 font-serif bg-gray-100 font-medium'>Maths</button>
        </div>
        <p className='flex flex-row gap-4 font-serif text-lg'><h1 className='font-semibold '>Institute: </h1> IIT Madras, 2016</p>
        <p className='flex flex-row gap-4 font-serif text-lg'><h1 className='font-semibold '>About: </h1>
        Suresh is a passionate engineer working at a<br/> MAANG company. He love for Mathematics<br/> and Physics makes him a part time tutor in<br/> his spare time. </p>
        </div>
        </div>
      </div>
      <div className='flex justify-center mt-8 mb-12'>
      <a href="https://us06web.zoom.us/j/89003466810"><button className="text-lg w-[300px] bg-gradient-to-r from-blue-900 to-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:from-blue-800 hover:to-blue-600 hover:shadow-lg transition duration-300">
  Join Zoom Meeting now
</button>
</a>
</div>
<div className='bg-[#1AB79D] md:mt-20 mb-20 mt-8 opacity-0.74 rounded-md md:w-[1000px] md:h-[380px] w-auto h-auto m-auto overflow-hidden '>
            <h1 className='md:text-3xl text-xl text-center pt-6 pb-6 font-semibold text-white font-serif'>Testimonials</h1>
            <div className='flex flex-row justify-between gap-4 m-4'>
                <FaArrowLeft className='text-white text-4xl  mt-12 cursor-pointer' onClick={slideleft} />
                <div className='testimonial-slide gap-20 flex transition-transform duration-300' >
                        <div  className='md:flex md:flex-row flex flex-col justify-center md:w-[600px] w-auto bg-[#013220] p-8 rounded-md gap-8'>
                            <img src={testimonials[index].img} className='h-[150px] w-[150px] rounded-full' alt='Student Image' />
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-white font-serif font-semibold md:text-2xl text-xl'>{testimonials[index].name}</h1>
                                <p className='font-serif text-white font-medium text-lg'>{testimonials[index].text}</p>
                            </div>
                        </div>
                </div>
                <FaArrowRight className='text-white text-4xl  mt-12 cursor-pointer' onClick={slideright} />
            </div>
        </div>
    </div>
  )
}

export default Live_m
