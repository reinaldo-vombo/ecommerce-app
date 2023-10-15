
"use client"

import { Icons } from "./icons";
interface IOption {
   showModal: () => void
}

export function CardOptions({ showModal }: IOption) {

   return (
      <div className="absolute rounded-md space-x-7 right-[35px] bottom-1/2 border w-40 h-8 border-primary bg-[#ffffff9e]">
         <button aria-label="button icon" onClick={showModal}>
            <Icons.eye />
         </button>
         <button aria-label="button icon">
            <Icons.heart />
         </button>
      </div>
   )
}