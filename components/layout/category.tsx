"use client"

import React, { useState } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { blogPost, category } from '@/config/inventory';
import { Button } from '../ui/button';

export function Categorys() {
   const [thumbsSwiper, setThumbsSwiper] = useState<typeof Swiper | null>(null);

   return (
      <div className='relative categories h-screen overflow-hidden'>
         <Swiper
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 w-full relative isolate"
         >
            {blogPost.map(item => (
               <SwiperSlide>
                  <Image src={item.image} className='w-full absolute inset-0' width={2000} height={2000} alt='' />
                  <div className='absolute z-30 lg:w-[30rem] bottom-[395px] lg:bottom-[100px] mx-auto'>
                     <h2 className='text-[29px]'>{item.title}</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vel non deserunt</p>
                     <div className='flex items-center justify-center mt-6 gap-4 flex-wrap'>
                        <Button type='button' className='transition-colors ease-in-out hover:bg-white hover:text-black'>carrinho</Button>
                        <Button type='button' className='transition-colors ease-in-out hover:bg-white hover:text-black'>comprar</Button>
                     </div>
                  </div>
                  <div className='overlay' />
               </SwiperSlide>
            ))}

         </Swiper>
         <div className='relative z-10 pl-2 flex items-center justify-center gap-4 selected-img space-y-6 -top-[53%] lg:flex-col lg:-top-[83%] lg:ml-[31rem] lg:w-[80%]'>
            <div className='w-full space-y-8'>
               <h2>Categorias</h2>
               <div className='mb-6 flex flex-col items-center justify-start gap-4 lg:flex-row'>
                  {category.map((item, index) => (
                     <button type="button" className='rounded-md w-full bg-primary p-2 transition-colors ease-in-out hover:bg-white lg:w-20' key={index}>
                        <b>{item.label}</b>
                     </button>
                  ))}
               </div>
            </div>
            <Swiper
               onSwiper={setThumbsSwiper}
               loop={true}
               spaceBetween={10}
               slidesPerView={4}
               freeMode={true}
               watchSlidesProgress={true}
               breakpoints={{
                  640: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                  },
                  768: {
                     slidesPerView: 4,
                     spaceBetween: 40,
                  },
                  1024: {
                     slidesPerView: 5,
                     spaceBetween: 50,
                  },
               }}
               modules={[FreeMode, Navigation, Thumbs]}
               className="mySwiper  bottom-[61%]"
            >
               {blogPost.map(item => (
                  <SwiperSlide>
                     <div className='relative w-60 h-[22rem] border border-primary rounded-md'>
                        <Image src={item.image} className='h-full w-full' width={1000} height={1000} alt='' />
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>

         </div>

      </div>
   )
}