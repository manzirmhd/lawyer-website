'use client'
import React, { useState } from 'react'
import { FaBars, FaCalendarDay, FaSearch, FaTimes } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleUser, FaUserPen, FaUserGroup } from "react-icons/fa6";
import { BsJournalText } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import Hero from '../components/Hero';

const Navbar = () => {
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  const content=
  
  <div className=' w-60 lg:w-64 bg-gray-300 h-full absolute top-20 left-0 right-0'>
        <div className='px-1 py-3'>
            <ul className=' text-black font-bold '>
                <li className='py-4 border-b rounded hover:shadow hover:bg-white'>
                    <a href='#' className='px-2 lg:px-4 '>
                    <FaUserPen size={25} className='inline-block mr-4 -mt-2'/>
                        Propescts
                    </a>
                </li>

                <li className='py-4 border-b rounded hover:shadow hover:bg-white'>
                    <a href='#' className='px-2 lg:px-4'>
                    <FaUserGroup size={25} className='inline-block mr-4 -mt-2'/>
                        Clients
                    </a>
                </li>

                <li className='py-4 border-b rounded hover:shadow hover:bg-white'>
                    <a href='#' className='px-2 lg:px-4'>
                    <GoLaw size={25} className='inline-block mr-4 -mt-2' />
                        Lawyers
                    </a>
                </li>

                <li className='py-4 border-b rounded hover:shadow hover:bg-white'>
                    <a href='#' className='px-2 lg:px-4'>
                    <LuCalendarDays size={25} className='inline-block mr-4 -mt-2'/>
                        Appointments
                    </a>
                </li>

                <li className='py-4 border-b rounded hover:shadow hover:bg-white'>
                    <a href='#' className='px-2 lg:px-4'>
                    <BsJournalText size={25} className='inline-block mr-4 -mt-2' />
                        Reports (Admin-Only)
                    </a>
                </li>

                <li className='py-4 border-b rounded hover:shadow hover:bg-white'>
                    <a href='#' className='px-2 lg:px-4'>
                    <IoSettingsOutline size={25} className='inline-block mr-4 -mt-2' />
                        Settings (Admin-Only)
                    </a>
                </li>

                <li className='py-4 border-b rounded hover:shadow hover:bg-white'>
                    <a href='#' className='px-2 lg:px-4 '>
                    <FaRegCircleUser size={25} className='inline-block mr-4 -mt-2' />
                        Profile
                    </a>
                </li>
            </ul>
        </div>

    </div>

  return (
    <div>
    <div className='h-full  bg-white border-b'>
      <div className='px-3 lg:px-5 py-5 flex justify-between items-center'>

          <div>
           {click && content}
          </div>
        <div>
          <button onClick={handleClick} className='float-left'>{ click?<FaTimes size={25} className='cursor-pointer'/> : <FaBars size={25} className='cursor-pointer'/>}</button>
        </div>
        <div className='flex gap-5 lg:gap-10'>
             <FaSearch size={25} className='cursor-pointer'/>
             <FaCalendarDay size={25} className='cursor-pointer'/>
        </div>
      </div>
    </div>
  <Hero/>
    </div>
  )
}

export default Navbar