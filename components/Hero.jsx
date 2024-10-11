import React from 'react'
import SearchBox from './ui/SearchBox'

const Hero = () => {
  return (
 <section className='pt-24 pb-12 xl:py-0 bg-[#2A6599] xl:h-[1000px] flex justify-center items-center' >
  <div className="container mx-auto flex items-center justify-center xl:justify-start ">
    <div>
      <Image 
      src='./hero/hero.jpg'
      width={100}
      height={100}
      alt='oop'
      className='rounded-full right-20 '
      />
    </div>
    <SearchBox />
  </div>
 </section>
  )
}

export default Hero
