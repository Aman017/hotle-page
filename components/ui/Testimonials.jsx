"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { fadeIn } from '@/varriants';
import Image from 'next/image';
import React from 'react';

const testimonialData = [
    {
        img: './public/testimonials/img-1.png',
        message: 'This hotel exceeded all my expectations! The staff was incredibly welcoming and attentive. From the moment I arrived, I felt right at home. The views from my room were breathtaking, showcasing the beauty of the surrounding landscape. I particularly enjoyed the luxurious amenities, especially the spa and pool areas. Each meal at the hotel restaurant was a culinary delight, featuring fresh and locally sourced ingredients. I can honestly say that my experience here was nothing short of perfect. I left feeling rejuvenated and eager to return. I highly recommend this hotel to anyone looking for a relaxing getaway.',
        personName: 'Alice Johnson',
        location: 'San Francisco, CA',
    },
    {
        img: './public/testimonials/img-2.png',
        message: 'A perfect getaway! The amenities were fantastic, and I loved every moment of my stay. The location was ideal, just a stone’s throw away from local attractions and beautiful beaches. Each day was filled with fun activities and relaxation. The staff was friendly and went out of their way to make my stay enjoyable. My room was spacious, beautifully decorated, and equipped with everything I needed. I particularly loved the sunrise views from my balcony. The hotel also offered a variety of dining options, each more delicious than the last. I couldn’t have asked for a better experience, and I can’t wait to come back!',
        personName: 'Michael Smith',
        location: 'New York, NY',
    },
];

const Testimonials = () => {
    return (
        <motion.section 
            variants={fadeIn('up',0.2)} 
            initial='hidden' 
            whileInView='show' 
            viewport={{once: false, amount:0}}
            className='bg-soft_green xl:h-[880px]'
        >
            <motion.div 
                variants={fadeIn('up',0.4)} 
                initial='hidden' 
                whileInView='show' 
                viewport={{once: false, amount:0}}
                className="container mx-auto"
            >
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }} 
                    className='xl:h-[680px] overflow-hidden'
                >
                    {testimonialData.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24'>
                                    <Image
                                        src={slide.img}
                                        width={470}
                                        height={470}
                                        quality={100} 
                                        alt={`${slide.personName} testimonial image`} // Improved alt text
                                        className='hidden xl:flex'
                                    />
                                    <div className='flex-1 rounded-3xl bg-white/20 text-white p-12'>
                                        <p className='text-lg leading-9 mb-8'>{slide.message}</p>
                                        <p className='text-xl font-bold'>{slide.personName}</p>
                                        <p>{slide.location}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </motion.div>
        </motion.section>
    );
}

export default Testimonials;
