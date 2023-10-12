"use client"
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { images } from '@/config/inventory';
import Image from 'next/image';
export function CardSlider() {
   return (
      <div className='relative'>
         <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper absolute"
         >
            {images.map((item) => (
               <SwiperSlide>
                  <Image src={item.img} width={300} height={300} alt='' />
               </SwiperSlide>
            ))}

         </Swiper>
      </div>
   )
}