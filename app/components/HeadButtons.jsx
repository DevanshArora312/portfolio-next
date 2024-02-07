'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname,useSearchParams } from 'next/navigation';

const HeadButtons = ({to,text,classProp}) => {
  const path = usePathname();
  const theme = useSearchParams().get("theme");
    
  return (
    <div className={`${theme} ${(path !== "/home" && text==="Change Theme?") ? "hidden" : ""}`}>
        <Link href={{
          pathname : to,
          query : {theme:theme}
        }} className={classProp ? path === to ? "blue-gradient_text hover:opacity-60 dark:dark-gradient_text" : "hover:opacity-60 dark:text-white" : 'blue-gradient_text font-bold dark:dark-gradient_text'}>
            {text}
        </Link>
    </div>
  )
}

export default HeadButtons