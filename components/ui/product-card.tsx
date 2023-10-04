import { shimmer, toBase64 } from "@/lib/image";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { formatCurrencyString } from "use-shopping-cart";
import { Button } from "./button";
import { product } from "@/sanity/schemas/product-schema";
import { SanityProduct } from "@/config/inventory";
interface Props {
   product: SanityProduct[]
}
export function ProductCard({ product }: Props) {
   return (
      <>
         {product.map((product, index) => index < 3 && (
            <div className="p-3 border-2 space-y-10 text-sm group main-card">
               <div className="">
                  <Link key={product._id} href={`/products/${product.slug}`}>
                     <h3 className="mb-4 font-bold">{product.name}</h3>
                     <ul>
                        <li>TYPE: Samsung</li>
                     </ul>
                  </Link>
               </div>
               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-gray-200 group-hover:opacity-75 dark:border-gray-800 flex justify-between">
                  <Link key={product._id} href={`/products/${product.slug}`}>
                     <Image
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml:base64,${toBase64(shimmer(225, 280))}`}
                        src={urlForImage(product.images[0]).url()}
                        alt={product.name}
                        width={225}
                        height={280}
                        className="h-full w-full object-cover object-center"
                     />
                  </Link>
               </div>
               <div>
                  <h2>size:</h2>
                  <select name="" id="" className="w-full bg-transparent rounder-tl-[15px] rounded-br-[15px] p-2 border border-primary mt-2">
                     <option value="">444</option>
                  </select>
               </div>
               <div className="flex items-center justify-between">
                  <p className=" mt-2 w-1/2 font-bold">{formatCurrencyString({
                     currency: product.currency,
                     value: product.price,
                  })}</p>
                  <Button className="w-1/2 transition-colors text-white hover:bg-violet-700">Carrinho</Button>
               </div>
            </div>
         ))}
      </>
   )
}