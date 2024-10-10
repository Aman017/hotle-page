import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import MobileNav from './ui/MobileNav'
import Nav from './ui/Nav'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='absolute w-full max-w-[1440px] py-8 xl:py-10'>
      <div className='container mx- auto'>
        {/* logo,nav (destop ) btn */}
        <div className='flex items-center justify-between text-center'>
          {/* logo */}
          <Link href='/'>
          <Image className="bg-white rounded-full"  src='./footer/Hottle.png'
          width={75}
          height={20}
          alt='hotel'
          priority
          />
          <h1 className='text-2xl font-bold text-white'>
            Hotel <span className=' text-sm text-red-500'>For You</span>
            </h1></Link>
            {/* nav& btn  */}
            <div className='hidden xl:flex'>
              <div className=' flex items-center gap-x-12'>

              <Nav
               containerStyle='flex items-center justify-between'
              listStyles='flex gap-x-12 text-white'
              />
              <Button variant='outline' className='px-10 h-[58px]' >Login</Button>
              </div>

            </div>
        </div>

        {/* mobile nav */}
        <div className='xl:hidden absolute right-8 top-8'>
          <MobileNav />

        </div>

      </div>
    </header>
  )
}

export default Header
