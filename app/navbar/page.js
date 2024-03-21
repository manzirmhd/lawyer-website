'use client'
import React, { useState } from 'react'
import { FaBars, FaCalendarDay, FaSearch } from "react-icons/fa";
import Hero from '../components/Hero';
import Sidebar from '../sidebar/page';

const Navbar = () => {
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  const content=
             <div><Sidebar/></div>

  return (
    <div>
    <div className='h-full  bg-white border-b'>
          <div>
           {click && content}
          </div>
          <div className='px-3 lg:px-10 py-4 flex justify-between items-center'>
        <div>
          <button onClick={handleClick} className='float-left'>{ click?<FaBars size={25} className='cursor-pointer'/> : <FaBars size={25} className='cursor-pointer'/>}</button>
        </div>
        <div className='flex gap-5 lg:gap-10'>
             <FaSearch size={25} className='cursor-pointer'/>
             <FaCalendarDay size={25} className='cursor-pointer'/>
        </div>
      </div>
    </div>
  <Hero
  click={click}
  />
    </div>
  )
}

export default Navbar