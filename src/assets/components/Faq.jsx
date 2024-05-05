import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import {FaArrowRight} from "react-icons/fa6";
import image from "./v.png"
import i3 from "./i3.jpg"
import i2 from "./i2.png"
import c1 from "./c1.jpg"
import c2 from "./c2.jpg"
import c4 from "./c4.jpg"
import c5 from "./jain.png"

import { Link } from 'react-router-dom';

function Faq() {
  const [access,setaccess]=useState(false);

  useEffect(()=>{
    if(localStorage.getItem('token')){
      setaccess(true);
    }
  },[access])

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
      text:'The maths sessions conducted by Sagnik sir were really helpful in helping me cracking the JEE.',
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


  const [click1,setclick1]=useState(false);
  const [click2,setclick2]=useState(false);
  const [click3,setclick3]=useState(false);

  const handleclick1=()=>{
    setclick1(!click1);
  }
  const handleclick2=()=>{
    setclick2(!click2); 
  }
  const handleclick3=()=>{
    setclick3(!click3);
  }

  return (
    <div>
        <h1 className='font-bold md:text-2xl text-xl  text-center pt-16 font-serif'>
          Get an unparalleled learning<br/> experience at Writo!  
        </h1>
      <div className='flex flex-row flex-wrap justify-around md:gap-12 gap-8 text-center mt-16 font-medium font-serif text-lg'>
        <div className='flex flex-col items-center gap-6 '>
            <img src="./users.png" className='md:w-[260px] md:h-[200px] w-[160px] h-[140px]'></img>
            <p >Mentors from<br/> prestigious IIT's and NIT's</p>
        </div>
        <div className='flex flex-col items-center gap-6'>
            <img src="./g1.png" className='md:w-[260px] md:h-[200px] w-[160px] h-[140px]'></img>
                <p>Comprenhensive coverage<br/> of syllabus from 9th - 12th standards</p>
        </div>
        <div className='flex flex-col items-center gap-6'>
            <img src='./yt.png' className='md:w-[260px] md:h-[200px] w-[160px] h-[140px]'></img>
            <p>Access to live sessions<br/> for a year</p>
        </div>
      </div>
      <div className='md:mt-16 mt-6 flex flex-col items-center mt-8 mb-6'>
         <h1 className='text-center font-bold md:text-3xl text-xl  text-center pt-16 font-serif'>FAQs</h1>
        <div className='flex flex-col font-serif font-medium items-center gap-8 mt-8'>
            <select onClick={handleclick1} className='border-2 md:w-[600px] w-[320px] pt-2 pb-2 pl-1 pr-1 border-[#292929] rounded-md'>
                <option>Who will be my mentor when will I get to pick them?</option>
            </select>
            {click1 ?(<p className='border-2 md:w-[600px] w-[320px] pt-2 pb-2 pl-1 pr-1 border-[#292929] rounded-md'>In our doubt session program, mentors are carefully chosen from esteemed institutions like NIT and IIT. When you get to pick your mentor, rest assured that each one is highly qualified and dedicated to helping you succeed in your academic journey.</p>) :null}
            <select onClick={handleclick2} className='border-2 md:w-[600px] w-[320px] pt-2 pb-2 pl-1 pr-1 border-[#292929] rounded-md'>
                <option>How can I attend sessions?</option>
            </select>
            {click2?(<p className='border-2 md:w-[600px] w-[320px] pt-2 pb-2 pl-1 pr-1 border-[#292929] rounded-md'>To attend the session, you'll receive a Zoom link via email or another communication platform. Simply click on the link at the scheduled time, and you'll be connected to the session with your mentor from NIT or IIT.</p>):null}
            <select onClick={handleclick3} className='border-2 md:w-[600px] w-[320px] pt-2 pb-2 pl-1 pr-1 border-[#292929] rounded-md'>
                <option>How many sessions can I attend?</option>
            </select>
            {click3?(<p className='border-2 md:w-[600px] w-[320px] pt-2 pb-2 pl-1 pr-1 border-[#292929] rounded-md'>You can attend as many sessions as you need! While the timings are limited, we strive to accommodate as many sessions as possible to support your learning journey.</p>):null}
        </div> 
      </div>
      <div className='mt-12'>
      <h1 className='text-center font-bold md:text-3xl text-xl  text-center pt-16 font-serif pb-12'>
        Meet your Mentors
      </h1>
      </div>
        <div className='flex flex-row flex-wrap justify-around gap-8 m-6'>
        <div  className='flex flex-row flex-wrap justify-around gap-6 m-6 w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-cover bg-no-repeat h-auto shadow-md shadow-gray-400'>
     <div  style={{backgroundImage: `url(${image})`}} className='bg-[#F8F8F8] w-[300px] h-[400px] flex flex-col gap-2 p-3'>
          <img src='/teacher.png' className='h-46 w-36 ml-20 mt-12 mb-4'></img>
          <h1 className='text-xl font-serif font-semibold text-center'>Suresh Iyer</h1>
          <div className='flex flex-row justify-center'>
          <button className='text-md text-[#ED7E0A] rounded-md  bg-white p-1 w-24 font-serif font-medium'>Maths</button>
          </div>
          <h3 className='text-xl pt-4 text-center font-serif font-medium'>IIT Madras, 2016</h3>
        </div>
        </div>

        <div   className='flex flex-row flex-wrap justify-around gap-6 m-6 w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-cover bg-no-repeat h-auto shadow-md shadow-gray-400'>
        <div  style={{backgroundImage: `url(${image})`}} className='bg-[#F8F8F8] w-[300px] h-[400px] flex flex-col gap-2 p-3'>
          <img src={i2} className='h-46 w-36 ml-20 mt-12 mb-4'></img>
          <h1 className='text-xl font-serif font-semibold text-center'>Sagnik Dutta</h1>
          <div className='flex flex-row justify-center'>
          <button className='text-md rounded-md  bg-white p-1 w-24 text-[#ED7E0A] bg-white p-1  font-serif font-medium'>Physics</button>
          </div>
          <h3 className='text-xl pt-4 text-center font-serif font-medium'>IIT Kharagpur, 2017</h3>
        </div>
      </div>
        <div className='flex flex-row m-4 flex-wrap justify-around gap-6 w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-cover bg-no-repeat h-auto shadow-md shadow-gray-400'>
        <div  style={{backgroundImage: `url(${image})`}} className='bg-[#F8F8F8] w-[300px] h-[400px] flex flex-col gap-2 p-3'>
          <img src={i3} className='h-46 w-36 ml-20 mt-12 mb-4 rounded-full'></img>
          <h1 className='text-xl font-serif font-semibold text-center'>Pallavi Gupta</h1>
          <div className='flex flex-row justify-center '>
          <button className='text-md rounded-md  bg-white p-1 w-24 text-[#ED7E0A] bg-white p-1  font-serif font-medium'>Chemistry</button>
          </div>
          <h3 className='text-xl pt-4 text-center font-serif font-medium'>IIT Mandi, 2020</h3>
        </div>
       </div>
      </div>
      <div className='bg-[#1AB79D] md:mt-20 mt-8 opacity-0.74 rounded-md md:w-[1000px] md:h-[380px] w-auto h-auto m-auto overflow-hidden '>
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
      <div className='pt-12 mb-12'>
        <div className='flex flex-col items-center gap-6'>
          <h1 className='md:text-4xl text-2xl  font-bold font-serif '>Join today at 50% off!!!</h1>
          <h3 className='md:text-2xl text-xl font-medium text-center font-serif pt-6'>Limited period offer only</h3>
          <a href="https://writodoubtsessionregistration.fillout.com/t/gQkJaYB8syus?EnrollNow=xxxxx"><button className='bg-[#1AB79D] rounded-md md:w-[240px] md:h-[60px]  pl-8 p-1 w-36 h-auto text-center flex flex-col md:text-2xl text-md md:pl-16   md:pt-3 pt-2  text-white font-serif '>Subscribe</button></a>
        
        {access?(<Link to="/subscribe"><button className='bg-black rounded-md md:w-[240px] md:h-[60px] w-36 p-1 pl-6 h-auto  text-center flex flex-col md:text-2xl text-md md:pl-12 pt-2 md:pt-3 text-white font-serif  opacity-50'>How it Works</button>
        </Link>):(
          <button onClick={() => alert('Please Login to access the content')} className='bg-black rounded-md md:w-[240px] md:h-[60px] w-36 p-1 pl-6 h-auto  text-center flex flex-col md:text-2xl text-md md:pl-12 pt-2 md:pt-3 text-white font-serif  opacity-50'>How it Works</button>
        )
      }
        </div>
      </div>
      </div>
  )
}

export default Faq
