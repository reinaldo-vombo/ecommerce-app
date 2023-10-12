"use client"
import Image from "next/image";
import Link from "next/link";
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { shimmer, toBase64 } from "@/lib/image";
import { urlForImage } from "@/sanity/lib/image";
import { SanityProduct } from "@/config/inventory";
import { formatCurrencyString } from "use-shopping-cart";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
interface Props {
   product: SanityProduct[]
}

export function CategoryList({ product }: Props) {
   return (
      <>
         <Slider product={product} />
      </>
   )
}