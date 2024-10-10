"use client";
import { Sheet,SheetContent,SheetTrigger } from './sheet';
import { Menu } from 'lucide-react';
import React from 'react'
import Nav from './Nav';
import Image from 'next/image';
import Link from 'next/link';
import Socials from './Socials';


const MobileNav = () => {
  return (
  <Sheet>
    <SheetTrigger>
        <Menu size={36} className='text-white' />
    </SheetTrigger>
    <SheetContent side="left">
        <div className="flex flex-col justify-between items-center gap-1 h-full p-10 ">
          <Link href="/" className='mb-24 p-4 '>
            <Image src='./public/footer/Hottle.png'
            width={500}
            height={500}
            alt='uu'
            priority
            />
            </Link>
            

       <Nav containerStyles='text-black'
       listStyles='flex flex-col gap-y-6 text-xl'
       />
     
        <Socials containerStyles='flex gap-x-4 text-black'/>
      
       </div>
    </SheetContent>
  </Sheet>
  )
}

export default MobileNav
