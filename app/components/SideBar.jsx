'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const items = [
    {href:"/" , title:"Home"},
    {href:"/now-playing" , title:"Now Playing"},
    {href:"/top-rated" , title:"Top Rated"},
    {href:"/upcoming" , title:"Upcoming"},
    {href:"/popular" , title:"Popular"}
]
const SideBar = () => {
 const [isOpen,setIsOpen] = useState(false);

  return (
    <>
      <button
      onClick={()=>setIsOpen(!isOpen)}
      className='fixed top-0 left-0 z-40 text-white m-2'>{isOpen ? 'X':"Menu"}</button>
      {isOpen && (
        <div className='fixed top-0 left-0 h-full z-30 w-54 bg-gray-800 p-5 transition-all duration-300'>
            <nav className='flex flex-col mt-8'>
                {
                    items.map((item)=>(
                        <Link
                         href={item.href}
                         key={item.href}
                         onClick={()=>setIsOpen(false)}
                         className='hover:bg-gray-700 p-2 rounded transition-colors duration-200'> {item.title}</Link>
                    ))
                }
            </nav>
        </div>
      )

      }
    </>
  )
}

export default SideBar
