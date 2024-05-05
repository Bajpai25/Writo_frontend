import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUserCircle } from 'react-icons/fa';

function Nav() {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);

  
  

  const handleClick = () => {
    setClick(!click);
  };


  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href="/login";
  };

  return (
    <div>
      <div className='w-auto h-auto bg-[#292929] flex flex-row justify-between'>
        <div className='flex flex-row gap-4 m-2'>
          <img src="./writologo.png" className='h-8 w-8'></img>
          <Link to="/"><p className='text-[#FFFFFF] md:text-2xl text-lg font-serif'>Writo Education</p></Link>
        </div>
        <div className='md:mr-12  m-2 '>
          <div className='hidden md:text-xl text-lg text-[#FFFFFF] md:flex md:flex-row md:justify-center md:gap-6 gap-4 font-serif '>
            {isLoggedIn ? (<Link to="/subscribe"><h4 className='hover:text-[#1AB79D]'>Subjects</h4></Link>) :(<h4 onClick={alert('Kindly Login!')}className='hover:text-[#1AB79D]'>Subjects</h4>)
            }
            {isLoggedIn ? (
              <h4 className='hover:text-[#1AB79D] cursor-pointer' onClick={handleLogout}>Logout</h4>
            ) : (
              <Link to="/login"><h4 className='hover:text-[#1AB79D]'>Login</h4></Link>
            )}
          </div>
        </div>
        <RxHamburgerMenu className='md:hidden flex m-2 text-white  h-8 w-8' onClick={handleClick}></RxHamburgerMenu>
      </div>
      <div className='bg-[#292929]'>
        {click ? (
          <div className='flex flex-col gap-4 md:hidden text-white text-lg font-semibold pt-4 pl-3 pb-4'>
                     {isLoggedIn ? (<Link to="/subscribe"><h4 className='hover:text-[#1AB79D]'>Subjects</h4></Link>) :(null)
                     }
            {isLoggedIn ? (
              <h4 className='hover:text-[#1AB79D] cursor-pointer' onClick={handleLogout}>Logout</h4>
            ) : (
              <Link to="/login"><h4 className='hover:text-[#1AB79D]'>Login</h4></Link>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
