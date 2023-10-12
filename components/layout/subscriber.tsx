import { centerBluer, fullControler, subscribeImg } from "@/public/assets";
import Image from "next/image";
import { Button } from "../ui/button";

export function SubscriberSection() {
   return (
      <section className="mx-auto max-w-[1200px] py-24">
         <div className="flex flex-col items-center justify-between gap-16 sm:gap-0 lg:flex-row">
            <div className="w-full space-y-4 px-3 lg:w-[39%]">
               <h2 className="text-center md:w-[7em] lg:text-left">
                  Subscribe newsletter and <span className="text-primary">get -20% off</span>
               </h2>
               <p className="text-center md:text-left">Gaming accessories include gear such as headsets, extra controllers, charging stations, memory devices, carrying cases and much more.</p>
               <input type="text" className="relative rounded-l-md p-2 focus-visible:border-none" placeholder="Seu email" />
               <Button className="absolute text-white">subscrever</Button>
            </div>
            <div className="relative w-full md:w-1/2">
               <Image src={subscribeImg} className="relative z-10" width={500} height={500} alt="" />
               <Image src={centerBluer} className="absolute top-0 md:hidden" width={2000} height={2000} alt="" />
            </div>
         </div>
      </section>
   )
}