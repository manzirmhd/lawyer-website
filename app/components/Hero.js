'use client'
import React from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'

const Hero = () => {
  return (
    <div>
    <div className='px-2 py-2 lg:px-10 lg:py-10 md:px-10 md:py-10 justify-center items-center'>
    
     <div className='py-5'>
        <h1 className='text-3xl font-bold'>Hey, Name! </h1>
        <p className='w-64 lg:w-full md:w-full text-lg text-gray-500 flex-wrap'>Heres a reminder for upcoming tasks:</p>
     </div>

     <div className='py-3 lg:py-10 md:py-10'>
        <h2 className='lg:py-5 md:py-5 text-xl font-bold py-3'>Request Documents</h2>
        <div className='lg:flex md:flex md:flex-wrap gap-8'>
            <CardOne heading="John Doe"/>
            <CardOne heading="John Smith"/>
            <CardOne heading="John Nathan"/>
        </div>
     </div>

     <div className='py-5'>
        <h3 className='lg:py-5 md:py-5 text-xl font-bold py-3'>Court Hearing Reminder</h3>
        <div className='lg:flex md:flex gap-8'>
        <CardTwo heading="John Jackson" paragraph="February 25, 2025"/>
        <CardTwo heading="John Kelly" paragraph="March 25, 2025"/>
        <CardTwo heading="John Enright" paragraph="April 25, 2025"/>
        </div>
     </div>

    </div> 
    </div>
  )
}

export default Hero