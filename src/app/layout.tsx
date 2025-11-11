import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { monaSans, ebGaramond } from './fonts'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Alexandra Lisabeth',
    default:
      'Alexandra Lisabeth - Auteure de Fantasy Épique',
  },
  description:
    'Alexandra Lisabeth, auteure de fantasy épique. Découvrez la saga Chronique des Premiers Hommes, un univers de magie et d\'aventure.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <body className={`flex h-full bg-zinc-50 dark:bg-black ${monaSans.variable} ${ebGaramond.variable} font-sans`}>
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
