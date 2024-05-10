import { Metadata } from 'next/types'

export const seo: Metadata = {
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
  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['./apple-touch-icon.png?v=4'],
    shortcut: ['./apple-touch-icon.png?v=4'],
  },
  manifest: './site.webmanifest',
}
