"use client"
import React,{Suspense} from 'react'
import HomeHut from '../components/HomeHut';
import HomeIsland from '../components/HomeIsland';
import Headbar from '../components/Headbar';
import { useSearchParams } from 'next/navigation';
const Page = () => {
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

const Home = () =>{
    return(
      <Suspense>
        <Page/>
      </Suspense>
    );
  }

export default Home