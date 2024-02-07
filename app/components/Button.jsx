"use client"
import Link from 'next/link'
import React,{useRef} from 'react'
import { IoSunnySharp } from "react-icons/io5";
import { FaCloudMoon } from "react-icons/fa";

const Button = ({title,navLink}) => {
  if( title === "light"){
    const focusHandle = () => {
      document.getElementById("icon").classList.add("transform") ;
      document.getElementById("icon").classList.remove("rotate-0") ;
      document.getElementById("icon").classList.add("rotate-90") ;
      console.log(document.getElementById("icon").classList)
    }
    const blurHandle = () => {
      document.getElementById("icon").classList.remove("transform") ;
      document.getElementById("icon").classList.remove("rotate-90") ;
      document.getElementById("icon").classList.add("rotate-0") ;
      console.log(document.getElementById("icon").classList)
    }
    const sunRef = useRef();
    return (
      <Link 
        onMouseEnter={focusHandle}
        onMouseLeave={blurHandle}
        href={{
          pathname : navLink,
          query : {theme : title}
        }} className='px-4 py-6 rounded-lg border-2 border-black bg-blue-200 text-black hover:shadow-lg hover:shadow-yellow-300 flex flex-col items-center justify-center gap-y-10'>
          <IoSunnySharp id="icon" ref={sunRef} className='text-[50px] text-center duration-500' />
          <p className='text-[20px]'>
            Light Theme
          </p>
      </Link>
    )
  }
  else{
    return (
      <Link href={{
        pathname : navLink,
        query : {theme : title}
      }} className='px-4 py-6 rounded-lg border-2 border-black bg-[rgba(169,59,245,0.8)] text-black hover:shadow-lg hover:shadow-[rgba(99,78,113,0.8)] flex flex-col items-center justify-center gap-y-10'>
          <FaCloudMoon className='text-[50px] text-center' />
          <p className='text-[20px]'>
            Dark Theme
          </p>
      </Link>
    )
  }
}

export default Button