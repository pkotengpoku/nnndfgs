'use client'
import Image from 'next/image'
import React, { useState } from 'react'


const HostelCard = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  }

  return (
    <div className='relative mt-4 rounded-lg border border-slate-400 min-w-64 h-80'>
      <div className='h-52 max-h-52'>
        <Image
          src={'https://a0.muscache.com/im/pictures/miso/Hosting-43101167/original/62e62bf2-a1ad-4222-8a24-f6c41e6200e5.jpeg?im_w=720&im_format=avif'}
          alt="A description of the image"
          width={256}
          height={200}
          className='rounded-t z-0' // The image has a z-index of 0 (default)
        />
      </div>
      <div className=''>
        <div 
          className={'absolute top-0 right-0 rounded-full bg-white p-2 z-20 m-2 cursor-pointer transition-transform transform hover:scale-125'}
          onClick={toggleLike} // Toggles the heart state on click
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked ? 'red' : 'none'}
            viewBox="0 0 24 24" strokeWidth={1.5}
            stroke={isLiked? 'red' : "currentColor"} className={`size-7   ${isLiked}? 'animate-pulse duration-100':''`}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 
              0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 
              3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </div>
        <div className='flex flex-col m-3'>
          <span className='font-semibold'>Creek Court, London</span>
          <span>London, GB</span>
          <div className="mt-2 flex justify-between items-end">
            From <span className="text-2xl font-bold">$239/</span>week
            <div>5.0 (11)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostelCard
