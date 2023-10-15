import React, { useState } from 'react'
import { shimmer, toBase64 } from "@/lib/image"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { CardOptions } from "./card-options"
import { Button } from "./ui/button"
import { formatCurrencyString } from "use-shopping-cart"
import { Image as Images } from "sanity"
import { Modal } from './modal'
import { ProductPreviw } from './layout/product-preview'
import { Select } from './select'

interface Props {
   _id: string
   slug: string
   name: string
   image: string
   images: Images
   price: number
   currency: string
   isModalOpen: boolean
   setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export function ProductCard({ currency, _id, image, images, name, price, slug, setIsModalOpen, isModalOpen }: Props) {
   const [showOption, setShowOption] = useState(false)
   const [showModal, setShowModal] = useState(false)
   const showModalBox = () => {
      setShowModal(!showModal)
   }
   const showBackDrop = () => {
      setIsModalOpen(!isModalOpen)
   }
   const handleModal = () => {
      showModalBox()
      showBackDrop()
   }

   return (
      <>
         <div className="product-card space-y-5">
            <Link key={_id} href={`/products/${slug}`}>
               <h3 className="mb-4 font-bold">{name}</h3>
            </Link>
            <ul className="mb-3">
               <li>TYPE: Samsung</li>
            </ul>
            <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-gray-200 group-hover:opacity-75 dark:border-gray-800 flex justify-between" onMouseEnter={() => setShowOption(true)} onMouseLeave={() => setShowOption(false)}>
               <Link key={_id} href={`/products/${slug}`}>
                  <Image
                     placeholder="blur"
                     blurDataURL={`data:image/svg+xml:base64,${toBase64(shimmer(225, 280))}`}
                     src={urlForImage(images).url()}
                     alt={name}
                     width={225}
                     height={280}
                     className="h-full w-full object-cover object-center"
                  />
               </Link>
               {showOption && <CardOptions showModal={handleModal} />}
            </div>
            <div>
               <h3 className="text-left">size:</h3>
               <Select option='Brano' />
            </div>
            <div className="flex items-center justify-between">
               <p className=" mt-2 w-1/2 font-bold">{formatCurrencyString({
                  currency: currency,
                  value: price,
               })}</p>
               <Button className="w-1/2 transition-colors text-white hover:bg-violet-700">Carrinho</Button>
            </div>
         </div>
         {showModal &&
            <Modal closeModal={handleModal}>
               <ProductPreviw />
            </Modal>
         }
      </>
   )
}