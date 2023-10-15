"use client"

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import React from 'react'

const Contact = () => {
   return (
      <div className='conctact flex items-center justify-center h-[140vh] md:h-screen py-7'>
         <div className="w-full border border-gray-500 rounded-md mx-8 lg:mx-32 blu flex ">
            <div className='flex flex-col md:flex-row'>
               <div className='w-full rounded-md bg-[#6046FF] p-4 md:w-[30%]'>
                  <div className='mb-7'>
                     <h1 className='mb-4 text-xl font-semibold'>Informções de contacto</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus vero architecto ipsum sequi debitis</p>
                  </div>
                  <div>
                     <ul className='space-y-8'>
                        <li className='flex flex-col items-center gap-4 md:flex-row'>
                           <Icons.mail /> hello@gmail.com
                        </li>
                        <li className='flex flex-col items-center gap-4 md:flex-row'>
                           <Icons.phone /> +244 923 456 789
                        </li>
                        <li className='flex flex-col items-center gap-4 md:flex-row'>
                           <Icons.pin /> Rua Marechal Brós Tito P-13 3º APT-G, Luanda, Angola
                        </li>
                     </ul>
                  </div>
               </div>
               <div className='w-full p-4 md:w-[70%]'>
                  <form >
                     <div className='flex flex-col items-center gap-4 md:flex-row'>
                        <div className="relative z-0 w-full flex items-center gap-3 mb-6 group">
                           <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                           <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome completo</label>
                        </div>
                        <div className="relative z-0 w-full flex items-center gap-3 mb-6 group">
                           <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                           <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                     </div>
                     <div className="relative z-0 w-full flex items-center gap-3 mb-6 group">
                        <input type="text" name="subject" id="subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Assunto</label>
                     </div>
                     <div className="relative z-0 w-full flex items-center gap-3 mb-6 group">
                        <textarea name="subject" id="subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Menssagem</label>
                     </div>
                     <Button className='transition-colors hover:bg-white hover:text-black'>Enviar</Button>
                  </form>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Contact