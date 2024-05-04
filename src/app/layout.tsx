import type { Metadata } from "next";
import { Inter,Kode_Mono } from "next/font/google";
import "./globals.css";
import gif from '../assets/skull2.gif'

const inter = Inter({ subsets: ["latin"] });
const kode = Kode_Mono( { subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'nischal.dev',
  description:
    'Nischal Mudennavar is technology generalist with a passion for generative ai, software development, frontend engineering, design, physics, anime, and astronomy.',
  keywords:
    'Nischal Mudennavar, UX Engineer, generative ai, software development, frontend engineering, design, physics, anime, astronomy, frontend developer, user experience, UI/UX design, web development, coding, programming, technology, software engineering, graphic design, animation, astrophysics, celestial bodies, Japanese animation, renaissance',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Nischal Mudennavar',
    description:
      'Nischal Mudennavar is technology generalist with a passion for generative ai, software development, frontend engineering, design, physics, anime, and astronomy.',
    url: 'https://nischal.dev',
    siteName: 'nischal.dev',
    images: [
      {
        url:gif.src,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='m-0 box-border w-screen overflow-x-hidden p-0'>
      <body className={`${kode.className} w-screen overflow-x-hidden min-h-screen `}>
        {children}
      </body>
    </html>
  )
}
