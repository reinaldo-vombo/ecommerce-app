import { SanityProduct } from "@/config/inventory";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import Link from "next/link";
interface Props {
   product: SanityProduct[]
}

export function CategorySection({ product }: Props) {
   return (
      <section className=" mx-auto max-w-[1200px] px-3 py-24">
         <div className="flex flex-col items-center justify-between gap-36 lg:flex-row">
            <div className="w-full lg:w-[25%]">
               <div className="flex items-center justify-center">
                  <h2 className="w-[9em] text-center lg:text-left">Best <span className="text-primary">Pro Gaming</span>{' '}Categories</h2>
               </div>
               <div className="mt-6 grid gap-4">
                  <Button className="btn flex justify-start gap-3 font-bold">
                     <Icons.gameIcon />
                     Acessório de jogos
                  </Button>
                  <Button className="btn flex justify-start gap-3 font-bold">
                     <Icons.headphones />
                     Headhones
                  </Button>
                  <Button className="btn flex justify-start gap-3 font-bold">
                     <Icons.batteryCharging />
                     Adaptadore
                  </Button>
                  <Link href='/categorias' className="text-center">Mais categorias</Link>
               </div>
            </div>
            <div className="category mt-6 w-full lg:w-[67%]">
               <Slider product={product} />
            </div>
         </div>
      </section>
   )
}