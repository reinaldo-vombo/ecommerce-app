"use client"

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
interface Props {
  product: SanityProduct[]
}

export function ProductGrid({ product }: Props) {
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
            <div className="product-card space-y-5">
              <Link key={product._id} href={`/products/${product.slug}`}>
                <h3 className="mb-4 font-bold">{product.name}</h3>
              </Link>
              <ul className="mb-3">
                <li>TYPE: Samsung</li>
              </ul>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-gray-200 group-hover:opacity-75 dark:border-gray-800 flex justify-between">
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
                <h2 className="text-left">size:</h2>
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
