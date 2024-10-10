"use client"
import { Button } from './button'
import { motion } from 'framer-motion'
import { fadeIn } from '@/varriants'
import React from 'react'
import Image from 'next/image'


const hotelData=[
    {
        image: './public/find/hotel-1.png',
        name: 'Coastal Breeze Hotel',
        location: 'Santa Monica, California'
    },
    {
        image: './public/find/hotel-2.png',
        name: 'Mountain Retreat Lodge',
        location: 'Aspen, Colorado'
    },
    {
        image: './public/find/hotel-3.png',
        name: 'Cityscape Suites',
        location: 'Chicago, Illinois'
    },
    {
        image: './public/find/hotel-4.png',
        name: 'Lakeside Resort',
        location: 'Lake Tahoe, Nevada'
    }
]

const Find = () => {
  return (
  <section className='py-3 xl:py-36'>
    <div className="container mx-auto">

        {/* text  */}

    <div className='text-center'>
        <motion.h2 
        variants={fadeIn('left',0.6)} initial='hidden' whileInView='show' viewport={{once: false, amount:0.5}}
        className='h2 mb-6'>Explore Top Hotel Choices</motion.h2>
        <motion.p 
        variants={fadeIn('right',0.6)} initial='hidden' whileInView='show' viewport={{once: false, amount:0.5}}
        
        className='max-w-[638px] mx-auto mb-8'>Explore our curated selection of hotels, tailored to provide comfort and unforgettable experiences for every traveler.</motion.p>
    <motion.div
    variants={fadeIn('up',0.6)} initial='hidden' whileInView='show' viewport={{once: false, amount:0}}
    >
        <Button  className='px-[25px] mb-14 xl:mb-28 bg-[#07424b] text-white rounded-full hover:bg-[#09525d]'> View All</Button>
    </motion.div>
    </div>
    {/* hotel grid  */}
    <motion.div 
    variants={fadeIn('up',0.6)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.2}}

    className='grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]'>
{hotelData.map((hotel,index)=>{
    return(
        <div className='border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden hover:cursor-pointer hover:bg-[#9fddfc] transition-all duration-700 mx-auto xl:mx-0' key={index}>
<Image src={hotel.image} width={270} height={270} alt='kuch bhi'/>
<div className='p-6 group'>
    <h2 className='h-4 group-hover:text-white transition-all duration-300'>{hotel.name}</h2>
    <p className='p-2 group-hover:text-white transition-all duration-300'>{hotel.location}</p>
</div>
        </div>
    )
})}

    </motion.div>
    </div>

  </section>
  )
}

export default Find
