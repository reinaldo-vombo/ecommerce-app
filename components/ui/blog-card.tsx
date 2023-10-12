import { IBlogPost } from "@/config/inventory";
import Image from "next/image";
import Link from "next/link";


export function BlogCard({ title, author, image, slug }: IBlogPost) {
   return (
      <>
         <div className="relative w-full space-y-5 md:w-1/2 lg:w-[25%]">
            <div className=" w-full border border-[#9309FF]">
               <Link href={`/blog-post/${slug}`} className="w-full">
                  <Image src={image} width={1000} height={1000} alt="post" />
               </Link>
            </div>
            <div className="space-y-3">
               <h3 className="text-xl font-semibold">{title}</h3>
               <Link href={`/profile/${author._id}`} className="flex items-center gap-2">
                  <span>AUTHOR: <b>{author.name}</b></span>
                  <Image src={author.avatar} className="rounded-full" width={30} height={30} alt="" />
               </Link>
            </div>
            <div className="absolute top-0 flex items-center justify-between w-full p-1">
               <div className="new">hello</div>
               <time>December 13, 2022</time>
            </div>
         </div>
      </>
   )
}