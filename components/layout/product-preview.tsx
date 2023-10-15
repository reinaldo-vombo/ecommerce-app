import React, { useState } from 'react'
import { images } from "@/config/inventory"
import { Select } from "../select"
import { Button } from "../ui/button"
import Image from "next/image"

export function ProductPreviw() {
   const [activeImage, setactiveImage] = useState(0)

   const handleImagePreview = (index: any) => {
      setactiveImage(index)
   }

   return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2">
         <div className="w-full space-y-10">
            <div className="text-left">
               <h1 className="text-[32px] font-semibold">Electrobot Xtreme Gaming Series PC</h1>
               <p className="text-[13px]">Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet...</p>
            </div>
            <div className="space-y-7">
               <Select option='Branco' />
               <div className="flex items-center justify-between">
                  <b>50.000(kz)</b>
                  <span>quantidade:</span>
               </div>
               <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <Button className="w-full sm:w-48">Comprar</Button>
                  <Button className="w-full sm:w-48">Carrinho</Button>
               </div>
               <div className="flex items-center">
                  {images.map((item, index) => index < 4 && (
                     <button type="button" aria-label="button" onClick={() => handleImagePreview(index)}>
                        <Image src={item.img} width={100} height={100} alt="" />
                     </button>
                  ))}
               </div>
            </div>
         </div>
         <div className="w-full">
            <div className={`relative outline transition-all ease-in-out delay-300 rounded-full outline-[79px] outline-primary w-[21rem] h-[21rem] right-[-268px] t-[90px] ${activeImage === 1 ? 'rotate-[-102deg]' : ''} ${activeImage === 2 ? 'rotate-[-273deg]' : ''} ${activeImage === 3 ? 'rotate-[-199deg]' : ''} ${activeImage === 3 ? 'rotate-[-192deg]' : ''}`}>
               {images.map((item, index) => index < 4 && (
                  <div className={`absolute w-48 h-48 p-[.5rem] bg-red-600 rounded-full ${index === 0 ? 'left-[-50%] top-[40px]' : index === 1 ? 'top-[-50%] right-[32px]' : index === 2 ? '-bottom-1/2 right-[35px]' : index === 3 ? 'bottom-[46px] -right-1/2' : ''}`}>
                     <Image src={item.img} className={`${index === 1 ? 'rotate-[100deg]' : ''} ${index === 2 ? 'rotate-[-89deg]' : ''} ${index === 3 ? 'rotate-[-168deg]' : ''}`} width={150} height={200} alt='' />
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}