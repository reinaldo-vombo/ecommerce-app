"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Input } from "@/components/ui/input"
import { IBlogPost, blogPost, category } from "@/config/inventory"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const Blogs = () => {
   const [searchQuery, setSearchQuery] = useState('');
   const [selectedCategory, setSelectedCategory] = useState('Todos');

   // Filter the blog posts based on the search query
   const filteredBlogPosts = blogPost.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
   );

   // Filter the blog posts based on the selected category
   const sortedBlogPosts = selectedCategory === 'Todos'
      ? filteredBlogPosts
      : filteredBlogPosts.filter(post => post.catetegory === selectedCategory)

   return (
      <main className="py-7">
         <div className="blog p-24">
            <div className="flex items-center justify-center">
               <h1 className="text-center font-bold leading-[4.75rem]">Epic Blog Gamer Made For <span className="text-primary">True Gamers!</span></h1>
            </div>
         </div>
         <Container className="mt-36">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
               <div className="col-span-2 px-3 md:px-0">
                  {sortedBlogPosts.map((item) => (
                     <BlogCard
                        key={item._id}
                        _id={item._id}
                        title={item.title}
                        slug={item.slug}
                        desc={item.desc}
                        author={item.author}
                        image={item.image}
                        comment={item.comment}
                     />
                  ))}
               </div>
               <div className="col-span-1 space-y-12 px-3">
                  <div className="border border-[#9309FF] p-4">
                     <Input
                        className="border border-[#9309FF]"
                        type="text"
                        placeholder="pesquisar..."
                        onChange={(e) => setSearchQuery(e.target.value)}
                     />
                  </div>

                  <div className="border border-[#9309FF] p-4">
                     <h3 className="mb-4 text-[20px] font-semibold">Category</h3>
                     <ul>
                        {category.map((item, index) => (
                           <li className="mb-4" key={index}>
                              <button type="button" onClick={() => setSelectedCategory(item.label)}>
                                 <b>{item.label}</b>
                              </button>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="border border-[#9309FF] p-4">
                     <h3 className="mb-4 text-[20px] font-semibold">Ultimas noticias</h3>
                     <div>
                        {blogPost.map((item, index) => (
                           <div className="mb-4 flex flex-col items-center justify-between gap-5 md:flex-row" key={index}>
                              <Link href={`/blog-post/${item.slug}`} className="w-full">
                                 <Image src={item.image} className="w-full rounded-md" width={100} height={100} alt="post" />
                              </Link>
                              <div className="mb-5">
                                 <h4 className="text-[13px]">
                                    <Link href={`/blog-post/${item.slug}`}>
                                       <b className="transition-colors hover:text-primary">{item.title}</b>
                                    </Link>
                                 </h4>
                                 <span></span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </main>
   )
}

export default Blogs
const BlogCard = ({ title, image, desc, author, slug, comment }: IBlogPost) => {
   return (
      <div className="mb-32 border border-[#9309FF] md:mb-5">
         <div className="h-full w-full overflow-hidden">
            <Image src={image} className="w-full" width={1000} height={1000} alt="" />
         </div>
         <div className="mt-6 space-y-7 p-4">
            <div className="mb-4 flex flex-col items-center justify-start gap-3 md:flex-row">
               <b>{new Date(Date.now()).toLocaleDateString()}</b>
               <b>{comment} Comment</b>
               <div className="flex items-center justify-center gap-2">
                  <span className='ml-auto'> <b>By:</b>{author.name}</span>
                  <Image className="rounded-full object-cover" src={author.avatar} width={30} height={30} alt="" />
               </div>
            </div>
            <div className="space-y-9">
               <h5 className="text-center text-[28px] transition-colors hover:text-primary md:text-left">
                  <Link href={`/blog-post/${slug}`}>{title}</Link>
               </h5>
               <p className="text-center">{desc}</p>
               <Button className="mt-7 w-full text-white transition-colors hover:bg-white hover:text-black md:w-40">Ler mais</Button>
            </div>
         </div>
      </div>
   )
}