import React from 'react'
import SearchBox from './ui/SearchBox'
import Image from 'next/image'

const Hero = () => {
  return (
 <section className='pt-24 pb-12 xl:py-0 bg-[#2A6599] xl:h-[1000px] flex justify-center items-center' >
  <div className="container mx-auto flex items-center justify-center xl:justify-start ">
    <div className=' left-40'>
      <Image 
      src='./hero/hero.jpg'
      width={800}
      height={800}
      alt='oop'
      className='rounded-full '
      />
    </div>
    <SearchBox />
  </div>
 </section>
  )
}

export default Hero
