"use client"

import { SanityProduct } from "@/config/inventory";
import { Container } from "../ui/container";
import { Slider } from "../ui/slider";
interface Props {
   product: SanityProduct[]
}

export function LateasteProduct({ product }: Props) {
   return (
      <Container>
         <div className="mb-6">
            <h2 className="w-[9em] text-center lg:text-left">Best <span className="text-primary">Pro Gaming</span>{' '}roducts</h2>
         </div>
         <div className="px-8">
            <Slider product={product} />
         </div>
      </Container>
   )
}