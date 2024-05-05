import React, { useEffect, useState } from 'react';
import bgimg from "../components/bg_img.png";
import { Link } from 'react-router-dom';

function Banner() {
  const [access, setAccess] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setAccess(true);
    }
  }, [access]); // Include access in the dependency array

  console.log(access);

  return (
    <div className="bg-cover bg-no-repeat md:h-screen h-[400px]" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className='md:p-[280px] md:pl-[121px] pt-[180px] pl-[40px]'>
        <p className='md:text-4xl text-lg text-white font-serif font-semibold'>Join Our Live Doubt clearing<br />
          sessions at 50% off
        </p>
        <a href="https://writodoubtsessionregistration.fillout.com/t/gQkJaYB8syus?EnrollNow=xxxxx">
          <button className='bg-[#1AB79D] w-36 p-2 pl-6 rounded-md md:w-[340px] md:h-[60px] text-center flex flex-col md:pl-24 md:text-3xl md:pt-3 md:pb-2 mt-8 mb-6 text-white font-serif '>Subscribe</button>
        </a>
        {access ? (
          <Link to="/subscribe">
            <button className='bg-black w-36 p-2 pl-6 rounded-md md:w-[340px] md:h-[60px] text-center flex flex-col md:pl-24 md:text-3xl md:pt-3 md:pb-2 mt-8 mb-6 text-white font-serif rounded-md md:w-[340px] md:h-[62px] flex flex-col pl-12 mt-4 mb-4 text-center text-white font-serif'>
              How it Works
            </button>
          </Link>
        ) : (
            <button onClick={() => alert('Please Login to access the content')} className='bg-black w-36 p-2 pl-6 rounded-md md:w-[340px] md:h-[60px] text-center flex flex-col md:pl-24 md:text-3xl md:pt-3 md:pb-2 mt-8 mb-6 text-white font-serif rounded-md md:w-[340px] md:h-[62px] flex flex-col pl-12 mt-4 mb-4 text-center text-white font-serif opacity-50'>
              How it Works
            </button>
          )}
      </div>
    </div>
  );
}

export default Banner;
