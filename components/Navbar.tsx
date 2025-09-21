"use client";

import React from 'react';
import { useState } from 'react';
import ThemeToggle from '@/app/Theme-toggle';
import { navlink1, navlink2 } from '@/constant';
import { BiSolidChevronDown } from "react-icons/bi";

// import { BiSolidChevronLeftCircle } from "react-icons/bi";
// import { BiSolidChevronRightCircle } from "react-icons/bi";


const Navbar = () => {
    const [active, setActive] = useState<string | undefined>();

  return (
    <div className='w-full'>
        <div className='flex justify-between items-center right-0  py-3 md:px-10'>
            <div className='font-medium flex p-2 space-x-3'>
                <h2>Logo</h2>
                <h2 className='flex'>benevolent
                    <span className='p-1'><BiSolidChevronDown /></span>
                </h2>
            </div>

            <div className='hidden p-2 rounded-2xl md:flex space-x-4 lg:text-2xl shadow-2xl'>
                {Object.entries(navlink1).map(([key, value]) => (
                    <ul 
                        key={key} 
                        className='p-2 cursor-pointer'
                        >
                        <li>
                            <a 
                                href="#"
                                onClick={(e) => {e.preventDefault(); setActive(key)}}
                                className={`${active === key? 'bg-red-400' : '' }`}
                            >
                                {value}
                            </a>
                        </li>
                    </ul>
                ))}
            </div>

            <div className='hidden md:flex space-x-4 lg:text-2xl'>
                {Object.entries(navlink2).map(([key,value]) => (
                    <ul key={key} className='p-2 cursor-pointer'>
                        <li>{value}</li>
                    </ul>
                ))}
                <a><ThemeToggle /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar