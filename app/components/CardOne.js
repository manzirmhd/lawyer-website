'use client'
import React from 'react'

const CardOne = ({heading}) => {
  return (
    <div className='w-64 lg:w-96 md:w-80 sm:64 rounded-xl shadow-md border'>
    <div className='px-5 py-5'>
      <div className='pb-2'><h1 className='text-xl font-bold'>{heading}</h1></div>
      <div className='lg:flex md:flex justify-between items-center text-gray-500 text-lg'>

        <div className=''>
          <ul>
            <li>Document 1</li>
            <li>Document 2</li>
            <li>Document 3</li>
          </ul>
        </div>

        <div className='py-2 lg:py-0'>
          <ul>
            <li>14 days remaining</li>
            <li>14 days remaining</li>
            <li>14 days remaining</li>
          </ul>
        </div>

      </div>
    </div>
    </div>
  )
}

export default CardOne