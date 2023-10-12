"use client"

import React from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Edit, ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavItem } from "./nav-items"
import { MobileMenu } from "./nav/mobile"

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultSearchQuery = searchParams.get('search') ?? ""

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get('search')
    router.replace(`/?search=${searchQuery}`)
  }

  if (pathname.startsWith('studio')) return null
  return (
    <header className="fixed top-0 z-40 w-full border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav onSubmit={onSubmit} searchQuery={defaultSearchQuery} />
        <NavItem />
        <MobileMenu />
      </div>
    </header>
  )
}
