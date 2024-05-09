import type { Metadata } from 'next'
import { Kode_Mono } from 'next/font/google'
import { ThemeProvider } from '@/context/theme-provider'
import { seo } from '@/data/seo'

import './globals.css'
import SpotifyWidget from '@/components/SpotifyWidget'

const kode = Kode_Mono({ subsets: ['latin'] })


// @/data/seo
export const metadata: Metadata = seo

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className='m-0 box-border overflow-x-hidden p-0'
      suppressHydrationWarning
    >
      <body className={`${kode.className} min-h-fit overflow-x-hidden  `}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {/* <SpotifyWidget showWidget /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
