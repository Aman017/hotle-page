import React from 'react'
import SearchBox from './ui/SearchBox'
import Image from 'next/image'

const Hero = () => {
  return (
 <section className='pt-24 pb-12 xl:py-0 xl:h-[1887px] flex justify-center items-center'>
  
    <Image 
    src={'./hero/backgg.jpg'}
    alt='back'
    layout='fill'
    objectFit='cover'
    quality={100}
    className='-z-11 pt-24 pb-12 xl:py-0 xl:h-[1887px] flex justify-center items-center bg-cover bg-center bg-no-repeat'
    />
  <div className="container mx-auto flex items-center justify-center xl:justify-start ">
    <SearchBox />
  </div>
 
 </section>
  )
}

export default Hero
