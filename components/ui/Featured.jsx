"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/varriants'

const Featured = () => {
  return (
   <motion.section 
   variants={fadeIn('up', 0.5)}
   initial='hidden'
   whileInView={'show'}
   viewport={{ once: false, amount: 0.2 }}className='bg-soft_green-secondary xl:h-[240px] max-w-[1305px] ml-auto xl:-top-[120px] relative rounded-tl-[30px] rounded-bl-[30px] px-[80px] py-[60px]'>
<div className='flex flex-col xl:flex-row items-center h-full gap-x-[30px] text-center xl:text-left'>
<Image className='xl:mr-[50]' src='./public/featured/icon.svg' width={73} height={83} alt='fff'/>
<h2 className='h2 flex-1 text-soft_green'>
Book your stay in just <span className='text-[#155b66] '>one minute!</span>
</h2>
<p className='flex-1 text-soft_green leading-loose'>
Book your <span className='text-[#155b66]'>perfect room</span> in under a minute with our <span className='text-[#155b66]'>fast and easy </span>reservation process. Enjoy <span className='text-[#155b66]'>luxury & comfort</span> without any hassle your stay is just a few clicks away!
</p>
</div>
   </motion.section>
  )
}

export default Featured;
