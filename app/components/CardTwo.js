'use client'
import React from 'react'

const CardTwo = ({heading, paragraph}) => {
  return (
    <div className='w-60 lg:w-72 md:w-64 sm:w-60 rounded-xl shadow-md border'>
    <div className='px-5 py-5'>
      <div className='pb-2'><h1 className='text-xl font-bold'>{heading}</h1></div>
        <div className=''>
          <p className='text-lg text-gray-500'>{paragraph}</p>
        </div>
    </div>
    </div>
  )
}

export default CardTwo