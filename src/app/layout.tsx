import type { Metadata } from 'next'
import { Kode_Mono } from 'next/font/google'
import { ThemeProvider } from '@/context/theme-provider'
import { seo } from '@/data/seo'
import { BASE_PATH, auth } from '@/auth'

import './globals.css'

import SessionProvider from '@/components/SessionProvider'

const kode = Kode_Mono({ subsets: ['latin'] })

// @/data/seo
export const metadata: Metadata = seo

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <html
      lang='en'
      className='m-0 box-border overflow-x-hidden p-0'
      suppressHydrationWarning
    >
      <body className={`${kode.className} min-h-fit overflow-x-hidden  `}>
        <SessionProvider session={session} basePath={BASE_PATH}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {/* <SpotifyWidget showWidget /> */}
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
function getServerSession() {
  throw new Error('Function not implemented.')
}
