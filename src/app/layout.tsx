import type { Metadata } from 'next'
import { Kode_Mono } from 'next/font/google'
import './globals.css'

const kode = Kode_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nischal.dev/'),
  title: 'Nischal Mudennavar ⚡️ ',
  description:
    'Nischal Mudennavar is technology generalist with a passion for generative ai, software development, frontend engineering, design, physics, anime, and astronomy.',
  keywords:
    'Nischal Mudennavar, Design Technologist, UX Engineer, generative ai, software development, frontend engineering, design, physics, anime, astronomy, frontend developer, user experience, UI/UX design, web development, coding, programming, technology, software engineering, graphic design, animation, astrophysics, celestial bodies, Japanese animation, renaissance',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    title: 'Nischal Mudennavar ⚡️ ',
    description:
      'Nischal Mudennavar is technology generalist with a passion for generative ai, software development, frontend engineering, design, physics, anime, and astronomy.',
    url: 'https://www.nischal.dev',
    siteName: 'nischal.dev',
  },
  twitter: {
    title: 'Nischal Mudennavar ⚡️ ',
    card: 'summary_large_image',
    site: '@nschalll',
    creator: '@nschalll',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='m-0 box-border w-screen overflow-x-hidden p-0'>
      <body
        className={`${kode.className} min-h-screen w-screen overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  )
}
