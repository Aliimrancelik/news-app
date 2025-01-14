"use client"

import React, { useState } from 'react'
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { data } from '@/lib/mockData'
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Slide = () => {

  // const sliderLeft = () => {
  //   const slider = document.getElementById('slider')
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // }

  // const sliderRight = () => {
  //   const slider = document.getElementById('slider')
  //   slider.scrollLeft = slider.scrollLeft ? slider.scrollLeft + 500
  // }

  return (
    <div className="relative flex items-center overflow-hidden mx-auto max-w-screen-xl overflow-x-hidden p-4 mb-8">
      {/* <MdChevronLeft
      className='opacity-50 cursor-pointer hover:opacity-100' 
      onClick={sliderLeft} size={40}/> */}
      <div id='example' className='w-full h-[400px] h-full overflow-x-scroll whitespace-nowrap scroll-smooth'>
        {data.map((item) => (
          // eslint-disable-next-line @next/next/no-img-element
          <div className="inline-block w-[340px] h-[400px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <img
              className='w-[340px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-xl'
              key={item.id}
              src={item.image} alt='/'
            />
          </div>
        ))}
      </div>
      {/* <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={sliderRight} size={40}/> */}
    </div>
  )
}

export default Slide