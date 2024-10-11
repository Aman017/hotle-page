"use client"

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Stats from './ui/Stats';
import { fadeIn } from '@/varriants';
import { inView, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isMobile = useMediaQuery({
    query:'(max-width: 768px)'
     })
  const [ref, inView]= useInView({
    threshold: !isMobile ? 0.5 : null,
  });
  

  return (
    <section className='py-12 xl:pt-0 xl:pb-24' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row'>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 relative'>
            <Image
              src={'./about/img2.png'}
              width={559}
              height={721}
              alt='About Hotel'
            />
          </motion.div>
          <motion.div
  variants={fadeIn('right', 0.2)}
  initial='hidden'
  whileInView={'show'}
  viewport={{ once: false, amount: 0.4 }}
  className='max-w-full md:max-w-[470px] flex-1 relative px-4 sm:px-6 lg:px-8'>
  <h2 className='h2 mb-[20px] text-xl md:text-2xl'>
    About Hotel <span className='text-sm'>For You</span>
  </h2>
  <p className='text-base md:text-lg mb-5'>
    At Hotel For You, we blend luxury, comfort, and exceptional service to create a memorable experience for every guest. Located in the heart of [Location], our hotel offers easy access to the city's top attractions and business hubs. Whether you're here for leisure or work, our modern amenities, including well-appointed rooms, a rejuvenating spa, fine dining restaurants, and a state-of-the-art fitness center, ensure a perfect stay. Our dedicated staff is committed to providing personalized service, making sure every need is met with care. We also take pride in our sustainability efforts, aiming to minimize our environmental impact while delivering a premium experience. At [Your Hotel Name], we strive to be your home away from home, offering a blend of comfort, convenience, and luxury.
  </p>
  <div className='my-5 xl:my-10 min-h-[35px]'>
    {inView && <Stats />}
  </div>
  <p className='mb-5 text-base md:text-lg'>
    Welcome to Hotel For You, your premier destination for comfort and luxury in [Location]. With over [X] years of experience in the hospitality industry, we pride ourselves on our commitment to exceptional service and guest satisfaction. Our hotel boasts [X] beautifully designed rooms and suites, each equipped with modern amenities to ensure a relaxing stay.
  </p>
  <p className='mb-5 text-base md:text-lg'>
    Conveniently located near [X] major attractions, our guests can easily explore the vibrant surroundings. We offer a range of facilities, including a state-of-the-art fitness center, a relaxing spa, and [X] on-site dining options, serving a variety of cuisines crafted by our talented chefs.
  </p>
  <p className='mb-10 text-base md:text-lg'>
    With a dedicated team of [X] hospitality professionals, we strive to create a personalized experience for every guest. We are also proud of our sustainability initiatives, which have allowed us to reduce our carbon footprint by [X]% over the past few years. At [Your Hotel Name], we are committed to making your stay memorable, whether for business or leisure.
  </p>
  <Button variant='accent' onClick={() => window.location.href='/explore'}>
    Explore More
  </Button>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
