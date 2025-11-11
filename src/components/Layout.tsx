'use client'

import { usePathname } from 'next/navigation'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  const isHomePage = usePathname() === '/'

  return (
    <>
      {!isHomePage && (
        <div className="pointer-events-none fixed inset-0 z-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-[#060102] dark:ring-zinc-300/20" />
          </div>
        </div>
      )}
      <div className="relative z-10 flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
