import React from 'react'
import { Link } from 'next/link'
import HeadButtons from './HeadButtons'

const Headbar = () => {
  // console.log(theme)
  return (
    <div className={`w-full h-auto`}>
      <header className='header'>
          <div className='bg-white rounded-lg shadow-xl px-4 py-3'>
            <HeadButtons classProp={false} to={"/home"} text="DA" />
          </div>
          <nav className='h-full w-[35%] hidden md:flex justify-between items-center text-[20px]'>
              <HeadButtons classProp={true} to={`/`} text="Change Theme?" />
              <HeadButtons classProp={true} to={`/about`} text="About"/>
              <HeadButtons classProp={true} to={`/projects`} text="Projects" />
              <HeadButtons classProp={true} to={`/contact`} text="Contact" />
          </nav>
          <nav className='h-full md:hidden flex justify-center items-center text-[20px] dark:text-white'>
              HamMenu
          </nav>
      </header>
    </div>
  )
}

export default Headbar;