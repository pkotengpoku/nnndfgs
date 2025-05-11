import HostelCard from '@/components/HostelCard'
import Image from 'next/image'
import React from 'react'
import PopularCities from './cities/page'

const page = () => {
  return (
    <div>
      <div className='w-full'>
        <div className='relative'>
          <Image
            src={"https://intermetal.com/wp-content/uploads/2018/06/Hotel-Room-Banner.jpg"}
            alt="A description of the image"
            width={3000}
            height={200}
            className='w-full h-[450px] object-cover z-0'
          />
          <div className='absolute z-10 top-0 left-0 m-4 h-full w-full text-white flex flex-col'>
            <div className='justify-between flex'>
            <div className='text-6xl font-extrabold'>
              BOOKY
            </div>
            <div className='flex space-x-6 m-4'>
              <span className='text-lg font-bold flex'> <svg class="w-6 h-6 font-medium mr-1.5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"/>
</svg> Support
</span>
              <span className='text-lg font-bold flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth={2}
                stroke="currentColor" className="size-6 mr-1.5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 
        0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 
        3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>Shortlist</span>
              <span className='text-lg font-bold flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 mr-1.5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
</svg>
Login</span>
              <span className='text-lg font-bold'></span>
            </div>
            </div>
            <div className='flex-1 flex flex-col justify-center items-start gap-2 p-4 w-full'>
              <span className='text-xl mx-auto'>Home Away from Home</span>
              <span className='text-lg mx-auto'>Book Student Accommodation</span>
              <div className="w-1/2 flex items-center mx-auto mt-10 bg-white rounded-full px-2 py-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
                <button className="bg-lime-500 hover:bg-lime-600 text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>

                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 flex flex-col mx-10'>
          <span className='text-2xl font-bold'>  Continue where you left off</span>
          <div className='flex overflow-scroll gap-x-4'>
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          </div>
        </div>
        <div>
          <PopularCities />
        </div>
        <div>
          <div>
          <span>Popular Hostels</span>
          </div>
          <div className='flex overflow-scroll gap-x-4'>
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          <HostelCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
