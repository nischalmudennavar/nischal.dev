'use client'

import GridContainer from '@/components/ui/GridContainer'
import HeroSection from '@/components/HeroSection'
import { Kode_Mono } from 'next/font/google'
const kode = Kode_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <GridContainer className={`${kode.className} relative place-items-center`}>
      <HeroSection />
    </GridContainer>
  )
}
