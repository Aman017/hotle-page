"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/varriants';
import React from 'react';
import Socials from './ui/Socials';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className='bg-soft_green-secondary relative pt-12 xl:pt-0'>
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0 }}
        >
          <div className='flex flex-col xl:flex-row bg-white p-8 m-16 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-12'>
            {/* Logo */}
            <div className='xl:w-[470px] mb-6 xl:mb-0'>
              <Link href='/'>
                <Image
                  src='./footer/Hottle.png'
                  width={89}
                  height={78}
                  alt='Hotel Logo'
                  className='mb-2'
                />
              </Link>
              <p className='text-lg leading-9'>
                "At Hotel for You, we are dedicated to providing an unforgettable experience that combines comfort, luxury, and personalized service. Nestled in the heart of India, our hotel offers a perfect retreat for travelers seeking relaxation and adventure alike. With elegantly designed accommodations, exquisite dining options, and a range of amenities, we ensure that every guest feels at home. Explore the beauty of India with us and create cherished memories that will last a lifetime."
              </p>
            </div>
            {/* Navigation & Contact */}
            <div className='flex xl:gap-x-16 xl:ml-32'>
              {/* Navigation */}
              <div className='flex-1'>
                <h4 className='h-4 mb-6'>Navigation</h4>
                <ul className='flex flex-col gap-y-6 text-lg'>
                  <li>
                    <Link href='/'>Home</Link>
                  </li>
                  <li>
                    <Link href='/'>Find Hotel</Link>
                  </li>
                  <li>
                    <Link href='/'>About Us</Link>
                  </li>
                  <li>
                    <Link href='/'>Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* Contact */}
              <div className='flex-1'>
                <h4 className='h-4 mb-6'>Contact</h4>
                <ul className='flex flex-col gap-y-6 text-lg'>
                  <li>+49 457 896789</li>
                  <li>info@hotelforyou.com</li>
                  <li>hotelforyou.com</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Copyright */}
        <div className='py-12 xl:mt-32 flex flex-col xl:flex-row xl:justify-between'>
          <p className='text-black font-semibold text-center mb-4 xl:mb-0'>
            Copyright &copy; {currentYear}. All rights reserved || Aman Malik
          </p>
          <Socials containerStyles='flex gap-x-4 text-black mx-auto xl:mx-0' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
