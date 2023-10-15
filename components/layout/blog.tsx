import { blogPost } from "@/config/inventory";
import { BlogCard } from "../ui/blog-card";

export function BlogPosts() {
   return (
      <section className="mx-auto max-w-[1200px] py-24">
         <div>
            <h2 className="w-[9em] text-center md:text-left">Best <span className="text-primary">Pro Gaming</span>  Blog</h2>
         </div>
         <div className="flex flex-col items-center justify-center px-4 gap-7 mt-6 lg:flex-row">
            {blogPost.map((item) => (
               <BlogCard
                  key={item._id}
                  _id={item._id}
                  title={item.title}
                  desc={item.desc}
                  catetegory={item.catetegory}
                  author={item.author}
                  image={item.image}
                  slug={item.slug}
               />
            ))}
         </div>
      </section>
   )
}