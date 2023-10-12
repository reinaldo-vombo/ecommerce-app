import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Input } from "./ui/input"
interface Props {
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void
  searchQuery: string
}

export function MainNav({ onSubmit, searchQuery }: Props) {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-7 w-7" />
        <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
      <div className="hidden space-x-5 md:flex">
        {siteConfig.nav.map((link) => (
          <Link href={link.href} className="group">{link.name}</Link>
        ))}
      </div>
      <form onSubmit={onSubmit} className="hidden items-center lg:inline-flex">
        <Input
          id="search"
          name="search"
          type="search"
          autoComplete="off"
          placeholder="Search products..."
          className="h-9 lg:w-[300px]"
          defaultValue={searchQuery}
        />
      </form>
    </div>
  )
}
