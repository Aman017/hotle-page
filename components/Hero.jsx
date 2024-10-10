import React from 'react'
import SearchBox from './ui/SearchBox'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative pt-24 pb-12 xl:py-0 xl:h-[1887px] flex justify-center items-center'>
      {/* Image as a background */}
      <Image 
        className='absolute inset-0 -z-20 object-cover' // Use absolute positioning for the image
        src='/hero/backgg.jpg' // Make sure the path is correct
        layout='fill' // Use layout 'fill' to cover the section
        alt='Hero background' 
      />
      
      <div className="container mx-auto flex items-center justify-center xl:justify-start relative z-10"> {/* Ensure the search box is on top */}
        <SearchBox />
      </div>
    </section>
  );
};


export default Hero
