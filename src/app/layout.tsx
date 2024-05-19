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
      <head>
        <title>Nischal Mudennavar</title>
        <meta name='title' content='Nischal Mudennavar' />
        <meta
          name='description'
          content='Nischal Mudennavar is technology generalist with a passion for software development, Generative AI , frontend engineering, design, physics, anime, and astronomy.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://nischal.dev/' />
        <meta property='og:title' content='Nischal Mudennavar' />
        <meta
          property='og:description'
          content='Nischal Mudennavar is technology generalist with a passion for software development, Generative AI , frontend engineering, design, physics, anime, and astronomy.'
        />
        <meta property='og:image' content='../assets/skull2.gif' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://nischal.dev/' />
        <meta property='twitter:title' content='Nischal Mudennavar' />
        <meta
          property='twitter:description'
          content='Nischal Mudennavar is technology generalist with a passion for software development, Generative AI , frontend engineering, design, physics, anime, and astronomy.'
        />
        <meta property='twitter:image' content='../assets/skull2.gif' />
      </head>

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
