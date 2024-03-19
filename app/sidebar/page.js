'use client'
import React from 'react'
import { GoLaw } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleUser, FaUserPen, FaUserGroup } from "react-icons/fa6";
import { BsJournalText } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className=' w-60 lg:w-64 bg-gray-300 fixed h-full'>
        <div className='px-1'>
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
  )
}

export default Sidebar