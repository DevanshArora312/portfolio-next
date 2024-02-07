"use client"
import React from 'react'
import { workInProg } from '@/assets/icons'
import { useSearchParams } from 'next/navigation';
import Headbar from '../components/Headbar';
import CTA from '../components/CTA';

const Projects = () => {
  const theme = useSearchParams().get("theme");
    
  return (
    <div className={`w-full h-full min-w-screen min-h-screen ${theme === "dark" ? "bg-[rgb(26,35,46)]" : "bg-[#F5F7F9]"} flex items-center flex-col pt-[200px]`}>
      <Headbar theme={theme}/>
        <img src={workInProg.src} className='w-[200px] h-[200px] justify-center' />
        <p className='flex justify-center text-[20px] font-bold' style={{color : theme === "dark" ? 'white' : 'black'}}>
          Under Construction
        </p>
        <div className='absolute bottom-0 w-full mx-auto sm:p-16 !pt-[126px] px-8'>
          <CTA theme={theme}/>
        </div>
    </div>
  )
}

export default Projects