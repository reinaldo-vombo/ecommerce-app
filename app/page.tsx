import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import { seedSanityData } from "@/lib/seed"
import { Main } from "@/components/main"
import { CategorySection } from "@/components/layout/categorys"
import { Hightlights } from "@/components/layout/best-product"
import { SubscriberSection } from "@/components/layout/subscriber"
import { Testimonial } from "@/components/layout/testimonial"
import { FeatureProduct } from "@/components/layout/feature-product"
import { BlogPosts } from "@/components/layout/blog"
import { LateasteProduct } from "@/components/layout/lateast-product"
import { Container } from "@/components/ui/container"

interface Props {
  searchParams: {
    date?: string
    price?: string
    color?: string
    category?: string
    size?: string
    search?: string
  }
}

export default async function Page({ searchParams }: Props) {
  const { date = 'desc', price, color, category, size, search } = searchParams
  const priceOrder = price ? `| order(price ${price})` : ''
  const dateOrder = date ? `| order(_createdAt ${date})` : ''
  const order = `${priceOrder}${dateOrder}`

  const productFilter = `_type == "product"`
  const colorFilter = color ? `&& "${color}" in colors` : ""
  const categoryFilter = category ? `&& "${category}" in categories` : ""
  const sizeFilter = size ? `&& "${size}" in sizes` : ""
  const searchFilter = search ? `&& name match "${search}"` : ""
  const filter = `*[${productFilter}${colorFilter}${categoryFilter}${sizeFilter}${searchFilter}]`

  const product = await client.fetch<SanityProduct[]>(
    groq`${filter} ${order} {
    _id,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    description,
    "slug": slug.current
  }`)

  return (
    <>
      <main>
        <Main />
        <Container className="flex items-center justify-between border-b border-gray-200 px-3 pb-4 pt-24 dark:border-gray-800">
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            0 products
          </h1>
          {/* Product Sort */}
          <ProductSort />
        </Container>

        <section aria-labelledby="products-heading" className="py-[27px] md:pb-24 md:pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div className={cn("", product.length > 0 ?
            'px-3 lg:grid-cols-4' : 'lg:grid-cols-[1fr_3fr]')}>
            <div className="hidden lg:block">
              {/* <ProductFilters /> */}
            </div>
            <ProductGrid product={product} />
          </div>
          <CategorySection product={product} />
          <SubscriberSection />
          <Hightlights />
          <FeatureProduct />
          <BlogPosts />
          <LateasteProduct product={product} />
        </section>
      </main>
    </>
  )
}
