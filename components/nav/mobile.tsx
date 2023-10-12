import React, { useState } from 'react'
import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import { Input } from "../ui/input";

export function MobileMenu() {
   const [showInput, setShowInput] = useState(false)
   const toggleInput = () => {
      setShowInput(!showInput)
   }
   return (
      <div className="flex items-center justify-center gap-28 md:hidden">
         <button type='button' className="h-10 w-10" onClick={toggleInput} aria-label='input'>
            <Icons.search />
         </button>
         <div className={`absolute bg-slate-100 transition-all ease-in-out duration-1000 rounded-full ${showInput ? 'w-[99%] h-12 translate-y-14 left-0 pt-[5px] mx-[5px]' : 'translate-y-[-5rem]  w-12 h-12 left-1/2'}`}>
            <Input
               id="search"
               name="search"
               type="search"
               autoComplete="off"
               placeholder="Search products..."
               className={`delay-200 text-black focus-visible:ring-0 focus-visible:ring-offset-0 ${showInput ? 'h-9 w-full border-none' : 'h-0 w-0 p-0'}`}
            //  defaultValue={searchQuery}
            />
         </div>

         <div className="h-8 w-8">
            <Link href="/cart">
               <Button size="sm" variant="ghost" className='p-0'>
                  <ShoppingBag className="h-5 w-5" />
                  {/* <span className="ml-2 text-sm font-bold">{cartCount}</span> */}
                  <span className="ml-2 text-sm font-bold">88</span>
                  <span className="sr-only">Cart</span>
               </Button>
            </Link>
         </div>
      </div>
   )
}