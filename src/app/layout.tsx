import type { Metadata } from "next";
import { Inter,Kode_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const kode = Kode_Mono( { subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'nischal.dev',
  description:
    'Nischal Mudennavar is UX Engineer with a passion for software development, frontend engineering, design, physics, anime, and astronomy.',
  keywords:
    'Nischal Mudennavar, UX Engineer, software development, frontend engineering, design, physics, anime, astronomy, frontend developer, user experience, UI/UX design, web development, coding, programming, technology, software engineering, graphic design, animation, astrophysics, celestial bodies, Japanese animation, renaissance',
  authors: [{ name: 'Nischal Mudennavar', url: 'https://nischal.dev' }],
  creator: 'Nischal Mudennavar',
  publisher: 'Nischal Mudennavar',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kode.className}>{children}</body>
    </html>
  );
}
