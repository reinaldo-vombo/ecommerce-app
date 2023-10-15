"use client"

import { halfBluthooth, middleBluer, withBluerTop, withBluerBotton, minItem1, minItem2, mobileBg, topRightBluer, xBoxController } from "@/public/assets";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export function Main() {
   const { setTheme, theme } = useTheme()
   return (
      <div className="relative h-[100vh] overflow-hidden md:h-[93vh]">
         <Image src={theme === 'dark' ? topRightBluer : withBluerBotton} className="absolute right-0 top-0" width={1000} height={1000} alt="bluer" />
         <Image src={theme === 'dark' ? middleBluer : withBluerTop} className="absolute left-0 top-0" width={900} height={900} alt="bluer" />
         <Image src={minItem1} className="absolute left-[34%] top-[26.5rem]" width={50} height={50} alt="bluer" />
         <Image src={minItem2} className="absolute left-[4%] top-14 md:left-1/2" width={50} height={50} alt="bluer" />
         <Image src={halfBluthooth} className="absolute left-0 hidden max-w-[500px] sm:block" width={100} height={100} alt="bluthooth" />
         <Image src={xBoxController} className="absolute top-0 right-0 hidden sm:block" width={400} height={400} alt="xbox-controller" />
         <Image src={mobileBg} className="absolute bottom-0 right-0 sm:hidden" width={400} height={400} alt="xbox-controller" />
         <div className="relative w-full mx-0 px-2 py-24 z-10 md:py-60 md:mx-8 md:w-1/2">
            <h1 className="text-center text-5xl leading-[1.5] text-white dark:text-white md:text-left">
               Best{' '}
               <span className="text-primary">Pro Gaming</span>
               <br />
               Accessories
            </h1>
            <p className="text-center text-white md:text-left">Gaming accessories include gear such as headsets, extra controllers, charging stations, memory devices, carrying cases and much more.</p>
            <Button className="w-full md:w-36 mt-4 text-white transition-colors hover:bg-violet-600 ">Ver produtos</Button>
         </div>
      </div>
   )
}