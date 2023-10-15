import React, { ReactNode } from "react"
import { Icons } from "./icons"

interface IModal {
   children: ReactNode
   closeModal: () => void
}
export function Modal({ children, closeModal }: IModal) {
   const handleModalView = () => {
      closeModal()
   }
   return (
      <div className={`absolute w-[47rem] mobile z-[200] inset-0 m-auto rounded-md bg-white overflow-hidden p-4`}>
         <div className="relative w-full">
            <button type="button" className="absolute right-0 z-10" onClick={handleModalView} aria-label="close modal button">
               <Icons.closeIcon />
            </button>
         </div>
         {children}
      </div>
   )
}