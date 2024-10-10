"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import { Button } from './button';
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/varriants';


const recommendationData = [
    {
        name: 'The Luxe Haven',
        image: './public/recommendation/hotel-1.png',
        location: 'Miami Beach, Florida',
        desc: 'A chic beachfront hotel offering stylish rooms with ocean views, a luxurious spa, and a vibrant rooftop bar. Enjoy the lively atmosphere of Miami while relaxing in ultimate comfort.',
        price: 400,
        testimonial: {
            message: 'The Luxe Haven is a slice of paradise! The beachfront views were breathtaking, and the staff went above and beyond to ensure our stay was perfect.',
            personName: 'Emily R.'
        }
    },
    {
        name: 'Urban Oasis Hotel',
        image: './public/recommendation/hotel-2.png',
        location: 'New York City, New York',
        desc: 'Nestled in the heart of Manhattan, this contemporary hotel features modern amenities, a serene courtyard, and easy access to iconic attractions. Perfect for travelers seeking the pulse of the city.',
        price: 300,
        testimonial: {
            message: 'A hidden gem in the heart of NYC! The Urban Oasis Hotel provided a peaceful retreat after a day of exploring the city. The staff was incredibly friendly.',
            personName: 'Michael L.'
        }
    },
    {
        name: 'Serenity Suites',
        image: './recommendation/hotel-3.png',
        location: 'Sedona, Arizona',
        desc: 'Surrounded by stunning red rock formations, this tranquil hotel offers spacious suites with private balconies, a wellness center, and guided nature hikes for the ultimate relaxation experience.',
        price: 350,
        testimonial: {
            message: 'Staying at Serenity Suites was truly rejuvenating. The views were stunning, and the wellness center offered the perfect way to unwind. I left feeling completely refreshed!',
            personName: 'Jessica T.'
        }
    }
]



const Recommendation = () => {
    return (
        <motion.section 
        variants={fadeIn('up', 0.2)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: false, amount: 0 }}
        className='pb-12 xl:pt-[152] xl:pb-[112px] bg-soft_green-secondary relative'>
            {/* //    slider  */}
            <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView='show' viewport={{once: false, amount:0}}>
                <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay:3000,
                    disableOnInteraction: true
                }}
                loop
                speed={2000}
                >
                    {recommendationData.map((hotel, index) => {
                        return <SwiperSlide key={index}>
                            <div className='flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0'>
                            <div className='max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0'>  <h2 className='h2 mb-4'>{hotel.name}</h2>
                            <p className='text-[#155b66] font-bold text-sm mb-6'>{hotel.location}</p>
                            <p className='mb-[60px]'>{hotel.desc}</p>
                            <div className='flex items-center gap-x-[50px]'>
                                <Button className='px-[44px] bg-[#07424b] text-white rounded-full hover:bg-[#09525d]'>Book Now</Button>
                                <div className='text-black'>
                                    <span className='font-bold text-2xl'>{hotel.price}</span>
                                    <span className='text-sm'>/Night</span>
                                </div>
                            </div>

                            </div>
                            <div className='order-1 xl:order-2 flex-1 flex justify-center xl:justify-end relative h-[634px]'>
                                <div>
                                    <Image src={hotel.image} width={905}
                                    height={528} quality={100} alt='dd'
                                    className='xl:rounded-tl-[20px] xl:rounded-bl-[20px]'
                                    />
                                    <div className='bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10'>
                                        <p className='mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6'>{hotel.testimonial.message}</p>
                                        <p className='text-xl font-bold'>{hotel.testimonial.personName}</p>
                                    </div>
                                </div>
                                </div>
                        </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </motion.div>
        </motion.section>
    )
}

export default Recommendation
