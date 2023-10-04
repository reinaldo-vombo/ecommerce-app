import { halfBluthooth, middleBluer, minItem1, minItem2, topRightBluer, xBoxController } from "@/public/assets";
import Image from "next/image";
import { Button } from "./ui/button";

export function Main() {
   return (
      <div className="h-[80vh] overflow-hidden">
         <Image src={topRightBluer} className="absolute right-0 top-0" width={1000} height={1000} alt="bluer" />
         <Image src={middleBluer} className="absolute left-0 top-0" width={900} height={900} alt="bluer" />
         <Image src={minItem1} className="absolute left-[34%] top-[26.5rem]" width={50} height={50} alt="bluer" />
         <Image src={minItem2} className="absolute left-1/2 top-14" width={50} height={50} alt="bluer" />
         <Image src={halfBluthooth} className="absolute left-0 max-w-[500px]" width={100} height={100} alt="bluthooth" />
         <Image src={xBoxController} className="absolute right-0 top-0" width={400} height={400} alt="xbox-controller" />
         <div className="relative z-10 mx-8 w-1/2 py-36">
            <h1 className="text-5xl leading-[1.5]">
               Best{' '}
               <span className="text-primary">Pro Gaming</span>
               <br />
               Accessories
            </h1>
            <p>Gaming accessories include gear such as headsets, extra controllers, charging stations, memory devices, carrying cases and much more.</p>
            <Button className="mt-4 text-white transition-colors hover:bg-violet-600 ">Ver produtos</Button>
         </div>
      </div>
   )
}