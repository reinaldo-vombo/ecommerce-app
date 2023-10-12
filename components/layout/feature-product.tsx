import Image from "next/image";
import { Button } from "../ui/button";
import { doubleCpu, productCpu } from "@/public/assets";

export function FeatureProduct() {
   return (
      <section className="bg-white">
         <div className="h-48 bg-black">
            <div className="mx-auto max-w-[1200px] pt-[67px] flex items-center justify-between flex-col md:pt-0 lg:flex-row">
               <h2 className="w-[9em] text-center leading-[1.5] md:text-left">Best Pro <span className="text-primary">Gaming Products</span></h2>
               <p className="w-96 text-center text-black md:text-white md:text-left">Gaming accessories include gear such as headsets, extra controllers, charging stations, memory devices, carrying cases and much more</p>
            </div>
         </div>
         <div className="relative py-28 px-7">
            <Image src={doubleCpu} width={400} height={300} className="absolute bottom-0 right-0" alt="" />
            <Image src={productCpu} width={400} height={300} className="absolute bottom-0 left-0" alt="" />
            <div className="flex items-center justify-center">
               <div className="fiter product-card">
                  <div className="relative z-10 space-y-6">
                     <div>
                        <h3 className="md:text-black text-white text-center text-2xl font-semibold mb-4">Playstation 5</h3>
                        <p className="text-center md:text-black text-white">Multiple .connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly with ease. Preloaded with Windows 10 64-bit OS for enhanced productivity and multitasking.</p>
                     </div>
                     <div className="mt-7">
                        <h3 className="text-left text-white md:text-black">size:</h3>
                        <select name="" id="" className="w-full bg-transparent md:text-black text-white rounder-tl-[15px] rounded-br-[15px] p-1 border border-primary mt-2">
                           <option value="">444</option>
                           <option value="">444</option>
                        </select>
                     </div>
                     <div className="flex items-center justify-between">
                        <p className=" mt-2 w-1/2 font-bold text-white md:text-black">90.000(kz)</p>
                        <Button className="w-1/2 transition-colors text-white hover:bg-violet-700">Carrinho</Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}