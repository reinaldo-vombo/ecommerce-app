"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { middleBluer, ps5Bg, ps5Controller, topRightBluer } from "@/public/assets"


export function Hightlights() {
   return (
      <section className="relative overflow-hidden py-24">
         <Image src={ps5Bg} width={250} height={300} className="absolute bottom-0 right-0 z-10" alt="" />
         <Image src={ps5Controller} width={250} height={300} className="absolute bottom-0 left-0 hidden md:block" alt="" />
         <Image src={topRightBluer} className="absolute right-[17%] top-0 -z-10" width={800} height={1000} alt="bluer" />
         <Image src={middleBluer} className="absolute right-0 top-0 -z-10 " width={500} height={500} alt="bluer" />
         <div className="relative z-10 mx-auto mb-3 max-w-[1200px]">
            <h2 className="w-[9em] text-center leading-[1.5] lg:text-left">Best Pro <span className="text-primary">Gaming Products</span></h2>
         </div>
         <div className="flex items-center justify-center px-7">
            <div className="fiter product-card z-20">
               <div className="relative z-10 space-y-6">
                  <div>
                     <h3 className=" mb-4 text-white text-center text-2xl font-semibold">Playstation 5</h3>
                     <p className="text-center">Multiple .connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly with ease. Preloaded with Windows 10 64-bit OS for enhanced productivity and multitasking.</p>
                  </div>
                  <div className="mt-7">
                     <h3 className="text-left">size:</h3>
                     <select name="" id="" className="w-full bg-transparent rounder-tl-[15px] rounded-br-[15px] p-1 border border-primary mt-2">
                        <option value="">444</option>
                        <option value="">444</option>
                     </select>
                  </div>
                  <div className="flex items-center justify-between">
                     <p className=" mt-2 w-1/2 font-bold">90.000(kz)</p>
                     <Button className="w-1/2 transition-colors text-white hover:bg-violet-700">Carrinho</Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}