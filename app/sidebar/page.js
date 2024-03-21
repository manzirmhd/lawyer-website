'use client'
import React, { useState } from 'react'
import { GoLaw } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaRegCircleUser, FaUserPen, FaUserGroup } from "react-icons/fa6";
import { BsJournalText } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";

const Sidebar = () => {
    const [openSubmenu, setOpenSubmenu] = useState(false)
    const [openSubtwo, setOpenSubtwo] = useState(false)
    

    const handleClick = () => setOpenSubmenu(!openSubmenu)
    const setClick = ()=> setOpenSubtwo(!openSubtwo)
    
    
    const prospect = <div>
        <ul>
            <li className='py-4 px-10 lg:px-20 border-b rounded hover:shadow hover:bg-gray-100'>Add Prospect</li>
            <li className='py-4 px-10 lg:px-20 border-b rounded hover:shadow hover:bg-gray-100'>Convert Prospect</li>
        </ul>
    </div>

    const lawyer =  <div>
        <ul>
            <li className='py-4 px-10 lg:px-20 border-b rounded hover:shadow hover:bg-gray-100'>Lawyers</li>
            <li className='py-4 px-10 lg:px-20 border-b rounded hover:shadow hover:bg-gray-100'>Lawyer Lookups</li>
        </ul>
    </div>

  return (
    <div className='w-60 lg:w-80  bg-gray-300 h-full md:h-full  absolute top-14'>
    <div className='px-1 py-3'>
        <ul className=' text-black font-bold '>
            <li className='py-4 lg:px-2 border-b rounded hover:shadow hover:bg-white flex justify-between'>
                <a href='#' className='px-2 lg:px-4'>
                <FaUserPen size={25} className='inline-block mr-2 lg:mr-6 -mt-2'/>    
                    Propescts   
                </a>
               <div>
                <button onClick={handleClick}>{openSubmenu? <IoMdArrowDropup size={20} className='cursor-pointer'/> : <IoMdArrowDropdown size={20} className='cursor-pointer'/>}</button>
                </div> 
            </li>
            <div><a href='/'>{openSubmenu && prospect}</a></div>

            <li className='py-4 lg:px-2 border-b rounded hover:shadow hover:bg-white flex justify-between'>
                <a href='#' className='px-2 lg:px-4'>
                <FaUserGroup size={25} className='inline-block mr-2 lg:mr-6 -mt-2'/>
                    Clients
                </a>
                <IoMdArrowDropdown size={20} className='cursor-pointer'/> 
            </li>

            <li className='py-4 lg:px-2 border-b rounded hover:shadow hover:bg-white flex justify-between'>
                <a href='#' className='px-2 lg:px-4'>
                <GoLaw size={25} className='inline-block mr-2 lg:mr-6 -mt-2' />
                    Lawyers
                </a>
               <div>
                <button onClick={setClick}>{openSubtwo? <IoMdArrowDropup size={20} className='cursor-pointer'/> : <IoMdArrowDropdown size={20} className='cursor-pointer'/>}</button>
                </div> 
            </li>
            <div><a href='/'>{openSubtwo && lawyer}</a></div>

            <li className='py-4 lg:px-2 border-b rounded hover:shadow hover:bg-white'>
                <a href='#' className='px-2 lg:px-4'>
                <LuCalendarDays size={25} className='inline-block mr-2 lg:mr-6 -mt-2'/>
                    Appointments
                </a>
            </li>

            <li className='py-4 lg:px-2 border-b rounded hover:shadow hover:bg-white'>
                <a href='#' className='px-2 lg:px-4'>
                <BsJournalText size={25} className='inline-block mr-2 lg:mr-6 -mt-2' />
                    Reports (Admin-Only)
                </a>
            </li>

            <li className='py-4 lg:px-2 border-b rounded hover:shadow hover:bg-white'>
                <a href='#' className='px-2 lg:px-4'>
                <IoSettingsOutline size={25} className='inline-block mr-2 lg:mr-6 -mt-2' />
                    Settings (Admin-Only)
                </a>
            </li>

            <li className='py-4 lg:px-2 border-b rounded hover:shadow hover:bg-white'>
                <a href='#' className='px-2 lg:px-4 '>
                <FaRegCircleUser size={25} className='inline-block mr-2 lg:mr-6 -mt-2' />
                    Profile
                </a>
            </li>
        </ul>
    </div>

</div>
  )
}

export default Sidebar