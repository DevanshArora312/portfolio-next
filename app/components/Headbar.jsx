"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import HeadButtons from './HeadButtons'
import { usePathname,useSearchParams } from 'next/navigation';
import { IoMenu } from "react-icons/io5";
import Sidebar from './SideBar';

const Headbar = () => {
  // console.log(theme)
  const path = usePathname();
  const theme = useSearchParams().get("theme");
  const [vis,setVis] =useState(false);
  return (
    <div className={`w-full h-auto`}>
      <header className='header'>
          <div className='bg-white rounded-lg shadow-xl px-4 py-3'>
            <div className={`${theme}`}>
                <Link href={{
                  pathname : "/home",
                  query : {theme:theme}
                }} className={'blue-gradient_text font-bold dark:dark-gradient_text'}>
                    DA
                </Link>
            </div>
          </div>
          <nav className='h-full w-[35%] hidden md:flex justify-between items-center text-[20px]'>
            <div className={`${theme} ${path !== "/home" ? "hidden" : ""}`}>
              <Link href={{
                pathname : "/",
                query : {theme:theme}
              }} className={"hover:opacity-60 dark:text-white"}>
                  Change Theme?
              </Link>
            </div>
            <div className={`${theme}`}>
              <Link href={{
                pathname : "/about",
                query : {theme:theme}
              }} className={path === "/about" ? "blue-gradient_text hover:opacity-60 dark:dark-gradient_text" : "hover:opacity-60 dark:text-white"}>
                  About
              </Link>
            </div>
            <div className={`${theme}`}>
              <Link href={{
                pathname : "/projects",
                query : {theme:theme}
              }} className={path === "/projects" ? "blue-gradient_text hover:opacity-60 dark:dark-gradient_text" : "hover:opacity-60 dark:text-white"}>
                  Projects
              </Link>
            </div>
            <div className={`${theme}`}>
              <Link href={{
                pathname : "/contact",
                query : {theme:theme}
              }} className={path === "/contact" ? "blue-gradient_text hover:opacity-60 dark:dark-gradient_text" : "hover:opacity-60 dark:text-white"}>
                  Contact
              </Link>
            </div>
          </nav>
          <nav className='h-full md:hidden flex justify-center items-center text-[20px] dark:text-white'>
            <button onClick={()=> setVis(true)} className={`text-[20px] ${theme === "dark" ? "text-white" : "text-black"}`}>
              <IoMenu/>
            </button>
          </nav>
      </header>
      <Sidebar setVis={setVis} vis={vis} theme={theme} path={path} />
    </div>
  )
}

export default Headbar;