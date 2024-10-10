import React from 'react'
import SearchBox from './ui/SearchBox'

const Hero = () => {
  return (
<section className='pt-24 pb-12 xl:py-0 xl:h-[1887px] flex justify-center relative items-center'>
 <Image className='bg-cover absolute z-100  bg-center bg-no-repeat' src='./hero/backgg.jpg' width={1000}
 height={1000} alt='did'/>
  <div className="container mx-auto flex items-center justify-center xl:justify-start">
    <SearchBox />
  </div>
</section>

  )
}

export default Hero
