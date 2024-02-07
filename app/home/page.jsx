"use client"
import React from 'react'
import HomeHut from '../components/HomeHut';
import HomeIsland from '../components/HomeIsland';
import Headbar from '../components/Headbar';
import { useSearchParams } from 'next/navigation';
const Home = () => {
    const theme = useSearchParams().get("theme");
    // console.log(theme)
    return (
    <div className='w-full h-full'>
        <Headbar theme={theme}/>  
        {
            theme === "dark" ? <HomeHut/>
            : <HomeIsland/>
        }
    </div>
  )
}

export default Home