"use client"

import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { shimmer, toBase64 } from "@/lib/image";
import { urlForImage } from "@/sanity/lib/image";
import { SanityProduct } from "@/config/inventory";
import { formatCurrencyString } from "use-shopping-cart";
import { Button } from "./button";
import Link from 'next/link';
import Image from 'next/image';
interface Props {
   product: SanityProduct[]
}
export function Slider({ product }: Props) {
   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}

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
            modules={[FreeMode, Pagination]}
            className="mySwiper"
         >
            {product.map((product) => (
               <SwiperSlide>
                  <div className="product-card space-y-5">
                     <Link key={product._id} href={`/products/${product.slug}`}>
                        <h3 className="mb-4 font-bold">{product.name}</h3>
                     </Link>
                     <ul className="mb-3">
                        <li>TYPE: Samsung</li>
                     </ul>
                     <div className="aspect-h-1 aspect-w-1 w-ful justify-center overflow-hidden rounded-lg border-gray-200 group-hover:opacity-75 dark:border-gray-800 flex">
                        <Link key={product._id} href={`/products/${product.slug}`}>
                           <Image
                              placeholder="blur"
                              blurDataURL={`data:image/svg+xml:base64,${toBase64(shimmer(225, 280))}`}
                              src={urlForImage(product.images[0]).url()}
                              alt={product.name}
                              width={225}
                              height={280}
                              className="h-full w-full object-cover object-center"
                           />
                        </Link>
                     </div>
                     <div>
                        <h3 className="text-left">size:</h3>
                        <select name="" id="" className="w-full bg-transparent rounder-tl-[15px] rounded-br-[15px] p-1 border border-primary mt-2">
                           <option value="">444</option>
                           <option value="">444</option>
                        </select>
                     </div>
                     <div className="flex items-center justify-between">
                        <p className=" mt-2 w-1/2 font-bold">{formatCurrencyString({
                           currency: product.currency,
                           value: product.price,
                        })}</p>
                        <Button className="w-1/2 transition-colors text-white hover:bg-violet-700">Carrinho</Button>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}