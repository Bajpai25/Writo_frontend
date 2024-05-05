import React from 'react'
import { FaUserCircle } from "react-icons/fa";

function Chat() {
  return (
    <div>
      <div className='md:flex md:flex-row flex flex-col gap-12'>
        <div>
            <div className='flex flex-row gap-4'>
        <FaUserCircle/>
        <h1>Aryan Mittal</h1>
        </div>
        
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Chat
