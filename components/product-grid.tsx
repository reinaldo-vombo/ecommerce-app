"use client"

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { XCircle } from "lucide-react"
import { formatCurrencyString } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"
import { Button } from "./ui/button"
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardOptions } from './card-options'
import { ProductCard } from './product-card'
interface Props {
  product: SanityProduct[]
}

export function ProductGrid({ product }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  if (product.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

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
            <ProductCard
              key={product._id}
              _id={product._id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              currency={product.currency}
              images={product.images[0]}
              image={product.image}
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isModalOpen && <div className='absolute z-0 blur-md inset-0 bg-[#000000a8]' />}
    </>
  )
}
