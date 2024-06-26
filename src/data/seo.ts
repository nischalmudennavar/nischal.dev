import { Metadata } from 'next/types'

export const seo: Metadata = {
  metadataBase: new URL('https://www.nischal.dev/'),
  title: 'Nischal Mudennavar',
  description:
    'Nischal Mudennavar is technology generalist with a passion for software development, Generative AI , frontend engineering, design, physics, anime, and astronomy.',
  keywords:
    'Nischal Mudennavar, www, nischal, nischal.dev, Nischal, , Design Technologist, UX Engineer, generative ai, software development, frontend engineering, design, physics, anime, astronomy, frontend developer, user experience, UI/UX design, web development, coding, programming, technology, software engineering, graphic design, animation, astrophysics, celestial bodies, Japanese animation, renaissance',
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
    canonical: 'https://www.nischal.dev/',
  },
  openGraph: {
    type: 'website',
    title: 'Nischal Mudennavar',
    description:
      'Nischal Mudennavar is technology generalist with a passion for software development, Generative AI,, frontend engineering, visual design, physics, anime, pyschology and astronomy.',
    url: 'https://www.nischal.dev',
    siteName: 'nischal.dev',
  },
  twitter: {
    title: 'Nischal Mudennavar',
    card: 'summary_large_image',
    site: '@nschalll',
    creator: '@nschalll',
  },
  icons: {
    icon: ['/favicon.ico'],
    apple: ['./apple-touch-icon.png'],
    shortcut: ['./apple-touch-icon.png'],
    
  },
  manifest: './site.webmanifest',
}
