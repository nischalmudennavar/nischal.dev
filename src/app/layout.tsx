import type { Metadata } from 'next'

import { ThemeProvider } from '@/context/theme-provider'
import { seo } from '@/data/seo'
import './globals.css'


// @/data/seo
export const metadata: Metadata = seo

export default async function RootLayout({
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
      <body className={` min-h-fit overflow-x-hidden  `}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
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
