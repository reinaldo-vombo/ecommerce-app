import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { fontSans } from "@/lib/fonts"
import { Providers } from "@/components/providers"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "relative min-h-screen bg-white font-sans antialiased dark:bg-black ",
            fontSans.variable
          )}
        >
          <Providers>
            <SiteHeader />
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>

          </Providers>
        </body>
      </html>
    </>
  )
}
