import React from 'react'
import Button from "../app/components/Button"
const Home = () => {
  
  return (
      <main className='w-screen h-screen flex flex-col justify-center items-center space-y-10'>
        <h1 className='text-[30px] max-md:text-[20px]'>
          Choose Your Preferred Theme :  
        </h1>
        <div className='w-full max-md:w-1/2 flex max-md:flex-col justify-evenly max-md:gap-5'>
          <Button title={"light"} navLink={"/home"} />
          <Button title={"dark"} navLink={"/home"} />
        </div>
      </main>
      
  )
}

export default Home